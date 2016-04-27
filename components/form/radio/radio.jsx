import React from 'react';

export default class Radio extends React.Component {
  onChange(e) {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      return typeof child === 'string'
      ? <span dangerouslySetInnerHTML={ {__html: child} }></span>
      : child
    })
  }

  render() {
    let id = `radio-${this.props.name}-${this.props.value}`
    let props = {
      name: this.props.name,
      value: this.props.value,
      id: id,
      onChange: ::this.onChange
    }
    if (this.props.selected)
    {
      props.checked = true;
    }

    return (
      <div className={`form_input__radio ${this.props.className}`}>
        <input type="radio" {...props} />
        <label htmlFor={id}>
          <i className="radio_icon" style={{float: 'left'}}></i>
          <span style={{display: 'block', overflow: 'hidden'}}>
            {this.renderChildren()}
          </span>
        </label>
      </div>
    );
  }
}
