import React, {Component, PropTypes} from 'react';

export default class FormInput extends Component {
  render() {
    let className = `form_input ${this.props.className?this.props.className:''} ${this.props.error ? 'form_input--error' : ''}`;
    let showHint = this.props.hint && !this.props.disabled && !this.props.readOnly
    let error = this.props.error

    if (typeof this.props.error === 'boolean' && this.props.error && this.props.hint) {
      error = this.props.hint
    }

    return (
      <div className={className}>
        {this.props.children}
        {
          showHint && !this.props.error ?
          <div className="form_input__message" style={{display: 'block'}}>{this.props.hint}</div>
          : null
        }
        {
          error ?
          <div className="form_input__message" style={{display: 'block'}}>{error}</div>
          : null
        }
      </div>
    );
  }
}
