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
    display: 'inline-block',
    flex: -1,
    backgroundColor: defaults.colors.gray3,
    paddingRight: 10,
    color: 'white',
    lineHeight: 1,
  },

  inputContent: {
    outline: 'none',
    backgroundColor: 'transparent',
    flex: 1,
    border: 'none',
    padding: '8px 10px',
    fontSize: 'inherit',
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
