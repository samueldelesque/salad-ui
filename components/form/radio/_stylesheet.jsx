import Stylesheet from '../../../lib/stylesheet/stylesheet'

let styles = {
  radioIcon: {
    position: 'relative',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    verticalAlign: 'middle',
    margin: '-2px 10px 0 0',
    position: 'relative',
    backgroundColor: defaults.colors.gray5,
    border: 'solid 1px ' + defaults.colors.gray5,
    borderRadius: '50%',
  },

  disc: {
    cursor: 'pointer',
    position: 'absolute',
    top: '8px',
    left: '3px',
    width: '10px',
    height: '10px',
    zIndex: '10',
    backgroundColor: defaults.colors.dmBrand,
    borderRadius: '50%',
  },
}

export default styles
