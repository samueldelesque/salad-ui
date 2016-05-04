import StyleSheet, { defaults } from '../../../lib/stylesheet/stylesheet'

const styles = {
  button: {
    borderRadius: 5,
    cursor: 'pointer',
    padding: '8px 12px',
    margin: '0 3px',
    color: 'white',
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.06)',
    position: 'relative',
    display: 'inline-block',
    top: 0
  },
  buttonHover: {
    top: 1,
    boxShadow: 'inset 0 0 20px 0 rgba(0,0,0,0.03)',
  },
  primary: {
    backgroundColor: defaults.colors.dmBrand,
  },
  primaryHover: {
  },
  default: {
    color: '#444',
    backgroundColor: 'white',
  },
  defaultHover: {
    backgroundColor: 'fefefe',
  },
}
export const mergeStyles = StyleSheet.all

export default styles
