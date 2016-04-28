import cookie from 'cookie-cutter'
import R from 'ramda'
import {fetchJSON} from 'js/lib/dm/fetch-methods'
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment'

export default class DM_Sdk {
  static apiEndpoint = null
  static accessToken = null
  static authHeaders = {}
  static debug = false
  static SUMode = false

  static init(accessToken = null, apiEndpoint = null, locale = 'en_US') {
    if (!apiEndpoint) {
        DM_Sdk.apiEndpoint = location.host.match(/(\.dev|preprod|stage-[0-9]+)\./) ? `http://api.${location.host}` : 'https://api.dailymotion.com'
    } else {
        DM_Sdk.apiEndpoint = apiEndpoint
    }
    DM_Sdk.accessToken = accessToken
    if (DM_Sdk.accessToken) {
        DM_Sdk.authHeaders = {Authorization: `Bearer ${DM_Sdk.accessToken}`}
    }
    DM_Sdk.locale = locale
  }

  static setApiEndpoint(apiEndpoint) {
      DM_Sdk.apiEndpoint = apiEndpoint
  }

  static call (method, endpoint, data = {}, disableCache = false) {
    if (data.fields) {
      if (Array.isArray(data.fields)) {
        data.fields = data.fields.join(',')
      } else if (data.fields.apiFields) {
        data.fields = DM_Sdk.getFields(data.fields)
      }
    }
    if (DM_Sdk.debug) {
        console.log(`${method} ${endpoint} ${JSON.stringify(data)}`, 'headers',  DM_Sdk.authHeaders)
    }

    let headers = {}
    if (DM_Sdk.accessToken && method === 'GET') {
      data['access_token'] = DM_Sdk.accessToken
    } else {
        headers = DM_Sdk.authHeaders
    }

    //shouldn't be here if api was working correctly
    if (disableCache) {
      if (!data['context']) {
        data['context'] = {}
      }
      data['context'].t = (new Date()).getTime()
    }

    data['context'] = encodeURIComponent(DM_Sdk.optionsToQueryString(data['context']))
    // data.localization = DM_Sdk.locale
    // Data is fucked when sorting by a real country.
    // Sort needs to be fixed in API
    // How about this English from China, that seems to work fine :)
    data.localization = 'en_ZH'

    let fullEndpoint = `${DM_Sdk.apiEndpoint}${endpoint}`

    return fetchJSON(fullEndpoint, method, {
        method: method,
        data: data,
        headers: headers
    })
  }
  static get(endpoint, data = {}, disableCache = false) {
      return DM_Sdk.call('GET', endpoint, data, disableCache)
  }
  static post(endpoint, data = {}, disableCache = true) {
      return DM_Sdk.call('POST', endpoint, data, disableCache)
  }
  static delete(endpoint, data = {}, disableCache = true) {
      return DM_Sdk.call('DELETE', endpoint, data, disableCache)
  }
  static extractProps(data, component, prefix = '', level = 0) {
    let ret = {}

    if (Array.isArray(component) && component.length === 2) {
      prefix = component[0]
      component = component[1]
    }

    component.apiFields.forEach((field) => {
      if (typeof field === 'string') {
        if (prefix !== '') {
          if (level > 0) {
            ret[`${prefix}.${field}`] = data[`${prefix}.${field}`]
          }
          else {
            ret[field.replace(prefix + '.', '')] = data[`${prefix}.${field}`]
          }
        }
        else {
          ret[field] = data[field]
        }
      }
      else if (Array.isArray(field) && field.length === 2) {
        ret = R.merge(ret, DM_Sdk.extractProps(data, field[1], field[0], level++))
      }
      else {
        ret = R.merge(ret, DM_Sdk.extractProps(data, field, prefix, level++))
      }
    })
    return ret
  }

  static getFields(component, prefix='') {
    let retFields = []

    if (component.apiFields) {
      component.apiFields.forEach((field) => {
        if (typeof field === 'string') {
          retFields.push(`${prefix ? prefix + '.' : ''}${field}`)
        }
        else if (Array.isArray(field) && field.length === 2) {
          retFields = R.union(retFields, DM_Sdk.getFields(field[1], field[0]))
        }
        else {
          retFields = R.union(retFields, DM_Sdk.getFields(field, prefix))
        }
      })
    }
    return retFields
  }

  static getFieldsAsString(component, encode = false) {
    let res = R.join(',')(DM_Sdk.getFields(component))
    if (encode) {
      res = encodeURIComponent(res)
    }
    return res
  }

  static generateCall(endpoint, component, options) {
    let query = DM_Sdk.generateCallQuery(endpoint, component, options)
    return `https://api.dailymotion.com${query}`
  }

  static generateNockCall(endpoint, component, options) {
    return DM_Sdk.generateCallQuery(endpoint, component, options, true)
  }

  static optionsToQueryString = R.pipe(
     R.toPairs(),
     R.map(R.join('=')),
     R.join('&')
  )

  static generateCallQuery(endpoint, component, options, encodeFields = false) {

    let qsOptions = DM_Sdk.optionsToQueryString(options)
    if (qsOptions) {
      qsOptions = `&${qsOptions}`
    }
    let fields = DM_Sdk.getFieldsAsString(component, encodeFields)

    return `${endpoint}?fields=${fields}${qsOptions}`
  }
}

if(ExecutionEnvironment.canUseDOM){
  let authCookie = cookie.get('sid'),
    locale = 'en_US'
  if (cookie.get('su_sid')) {
    authCookie = cookie.get('su_sid')
    DM_Sdk.SUMode = true
  }
  if(typeof(DM_Context) !== 'undefined' && DM_Context.locale){
    locale = DM_Context.locale
  }
  DM_Sdk.init(authCookie, null, locale)
}
