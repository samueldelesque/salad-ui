import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let itemHeight = '36px'

let styles = {
  selectBox: {
    padding: 10,
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
    maxHeight: 280,
    overflow: 'auto',
    border: '1px solid ' + defaults.colors.gray3,
  },

  dropdownHidden: {
    display: 'none',
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
