export const currencyToSymbol = (cur) => {
  switch (cur) {
    case 'EUR':
      return '€'
      break
    default:
      return '$'
  }
}

export const formatCurrency = (amt, currency='') => {
  if(amt === null || amt === '') return
  if(typeof amt !== 'number') amt = parseFloat(amt)
  amt = amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyToSymbol(currency) + ' ' + amt;
}

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberToString = (value) => {
  const n = parseFloat(value)
  if(isNaN(n)) return value
  if(n > 1000000000) return Math.round(n/100000000)/10 + 'B'
  if(n > 10000000) return Math.round(n/1000000) + 'M'
  if(n > 1000000) return Math.round(n/100000)/10 + 'M'
  if(n > 10000) return Math.round(n/1000) + 'K'
  if(n > 1000) return Math.round(n/100)/10 + 'K'
  return Math.round(n*100)/100
}
