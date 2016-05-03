import Stylesheet from '../../../lib/stylesheet/stylesheet'

let styles = {
  checkboxIcon: {
    position: 'relative',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    verticalAlign: 'middle',
    marginLeft: '0',
    marginRight: '10px',
    position: 'relative',
    backgroundColor: '#F5F5F5',
    border: 'solid 1px #E5E5E5',
    borderRadius: '3px',
  },

  checkmark: {
    cursor: 'pointer',
    fontFamily: "font-icons",
    content: "\EA0B",
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    top: '14px',
    left: '8px',
    width: '13px',
    height: '13px',
    fontSize: '12px',
    zIndex: '10',
    transition: 'all 0.2s ease-in',
  },
}

export default styles
