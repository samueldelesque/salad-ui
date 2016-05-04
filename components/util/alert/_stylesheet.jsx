import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  alertBox: {
    padding: '15px 20px',
    fontSize: '14px',
    display: 'flex',
  },

  alertIcon: {
    marginRight:'15px',
    display: 'flex',
  },

  title: {
    fontSize: '18px',
    marginBottom: '5px',
  },

  closeBtn: {
    marginLeft: 'auto',
    cursor: 'pointer',
    display: 'flex',
  },

  colorMap: {
    info: '#ebf4ff',
    error: '#fff0f3',
    warning: '#fff3e5',
    success: '#e2ffe9'
  }
}

export default Stylesheet.all(styles)
