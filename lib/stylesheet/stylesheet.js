import merge from 'lodash.merge'

export let defaults = {
  colors: {
    dmBrand       : '#0066dc',
    dmBrandLight  : '#408ae5',
    dmGamesBrand  : '#42AEDC',
    trendingWtw   : '#00BFBF',

    gray1      : '#404040',
    gray2      : '#7F7F7F',
    gray3      : '#BFBFBF',
    gray4      : '#E5E5E5',
    gray5      : '#F5F5F5',
    yellow     : '#FFC800',
    orange     : '#FF8200',
    purple     : '#6F2872',
    red        : '#FF003C',
    green      : '#00C832',

    /// Social Colors
    twitterColor        : '#55ACEE',
    facebookColor       : '#3B5998',
    instagramColor      : '#517FA4',
    googleColor         : '#DD4B39',
    pinterestColor      : '#CC2127',
    myspaceColor        : '#313131',
    soundcloudColor     : '#F8630E',
    tumblrColor         : '#36465D',
    itunesColor         : '#656565',
    rssColor            : '#FFA500',
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
