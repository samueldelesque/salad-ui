import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  wrapper: {
    position: 'fixed',
    width: '600px',
    minHeight: '200px',
    maxHeight: '600px',
    top: '10%',
    left: '50%',
    marginLeft: '-300px',
    background: 'white',
    zIndex: '9999',
    boxShadow: '0 0 0 20038px rgba(0,0,0,.5)',
    borderRadius: '5px'
  },

  heading: {
    padding: '15px 20px',
    fontSize: '20px',
    color: 'white',
    background: defaults.colors.dmBrand,
  },

  content: {
    padding: '20px',
    backgroundColor: 'white',
  },

  action: {
    padding: '15px 20px',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: defaults.colors.gray4,
  },
}

export default styles
