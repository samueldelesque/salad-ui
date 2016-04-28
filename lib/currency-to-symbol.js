export default function currencyToSymbol(cur){
  switch (cur) {
    case 'EUR':
      return '€'
      break
    default:
      return '$'
  }
}
