import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  checkbox: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  checkboxDisabled: {
    color: defaults.colors.gray3,
    cursor: 'not-allowed',
  },
  checkboxIcon: {
    position: 'relative',
    display: 'block',
    width: 16,
    height: 16,
    position: 'relative',
    backgroundColor: defaults.colors.gray5,
    border: 'solid 1px ' + defaults.colors.gray3,
    borderRadius: 3,
    float: 'left',
    marginRight: '10px',
  },

  checkmark: {
    position: 'absolute',
    width: 14,
    height: 14,
    width: 13,
    height: 13,
    top: 1,
    left: 1,
    fontSize: 12,
    zIndex: 2,
  },
  gray: defaults.colors.gray3,
  blue: defaults.colors.dmBrand,
}

export default styles
