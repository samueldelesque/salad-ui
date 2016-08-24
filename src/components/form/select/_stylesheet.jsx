import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let itemHeight = '35px'

let styles = {
  selectBox: {
    padding: '7px 10px',
    lineHeight: 1.1,
    border: '1px solid ' + defaults.colors.gray3,
    borderRadius: '3px',
    cursor: 'pointer',
    overflow: 'hidden',
    height: itemHeight,
    width: '100%',
  },

  noBorder: {
    border: 'none',
  },

  dropdownIcon: {
    position: 'absolute',
    right: '10px',
    top: '13px',
    transform: 'rotate(-90deg)',
  },

  dropdown: {
    position: 'absolute',
    background: 'white',
    zIndex: 999,
    width: '100%',
    top: 0,
    border: '1px solid ' + defaults.colors.gray3,
  },

  dropdownHidden: {
    opacity: 0,
    visibility: 'hidden',
  },

  dropdownItem: {
    margin: 0,
    padding: 10,
    lineHeight: 1.1,
    cursor: 'pointer',
    height: itemHeight,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  selected: {
    backgroundColor: defaults.colors.gray5,
  }
}

export default styles
