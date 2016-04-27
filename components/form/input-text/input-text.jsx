import React from 'react'
import PureComponent from 'react-pure-render/component'

export default class InputText extends PureComponent {
  state = {
    value: '',
    focus: false
  }
  trans = DM_ENV['form/input-text']
  static defaultProps = {
    textarea: false,
    type: 'text',
    focus: false,
    error: false
  }
  componentWillMount()
  {
    this.setState({
      focus: this.props.focus
    })
  }
  componentDidMount() {
    this.setState({value: this.props.value})
  }
  componentWillReceiveProps(nextProps)
  {
    this.setState({value: nextProps.value})
    if (nextProps.focus !== this.props.focus)
    {
      this.setState({
        focus: nextProps.focus
      })
      if (nextProps.focus === true)
      {
        this.focusInput()
      }
    }
  }
  moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length
    } else if (typeof el.createTextRange != "undefined") {
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
  componentDidMount()
  {
    if (this.state.focus && !this.props.readOnly)
    {
      this.focusInput()
    }
  }
  handleKeyUp(e)
  {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e)
    }
  }
  handleClick(e)
  {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
    if (this.props.selectOnClick) {
      e.target.select()
    }
  }
  handleChange(e)
  {
    let value = e.target.value
    this.setState({value: value})
    if (this.props.onChange)
    {
      this.props.onChange(value)
    }
  }
  handleBlur(e)
  {
    this.setState({focus: false})
    if (this.props.onBlur)
    {
      this.props.onBlur(e)
    }
  }

  getHint() {
    if (this.props.hint) {
      return this.props.hint
    }

    if (this.props.maxLength) {
      return `${this.state.value.length}/${this.props.maxLength} $<Trans context={this.trans}>max_characters</Trans>`
    }
  }

  render() {
    let className = `form_input ${this.props.className} ${this.props.error ? 'form_input--error' : ''}`
    let hint = this.getHint()
    let showHint = hint && !this.props.disabled && !this.props.readOnly
    let value = this.state.value ? this.state.value : this.props.value
    let tag = this.props.textarea ? 'textarea' : 'input'

    let {style, ...other} = this.props

    let props = {
      ref: 'input',
      type: this.props.type,
      ...other,
      placeholder: this.props.placeholder,
      onClick: ::this.handleClick,
      value: value,
      onBlur: ::this.handleBlur,
      onChange: ::this.handleChange,
      onKeyUp: ::this.handleKeyUp
    }

    return (
      <div className={`form_input-text ${className}`} style={style}>
        <span>
          {React.createElement(tag, props, null)}
          {this.props.onClear && value && <i className="icon-close" onClick={this.props.onClear} title={this.trans.clear}/>}
        </span>
        {
          showHint && !this.props.error ?
          <div className="form_input__message" style={{display: 'block'}}>{hint}</div>
          : null
        }
        {
          this.props.error ?
          <div className="form_input__message" style={{display: 'block'}}>{this.props.error}</div>
          : null
        }
      </div>
    )
  }
}
