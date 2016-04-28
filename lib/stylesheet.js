import _ from 'lodash'

class StyleSheet {
  constructor(sheet){
    _.map(sheet, (attr, key) => this[key] = attr)
  }

  all(...args){
    return _.assign({}, ...args)
  }
}

export default StyleSheet
