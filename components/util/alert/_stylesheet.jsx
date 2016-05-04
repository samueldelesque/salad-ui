import Stylesheet from '../../../lib/stylesheet/stylesheet'

let styles = {
  alertBox: {
    padding: '10px',
    fontSize: '14px',
    display: 'flex',
  },

  alertIcon: {
    float:'left',
    marginRight:'10px',
    display: 'flex',
  },

  title: {
    fontSize: '20px',
    marginBottom: '5px',
  },

  closeBtn: {
    float:'left',
    marginLeft: '10px',
    cursor: 'pointer',
    display: 'flex',
  }
}

export default Stylesheet.all(styles)
