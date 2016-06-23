import Q from 'q'
import merge from 'lodash.merge'
import glob from './glob'

let debug = false
let mockApi = false

export const enableMock = function(enable = true){
  mockApi = enable
}
export const enableDebug = function(enable = true){
  debug = enable
}

export const serialize = function (obj){
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
export const fetchJSON = function (url, method = 'GET', params = null){
  let r = Q.defer()

  method = method.toUpperCase()
  if(!~['GET', 'POST', 'DELETE', 'PUT', 'PATCH'].indexOf(method)){
    if(typeof(method) === 'object' && !params) params = method
    method = 'GET'
  }

  params = merge({
    method: method,
    headers: {}
  }, params)

  if(method === 'GET' && params.data){
    url += (!~url.indexOf('?') ? '?' : '&') + serialize(params.data)
    delete params.data
  }

  if(method === 'POST' || method === 'PATCH'){
    params.headers['Content-Type'] = 'application/json'
    params.body = JSON.stringify(params.data)
    delete params.data
  }

  if(debug || params.debug)
    console.log(method, url, params )

  if(mockApi)
    url = '/api-mock?url=' + btoa(url)

  fetch(url, params)
  .then(res => {
    if(res.status >= 399)
      return r.reject(res.status + ' error', res)

    if(res.status === 204)
      return r.resolve()

    if(params.debug) console.log('Response: ', res)
    res.json().then(json => {
      if(params.debug) console.log('Body', json)
      r.resolve(json)
    })

    //setTimeout(()=>r.reject({error: 'Response had no body'}), 1000)
  })
  .catch(err => r.reject({error: 'Failed to connect to server.', err}))
  return r.promise
}
export const get = function (url, params = null){
  if(typeof(url) === 'object' && !params) params = url
  return fetchJSON(url, 'GET', params)
}
export const post = function (url, params = null){
  if(typeof(url) === 'object' && !params) params = url
  return fetchJSON(url, 'POST', params)
}
export const patch = function (url, params = null){
  if(typeof(url) === 'object' && !params) params = url
  return fetchJSON(url, 'PATCH', params)
}
export const put = function (url, params = null){
  if(typeof(url) === 'object' && !params) params = url
  return fetchJSON(url, 'PUT', params)
}
export const del = function (url, params = null){
  if(typeof(url) === 'object' && !params) params = url
  return fetchJSON(url, 'DELETE', params)
}
