import Stylesheet, { defaults } from '../../../lib/stylesheet/stylesheet'

let styles = {
  inputContainer: {
    width: '100%',
    border: 'solid 1px ' + defaults.colors.gray3,
    borderRadius: '3px',
    display: 'flex',
  },

  textareaContainer: {
    height: '96px',
  },

  inputPrefix: {
    flex: -1,
    backgroundColor: defaults.colors.gray3,
    paddingRight: 10,
    color: 'white',
  },

  inputContent: {
    outline: 'none',
    backgroundColor: 'transparent',
    flex: 1,
    border: 'none',
    padding: '7px 10px',
    fontSize: '14px',
  },

  textareaContent: {
    resize: 'none',
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
