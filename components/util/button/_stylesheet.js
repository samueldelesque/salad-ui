import StyleSheet, { defaults } from '../../../lib/stylesheet/stylesheet'

const styles = {
  button: {
    cursor: 'pointer',
    padding: '6px 12px',
    margin: '0 3px',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.06)',
    position: 'relative',
    display: 'inline-block',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 3,
    top: 0
  },
  buttonHover: {
    top: 1,
    boxShadow: 'inset 0 0 20px 0 rgba(0,0,0,0.03)',
  },
  primary: {
    backgroundColor: defaults.colors.dmBrand,
    border: '2px solid ' + defaults.colors.dmBrand,
  },
  primaryHover: {
  },
  default: {
    color: defaults.colors.gray2,
    borderColor: defaults.colors.gray2,
    backgroundColor: 'white',
  },
  defaultHover: {
    backgroundColor: 'fefefe',
  },
}
export const mergeStyles = StyleSheet.all

export default styles
