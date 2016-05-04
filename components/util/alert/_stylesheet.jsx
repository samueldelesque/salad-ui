import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  alertBox: {
    padding: defaults.padding.sm,
    fontSize: '14px',
    display: 'flex',
  },

  alertIcon: {
    marginRight:'15px',
    display: 'flex',
  },

  title: {
    fontSize: '20px',
    marginBottom: '5px',
  },

  closeBtn: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },

  closeIcon: defaults.colors.gray2,

  colorMap: {
    info: {iconColor: defaults.colors.blue, bgColor: '#ebf4ff'},
    error: {iconColor: defaults.colors.red, bgColor: '#fff0f3'},
    warning: {iconColor: defaults.colors.orange, bgColor: '#fff3e5'},
    success: {iconColor: defaults.colors.green, bgColor: '#e2ffe9'}
  }
}

export default Stylesheet.all(styles)
