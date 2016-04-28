export default function numberToString (value){
  if(typeof value !== 'number') return value
  if(value > 1000000000) return Math.round(value/100000000)/10 + 'B'
  if(value > 10000000) return Math.round(value/1000000) + 'M'
  if(value > 1000000) return Math.round(value/100000)/10 + 'M'
  if(value > 10000) return Math.round(value/1000) + 'K'
  if(value > 1000) return Math.round(value/100)/10 + 'K'
  return Math.round(value*100)/100
}
