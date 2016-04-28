import merge from 'lodash.merge'

let defaults = {
  colors: {

  }
}

export default class StyleSheet {
  static create(sheet){
    // Do something fancy like vendor prefix etc.
    return sheet
  }

  static all(...args){
    return merge(...args)
  }

  static defaults(newDefaults){
    if(!newDefaults) return defaults
    return defaults = merge(defaults, newDefaults)
  }
}
