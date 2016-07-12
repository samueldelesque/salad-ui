import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { sprintf } from 'sprintf-js'

export let DEBUG = false
export let LANG = 'en'
export let PLURAL_TYPE = 'german'

export default class Trans extends React.Component {
  static defaultProps = {
    closeLink: '</a>',
    newLine: '<br/>',
  }

  static translate = (...args) => translate(...args)
  static enableDebug = (enable = true) => DEBUG = !!enable
  static setLang = (locale = 'en') => {
    LANG = locale
    PLURAL_TYPE = pluralTypeName(locale)
  }

  allowedElements = [
    'a','b', 'i','p','span','br', 'img'
  ]

  render() {
    const pluralForm = isPlural(parseFloat(this.props.n||1))
    return (
      <span dangerouslySetInnerHTML={{
          __html: translate(this.props.children, this.props, pluralForm, this.trans || this.props.context)
        }}></span>
    )
  }
}

const unsafe_translate = (key, args, pluralForm, trans) => {
  if(trans && trans[key]) key = trans[key]
  else{
    if(DEBUG) console.warn('%s is not in translated keys', key, ' - context was ', trans)
  }
  if(typeof(key) === 'object' && key.singular){
    if(pluralForm)
      return sprintf(key.plural, args)
    else
      return sprintf(key.singular, args)
  }
  let replacements = {}
  Object.keys(args).forEach(key =>
    replacements[key] = React.isValidElement(args[key]) ? ReactDOMServer.renderToString(args[key]) : args[key]
  )
  /*
  let replacements = zipObject(Object.keys(args), mapObject(args, e => {
    if(typeof(e) === 'object' && ~this.allowedElements.indexOf(e.type))
      return ReactDOMServer.renderToString(React.createElement(e.type, e, e.text||null))
    if(React.isValidElement(e))
      return ReactDOMServer.renderToString(e)
    return e
  }))
  */
  return sprintf(key, replacements)
}

export const translate = (key, args, pluralForm, trans) => {
  let translation = key
  if(typeof(pluralForm) === 'object'){trans = pluralForm;pluralForm=1}
  try{
    translation = unsafe_translate(key, args, pluralForm, trans)
  }
  catch (e){
    console.warn('Failed to produce translation of ', key, e)
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
export const isPlural = (n = 1) => pluralTypes[PLURAL_TYPE](n)
