import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  checkboxIcon: {
    position: 'relative',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    verticalAlign: 'middle',
    margin: '-2px 10px 0 0',
    position: 'relative',
    backgroundColor: defaults.colors.gray5,
    border: 'solid 1px ' + defaults.colors.gray5,
    borderRadius: '3px',
  },

  checkmark: {
    cursor: 'pointer',
    position: 'absolute',
    top: '7px',
    left: '2px',
    width: '13px',
    height: '13px',
    fontSize: '12px',
    zIndex: '10',
  },
}

export default styles
