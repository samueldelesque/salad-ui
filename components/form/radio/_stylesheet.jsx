import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  radio: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  radioDisabled: {
    cursor: 'not-allowed',
    color: defaults.colors.gray3,
  },
  radioIcon: {
    position: 'relative',
    display: 'block',
    width: '16px',
    height: '16px',
    margin: '5px 10px 0 0',
    position: 'relative',
    backgroundColor: defaults.colors.gray5,
    border: 'solid 1px ' + defaults.colors.gray3,
    borderRadius: '50%',
    float: 'left',
  },

  disc: {
    cursor: 'pointer',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: '10px',
    height: '10px',
    zIndex: '10',
    backgroundColor: defaults.colors.dmBrand,
    borderRadius: '50%',
  },
  discDisabled: {
    backgroundColor: defaults.colors.gray3,
  }
}

export default styles
