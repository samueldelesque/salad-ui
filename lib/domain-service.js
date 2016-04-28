import {fetchJSON, post, del, patch} from './fetch-methods'

export default class DomainService {
  static apiEndpoint;
  static token;

  static init(token, apiEndpoint=null){
    if(apiEndpoint)
      DomainService.apiEndpoint = apiEndpoint
    else
      DomainService.apiEndpoint = 'https://api.pxlad.io'

    DomainService.token = token;
  }

  static setApiEndpoint(apiEndpoint) {
    DomainService.apiEndpoint = apiEndpoint
  }

  static setToken(token){
    DomainService.token = token;
  }

  static getDomains(page = 1, maxResults = 20){
    let url = DomainService.apiEndpoint + '/domains?access_token=' + DomainService.token +
              '&page=' + page + '&max_results=' + maxResults;
    return fetchJSON(url)
      .then(data => {
        if(data && data._items)
          return data
        else
            throw new Error('NO_DOMAINS')
      }).catch(err => {
        throw new Error('Failed to retrieve domain related information', err)
      });
  }

  static getVerifiedDomains(page = 1, maxResults = 20){
    let url = DomainService.apiEndpoint + '/domains?access_token=' + DomainService.token +
              '&where=' + encodeURIComponent('{"status":"verified"}')
              '&page=' + page + '&max_results=' + maxResults;
    return fetchJSON(url)
      .then(data => {
        if(data && data._items)
          return data
        else
            throw new Error('NO_VERIFIED_DOMAINS')
      }).catch(err => {
        throw new Error('Failed to retrieve domain related information', err)
      });
  }

  static addDomain(name){
    let url = DomainService.apiEndpoint + '/domains?access_token=' + DomainService.token;
    return post(url, {data: {name}})
      .then(data => {
        return data;
      }).catch(err => {
        throw new Error('Error adding a site', err)
      })
  }

  static verifySite(id){
    let url = DomainService.apiEndpoint + '/domains/' + id + '?access_token=' + DomainService.token;
    return patch(url, {data:{ready:true}})
      .then(data => {
        return data;
      }).catch(err => {
        throw new Error('Error verifying the site', err)
      })
  }

  static removeSite(id){
    let url = DomainService.apiEndpoint + '/domains/' + id + '?access_token=' + DomainService.token;
    return del(url).then().catch(err => {
      throw new Error('Error deleting a site: ', err)
    })
  }
}
