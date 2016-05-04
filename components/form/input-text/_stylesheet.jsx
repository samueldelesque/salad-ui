import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  inputStyle: {
    width: '100%',
    lineHeight: '32px',
    height: '32px',
    border: 'solid 1px ' + defaults.colors.gray5,
    borderRadius: '3px',
    backgroundColor: 'white',
    padding: '0 0 0 10px',
    fontSize: '14px',
  },

  inputError: {
    float: 'right',
    whiteSpace: 'no-wrap',
    textAlign: 'right',
    fontSize: '13px',
    color: defaults.colors.red,
  },
}

export default styles
