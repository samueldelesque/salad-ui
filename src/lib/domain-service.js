import {fetchJSON, post, del, patch} from './http'

export default class ds {
  static apiEndpoint;
  static token;

  static init(token, apiEndpoint=null){
    if(apiEndpoint)
      ds.apiEndpoint = apiEndpoint
    else
      ds.apiEndpoint = 'https://api.pxlad.io'

    ds.token = token;
  }

  static setApiEndpoint(apiEndpoint) {
    ds.apiEndpoint = apiEndpoint
  }

  static setToken(token){
    ds.token = token;
  }

  static getDomains(page = 1, maxResults = 20){
    let url = ds.apiEndpoint + '/domains?access_token=' + ds.token +
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
    let url = ds.apiEndpoint + '/domains?access_token=' + ds.token +
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
    let url = ds.apiEndpoint + '/domains?access_token=' + ds.token;
    return post(url, {data: {name}})
      .then(data => {
        return data;
      }).catch(err => {
        throw new Error('Error adding a site', err)
      })
  }

  static verifySite(id){
    let url = ds.apiEndpoint + '/domains/' + id + '?access_token=' + ds.token;
    return patch(url, {data:{ready:true}})
      .then(data => {
        return data;
      }).catch(err => {
        throw new Error('Error verifying the site', err)
      })
  }

  static removeSite(id){
    let url = ds.apiEndpoint + '/domains/' + id + '?access_token=' + ds.token;
    return del(url).then().catch(err => {
      throw new Error('Error deleting a site: ', err)
    })
  }
}
