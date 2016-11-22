import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { sprintf } from 'sprintf-js'
import {render} from '../../../lib/formatter'

export let DEBUG = false
export let LANG = 'en'
export let PLURAL_TYPE = 'german'
let DEPRECATION_WARNING_SHOWED = false
let HIGHLIGHT_TRANSLATIONS = false
let LOG_ALL_TRANSLATIONS = false

let transRefs = {}

export default class Trans extends React.Component {
  static defaultProps = {
    closeLink: '</a>',
    newLine: '<br/>',
  }

  componentWillMount(){
    this.transRefsKey = 'transRefs.' + Math.random() + Date.now()
    transRefs[this.transRefsKey] = this
  }

  componentWillUnmount(){
    delete transRefs[this.transRefsKey]
  }

  static translate = (...args) => {
    return translate(...args)
  }
  static enableDebug = (enable = true) => DEBUG = !!enable
  static enableLogAllTrans = (enable = true) => LOG_ALL_TRANSLATIONS = !!enable
  static enableHighlight = (enable = true) => {
    HIGHLIGHT_TRANSLATIONS = !!enable
    Object.keys(transRefs).map(key=>transRefs[key].forceUpdate())
  }
  static setLang = (locale = 'en') => {
    LANG = locale
    PLURAL_TYPE = pluralTypeName(locale)
  }
  static factory = (translations) => {
    return class T extends Trans {
      trans = translations
      static translate = (key, args, pluralForm) => {
        return translate(key, args, pluralForm, translations)
      }
    }
  }

  allowedElements = [
    'a','b', 'i','p','span','br', 'img'
  ]

  render() {
    const styles = HIGHLIGHT_TRANSLATIONS ? {background: "rgb(23, 80, 167)", color:"white", padding: '0 2px'} : {}
    const translation = translate(this.props.key || this.props.children, this.props, parseFloat(this.props.n||1), this.trans || this.props.trans || this.props.context)
    const content = HIGHLIGHT_TRANSLATIONS ? `${this.props.key || this.props.children} (${LANG})` : translation
    return (
      <span style={styles} dangerouslySetInnerHTML={{
        __html: content
      }}/>
    )
  }
}

const unsafeTranslate = (key, args, pluralForm, trans) => {
  let translation = key
  let replacements = {}
  if(typeof(trans[key]) === 'object' && pluralForm === 0 && typeof(trans[key]['singular']) !== 'undefined'){
    translation = trans[key]['singular']
  } else if(typeof(trans[key]) === 'object' && pluralForm >= 1 && typeof(trans[key]['plural']) !== 'undefined'){
    translation = trans[key]['plural']
  } else if(typeof(trans[key]) === 'object' && typeof(trans[key][pluralForm]) === 'string'){
    translation = trans[key][pluralForm]
  } else if(typeof(trans[key]) === 'string'){
    translation = trans[key]
  } else {
    if(DEBUG){console.warn('%s is not in translated keys', key, ' - translations: ', trans)}
    return translation
  }

  Object.keys(args).forEach(k => {
    replacements[k] = (
      React.isValidElement(args[k]) ?
      ReactDOMServer.renderToString(args[k]) :
      args[k]
    )
  })
  let formatted = translation
  if(translation.match(/\%\([^\)]+\)/g)){
    formatted = sprintf(translation, replacements)
    if(formatted !== translation && !DEPRECATION_WARNING_SHOWED){
      console.warn('SaladUI: DEPRECATION WARNING - translate() called with legacy sprintf format! Please upgrade translation keys. https://salad-ui.com', key)
      DEPRECATION_WARNING_SHOWED = true
    }
  } else {
    formatted = render(key, replacements)
  }
  return formatted
}

export const translate = (key, args={}, n=1, trans={}) => {
  let translation = key
  if(typeof(n) === 'object'){trans = n;n=1}
  try{
    const pluralForm = pluralType(n)
    translation = unsafeTranslate(key, args, pluralForm, trans)
  }
  catch (e){
    console.warn('Failed to produce translation of ', key, e)
  }
  if(LOG_ALL_TRANSLATIONS){
    console.log('Translate', key, args, n, trans, ' produced the translation: ' + translation)
  }
  return translation
}

export const pluralTypeToLanguages = {
  chinese: ['fa', 'id', 'ja', 'ko', 'lo', 'ms', 'th', 'tr', 'zh'],
  german: ['da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hu', 'it', 'nl', 'no', 'pt', 'sv'],
  french: ['fr', 'tl', 'pt-br'],
  russian:['hr', 'ru'],
  czech: ['cs'],
  polish: ['pl'],
  icelandic: ['is']
}

/*
 * Inspired By
 * (c) 2012-2016 Airbnb, Inc.
 * http://airbnb.io/polyglot.js/polyglot.html
 */

export const pluralTypes = {
  chinese: n => 0,
  german: n => n !== 1 ? 1 : 0,
  french: n => n > 1 ? 1 : 0,
  russian: n => n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2,
  czech: n => (n === 1) ? 0 : (n >= 2 && n <= 4) ? 1 : 2,
  polish: n => (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2),
  icelandic: n => (n % 10 !== 1 || n % 100 === 11) ? 1 : 0
}
export const langToTypeMap = (mapping) => {
  let type, langs, l, ret = {};
  for (type in mapping) {
    if (mapping.hasOwnProperty(type)) {
      langs = mapping[type];
      for (l in langs) {
        ret[langs[l]] = type;
      }
    }
  }
  return ret;
}
export const pluralTypeName = (locale) => {
  const langToPluralType = langToTypeMap(pluralTypeToLanguages)
  return langToPluralType[locale] || langToPluralType.en
}
export const pluralType = (n = 1) => pluralTypes[PLURAL_TYPE](n)
