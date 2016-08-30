import currencyToSymbol from './currency-to-symbol'

export default function formatCurrency(amt, currency=''){
  if(!amt) return ''
  if(typeof amt !== 'number') amt = parseFloat(amt)
  amt =  amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return currencyToSymbol(currency) + ' ' + amt;
}
