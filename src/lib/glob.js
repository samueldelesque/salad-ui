const CANUSEDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

let glob = {}
if(CANUSEDOM){
  glob = window
}
else {
  console.log('SaladUI being used in Server mode.')
  glob = global
}
if(!glob.DM_ENV) glob.DM_ENV = {}

glob.canUseDom = function(){return CANUSEDOM}

String.prototype.trans = function(){return this}

export default {
  canUseDom: () => false
}
