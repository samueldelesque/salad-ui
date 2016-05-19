import StyleSheet, { defaults } from '../../../lib/stylesheet/stylesheet'

const styles = {
  button: {
    cursor: 'pointer',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.06)',
    position: 'relative',
    display: 'inline-block',
    borderWidth: 2,
    borderStyle: 'solid',
    textAlign: 'center',
    borderRadius: 3,
    top: 0
  },
  buttonHover: {
    top: 1,
    boxShadow: 'inset 0 0 20px 0 rgba(0,0,0,0.03)',
  },
  buttonDisabled: {
    cursor: 'not-allowed',
    opacity: '0.5',
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
  sm: {
    padding: '4px 10px',
  },
  md: {
    padding: '6px 14px',
  },
  lg: {
    padding: '10px 22px',
  },
  fullWidth: {
    display: 'block'
  },
}
export const mergeStyles = StyleSheet.all

export default styles
