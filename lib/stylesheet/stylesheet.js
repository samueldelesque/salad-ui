import merge from 'lodash.merge'

export let defaults = {
  colors: {
    dmBrand: '#0066dc',
    dmBrandLight: '#408ae5',
  },

  padding: {
    sm: 10,
    md: 20,
    lg: 30,
  }
}

export default class StyleSheet {
  static create(sheet){
    // Do something fancy like vendor prefix etc.
    return sheet
  }

  static all(...args){
    return merge(...args.slice().reverse())
  }

  static defaults(newDefaults){
    if(!newDefaults) return defaults
    return defaults = merge(defaults, newDefaults)
  }
}
