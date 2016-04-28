import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import mapObject from 'lodash.map'
import zipObject from 'lodash.zipobject'
import { sprintf } from 'sprintf-js'

const DEBUG = true

export default class Trans extends React.Component {
  static defaultProps = {
    closeLink: '</a>',
    newLine: '<br/>',
  }

  allowedElements = [
    'a','b','p','span','br', 'img'
  ]

  translate(key, args){
    let trans = this.trans || this.props.context
    if(trans && trans[key]) key = trans[key]
    else{
      if(DEBUG) console.warn('%s is not in translated keys', key, ' - context was ', trans)
    }
    if(typeof key === 'object' && key.singular){
      if(this.props.isPlural)
        return sprintf(key.plural, args)
      else
        return sprintf(key.singular, args)
    }
    return sprintf(key, zipObject(Object.keys(args), mapObject(args, e => {
      if(typeof e === 'object' && ~this.allowedElements.indexOf(e.type))
        return ReactDOMServer.renderToString(React.createElement(e.type, e, e.text||null))
      if(React.isValidElement(e))
        return ReactDOMServer.renderToString(e)
      return e
    })))
  }

  render() {
    // console.log(this.trans)
    return (
      <span dangerouslySetInnerHTML={{__html: this.translate(this.props.children, this.props)}}></span>
    )
  }
}
