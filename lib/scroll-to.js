const easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
const position = function(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration)
}
const scrollTo = function(end, duration){
  duration = duration || 500
  if(typeof(window) === 'undefined') return
  const start = window.pageYOffset, clock = Date.now()

  let requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
      ((fn) => window.setTimeout(fn, 15))

  const step = () => {
    const elapsed = Date.now() - clock
    window.scroll(0, position(start, end, elapsed, duration))
    if(elapsed < duration) requestAnimationFrame(step)
  }
  step()
}
export default scrollTo
