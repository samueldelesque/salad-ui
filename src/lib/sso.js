import * as http from './http'

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

  static getJWT(service, accountId){
    if(!SSO.sdx)
      console.warn('SSO initialized without sdx')

    return SSO.getSSOAccount(service, accountId)
    .then((account) => {
      if(!account || !account.access_token) throw('NO_ACCOUNT')
      return account.access_token
    })
  }

  static readJWT(token, part){
    if(!token || typeof(token) !== 'string' || token.split('.').length < 2) return null
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
    return http.get(SSO.apiEndpoint + '/services/' + service + '/auth?sdx=' + SSO.sdx).then(data => {
      if(!data.accounts || data.accounts.length === 0)
        throw new Error('NO_ACCOUNT')
      else
        return data.accounts
    }).catch(err => {throw new Error('Failed to retrieve SSO account', err)})
  }

  static deleteSSOAccount(service, accountId){
    return http.delete(SSO.apiEndpoint + '/services/' + service + '/accounts/' + accountId + '?sdx=' + SSO.sdx).catch(err => {
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
    return http.post(SSO.apiEndpoint + '/services/' + service + '/accounts?sdx=' + SSO.sdx, {data: {name: accountName}}).then(SSOAccount=>{
      return SSO.getSSOAccount(service, SSOAccount.item.id)
    })
  }
}
