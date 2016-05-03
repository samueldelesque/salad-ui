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

glob.canUseDom = function(){return CANUSEDOM}

if(!glob.ga) glob.ga = false
if(!glob.DM_Context) glob.DM_Context = {}
if(!glob.DM_EMV) glob.DM_EMV = {}

String.prototype.trans = function(){return this}

export default glob
