import React from 'react'
import {merge} from 'lodash'

import styles from './_stylesheet'

export default class InputText extends React.Component {
  state = {
    value: '',
    focus: false
  }
  static defaultProps = {
    textarea: false,
    type: 'text',
    style: {},
    focus: false,
    prefix: false,
    suffix: false,
    error: false,
    placeholder: 'Start typing'
  }
  componentWillMount()
  {
    this.setState({
      focus: this.props.focus,
      value: this.props.value || ""
    })
  }
  componentDidMount() {
    if (this.state.focus && !this.props.readOnly){
      this.focusInput()
    }
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
  handleChange(e){
    let value = e.target.value
    this.setState({value: value})
    if (this.props.onChange){
      this.props.onChange(value)
    }
  }

  handleBlur(e){
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
      return `${this.state.value.length}/${this.props.maxLength} characters`
    }
  }

  render() {
    let hint = this.getHint()
    let showHint = hint && !this.props.disabled && !this.props.readOnly
    let value = this.state.value ? this.state.value : this.props.value
    let tag = this.props.textarea ? 'textarea' : 'input'
    let id = Date.now()

    let props = {
      ref: 'input',
      type: this.props.type,
      ...this.props,
      style: Object.assign({}, styles.inputContent, this.props.textarea ? styles.textareaContent : null),
      placeholder: this.props.placeholder,
      onClick: ::this.handleClick,
      onBlur: ::this.handleBlur,
      onChange: ::this.handleChange,
      onKeyUp: ::this.handleKeyUp,
      value,
      id
    }

    return (
      <div>
        {
          this.props.label ?
          <label for={id} style={{fontSize: 14, color: '#888'}}>{this.props.label}</label> :
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
