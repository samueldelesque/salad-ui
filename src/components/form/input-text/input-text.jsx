import React from 'react'
import styles from './_stylesheet'

const allowedInputProps = ['xWebkitSpeech', 'autoComplete']

export default class InputText extends React.Component {
  state = {
    value: '',
    focus: false
  }

  static defaultProps = {
    textarea: false,
    type: 'text',
    style: {},
    value: '',
    focus: false,
    prefix: false,
    suffix: false,
    error: false,
    placeholder: 'Start typing'
  }

  constructor(){
    super()
    this.id = this.id ? this.id + 1 : 0
  }

  componentWillMount(){
    this.setState({
      focus: this.props.focus,
      value: this.props.value,
    })
  }

  componentDidMount() {
    if (this.state.focus && !this.props.readOnly){
      this.focusInput()
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({value: nextProps.value})
    if (nextProps.focus !== this.props.focus){
      this.setState({
        focus: nextProps.focus
      })
      if (nextProps.focus === true){
        this.focusInput()
      }
    }
  }

  moveCursorToEnd(el) {
    if (typeof(el.selectionStart) == "number") {
      el.selectionStart = el.selectionEnd = el.value.length
    }
    else if (typeof(el.createTextRange) != "undefined") {
      el.focus()
      var range = el.createTextRange()
      range.collapse(false)
      range.select()
    }
  }

  focusInput(){
    this.refs.input.focus()
    this.moveCursorToEnd(input)
  }

  handleKeyUp(e){
    if(this.props.onKeyUp){
      this.props.onKeyUp(e)
    }
  }

  handleClick(){
    if (this.props.onClick) {
      this.props.onClick()
    }
    // Hmmm what's the use?
    // if (this.props.selectOnClick) {
    //   e.target.select()
    // }
  }

  handleChange(e){
    this.setState({value: e.target.value})
    if (this.props.onChange){
      this.props.onChange(e.target.value)
    }
  }

  handleBlur(){
    this.setState({focus: false})
    if (this.props.onBlur){
      this.props.onBlur()
    }
  }

  getHint() {
    if (this.props.hint) {
      return this.props.hint
    }

    if (this.props.maxLength) {
      return `${this.state.value.length}/${this.props.maxLength} characters`
    }
  }

  render() {
    let hint = this.getHint()
    let showHint = hint && !this.props.disabled && !this.props.readOnly
    let value = this.state.value ? this.state.value : this.props.value
    let tag = this.props.textarea ? 'textarea' : 'input'
    let id = `input.${this.id}`

    let props = {
      ref: 'input',
      type: this.props.type,
      disabled: this.props.disabled,
      style: Object.assign({}, styles.inputContent, this.props.textarea ? styles.textareaContent : null, this.props.style),
      placeholder: this.props.placeholder,
      onClick: ::this.handleClick,
      onBlur: ::this.handleBlur,
      onChange: ::this.handleChange,
      onKeyUp: ::this.handleKeyUp,
      value,
      id
    }
    allowedInputProps.forEach(property => {
      if(this.props[property]) props[property] = this.props.property
    })

    return (
      <div>
        {
          this.props.label ?
          <label htmlFor={id} style={{fontSize: 14, color: '#888'}}>{this.props.label}</label> :
          null
        }
        <div style={Object.assign({}, styles.inputContainer, this.props.textarea ? styles.textareaContainer : null, this.props.style)}>
          {
            this.props.prefix ?
            <span style={Object.assign({}, styles.inputContent, this.props.textarea ? styles.textareaContent : null, styles.inputPrefix)}>
              {this.props.prefix}
            </span> :
            null
          }
          {React.createElement(tag, props, null)}
          {
            this.props.suffix ?
            <span style={Object.assign({}, styles.inputContent, this.props.textarea ? styles.textareaContent : null, styles.inputPrefix)}>
              {this.props.suffix}
            </span> :
            null
          }
          {this.props.onClear && value && <i className="icon-close" onClick={this.props.onClear}/>}
        </div>
        {
          showHint && !this.props.error ?
          <div style={styles.inputError}>{hint}</div>
          : null
        }
        {
          this.props.error ?
          <div style={styles.inputError}>{this.props.error}</div>
          : null
        }
      </div>
    )
  }
}
