import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
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
    margin: '5px 10px 0 0',
  },

  checkmark: {
    cursor: 'pointer',
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
}

export default styles
