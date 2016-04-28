let glob = window || global || {}

glob.__ISDEV__ = !!location.host.match(/dev/)
glob.__ISCLIENT__ = !!window
glob.__ISSERVER__ = !!global

if(!glob.console){
  // Nook
  glob.console = {
    log: function(){},
    error: function(){},
    warn: function(){}
  }
}

if(!glob.DM_Context){
  glob.DM_Context = {
    reader_login: 'spi0n'
  }
}

if(!glob.ga) glob.ga = false

String.prototype.trans = function(){
  return this
}


export default glob
