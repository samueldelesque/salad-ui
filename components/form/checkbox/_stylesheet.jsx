import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  checkboxIcon: {
    position: 'relative',
    display: 'block',
    width: '16px',
    height: '16px',
    position: 'relative',
    backgroundColor: defaults.colors.gray5,
    border: 'solid 1px ' + defaults.colors.gray3,
    borderRadius: '3px',
    float: 'left',
    margin: '5px 10px 0 0',
  },

  checkmark: {
    position: 'absolute',
    fontSize: '12px',
    zIndex: '10',
  },
}

export default styles
