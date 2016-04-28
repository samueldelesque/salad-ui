import {fetchJSON} from 'js/lib/dm/fetch-methods'
import Q from 'q'

export default class SSO {
  static apiEndpoint = 'https://sso.dailymotion.com'
  static sdx = null
  static debug = true
  static userId = null
  static jwtfailures = {}
  static JWTRetries = 1

  static init(sdx, apiEndpoint = null) {
    if (!apiEndpoint)
      SSO.apiEndpoint = 'https://sso.dailymotion.com'
    else
      SSO.apiEndpoint = apiEndpoint

    SSO.sdx = sdx
  }

  static setApiEndpoint(apiEndpoint) {
    SSO.apiEndpoint = apiEndpoint
  }

  static setSDX(sdx){
    SSO.sdx = sdx;
  }

  static setUserId(userId){
    SSO.userId = userId;
  }

  static getJWTKey(service, accountId){
    return 'JWT__' + service + '_' + (accountId || SSO.userId);
  }

  static getJWT(service, accountId, ignoreCache=false, d=false){
    if(!SSO.sdx)
      console.warn('SSO initialized without sdx')

    var JWTKey = SSO.getJWTKey(service, accountId),
        localJWT = localStorage.getItem(JWTKey),
        nextTry = 0;

    SSO.debug && console.log('SSO GET', service, accountId)

    d = d || Q.defer()

    SSO.jwtfailures[JWTKey] = SSO.jwtfailures[JWTKey] || 0;

    if(!ignoreCache && localJWT && SSO.isJWTValid(localJWT)) d.resolve(localJWT)

    SSO.getSSOAccount(service, accountId)
    .then((account) => {
      if(!account || !account.access_token) return d.reject('NO_ACCOUNT')
      localStorage.setItem(JWTKey, account.access_token)
      return d.resolve(account.access_token)
    })
    .catch(err => {
      if(err === 'NO_ACCOUNT') return d.reject(err)
      SSO.jwtfailures[JWTKey]++
      if(SSO.jwtfailures[JWTKey] >= SSO.JWTRetries) return d.reject(err)

      nextTry = Math.round(4000 + (SSO.jwtfailures[JWTKey] * (SSO.jwtfailures[JWTKey]/4 + 1) * 1000))

      console.error('Failed to get SSO account for ' + service + '... launching retry in ' + nextTry / 1000 + 'sec');

      setTimeout(()=>{
        SSO.getJWT(service, accountId, ignoreCache)
        .then(token=>d.resolve(token))
        .catch(err=>d.reject(err))
      }, nextTry)
    })
    return d.promise
  }

  static readJWT(token, part){
    if(!token || typeof token !== 'string' || token.split('.').length < 2) return null
    return JSON.parse(atob(token.split('.')[1]))
  }

  static isJWTValid(token){
    var tokenData = SSO.readJWT(token)
    if(!tokenData) return false
    return (tokenData.exp + 60) > (new Date().getTime() / 1000)
  }

  static getJWTAccountId(token){
    return SSO.readJWT(token).sub;
  }

  static getSSOAccount(service, accountId){
    return SSO.getSSOAccounts(service).then(function(accounts){
      return SSO.matchSSOAccount(accounts, accountId)
    })
  }

  static getSSOAccounts(service){
    return fetchJSON(SSO.apiEndpoint + '/services/' + service + '/auth?sdx=' + SSO.sdx).then(data => {
      if(!data.accounts || data.accounts.length === 0)
        throw new Error('NO_ACCOUNT')
      else
        return data.accounts
    }).catch(err => {throw new Error('Failed to retrieve SSO account', err)})
  }

  static deleteSSOAccount(service, accountId){
    return fetchJSON(SSO.apiEndpoint + '/services/' + service + '/accounts/' + accountId + '?sdx=' + SSO.sdx, 'DELETE').catch(err=>{
        throw new Error('Failed to delete SSO account', res)
    })
  }

  static matchSSOAccount(accounts, accountId){
    let account
    if(accountId)
      account = accounts.find(acc=>acc.id===accountId)
    if(!account && accounts.length > 0){
      account =  accounts.pop();
      console.warn('Could not find an exact SSO account match for that accountId - ', accountId)
    }
    return account
  }

  static createSSOAccount(service, accountName){
    return fetchJSON(SSO.apiEndpoint + '/services/' + service + '/accounts?sdx=' + SSO.sdx, 'POST', {name: accountName}).then(SSOAccount=>{
      // @TODO: if SSO API implements this and returns token, uncomment the following and save 1 GET request.
      // SSO.SSOAccounts[service] = SSOAccount;
      // d.resolve(SSOAccount);
      return SSO.getSSOAccount(service, SSOAccount.item.id)
    })
  }
}
