import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let itemHeight = '35px'

let styles = {
  selectBox: {
    marginTop: '10px',
    padding: '5px 10px',
    border: '1px solid ' + defaults.colors.gray3,
    borderRadius: '3px',
    cursor: 'pointer',
    overflow: 'hidden',
    height: itemHeight,
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
    zIndex: '999',
    width: '100%',
    top: '0',
    border: '1px solid ' + defaults.colors.gray3,
  },

  dropdownItem: {
    margin: '0',
    padding: '5px 10px',
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
