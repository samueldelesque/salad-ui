import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  inputStyle: {
    width: '100%',
    height: '32px',
    border: 'solid 1px ' + defaults.colors.gray3,
    outline: 'none',
    borderRadius: '3px',
    backgroundColor: 'white',
    padding: '7px 0 7px 10px',
    fontSize: '14px',
  },

  textareaStyle: {
    height: '96px',
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
