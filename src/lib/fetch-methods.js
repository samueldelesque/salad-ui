import merge from 'lodash.merge'
import glob from './glob'

let debug = false
let mockApi = false

export const enableMock = (enable = true) => mockApi = enable
export const enableDebug = (enable = true) => debug = enable
const buildError = (title, res) => {
  let error = new Error(title)
  error.res = res
  return error
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
  method = method.toUpperCase()
  if(!~['GET', 'POST', 'DELETE', 'PUT', 'PATCH'].indexOf(method)){
    if(typeof(method) === 'object' && !params) params = method
    method = 'GET'
  }

  params = merge({
    method: method,
    headers: {},
    contentType: 'JSON'
  }, params)

  if(
    (method === 'GET' && params.data) ||
    (params.useQueryParams && params.data)
  ){
    if(debug){
      console.log('serialize params', JSON.stringify(params.data))
    }
    url += (!~url.indexOf('?') ? '?' : '&') + serialize(params.data)
    delete params.data
  }

  else if((method === 'POST' || method === 'PATCH') && params.contentType.toUpperCase() === 'JSON'){
    params.headers['Content-Type'] = 'application/json'
    params.body = JSON.stringify(params.data)
    delete params.data
  }

  if(debug || params.debug) console.log(method, url, params )

  if(mockApi) url = '/api-mock?url=' + btoa(url)

  delete params.contentType

  return fetch(url, params)
  .then(res => {
    if(params.debug) console.log('Response: ', res)
    if(res.status >= 399) throw buildError(res.status + ' error', res)
    if(res.status === 204) return res
    if(params.headers['Content-Type'] && params.headers['Content-Type'].includes('text'))
      return res.text()
    else
      return res.json()
  })
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
