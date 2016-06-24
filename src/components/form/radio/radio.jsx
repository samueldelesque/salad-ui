import React from 'react'
import styles from './_stylesheet'

export default class Radio extends React.Component {
  onChange(val) {
    if(this.props.disabled){
      return;
    }
    this.props.onChange && this.props.onChange(val)
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
      onChange: ::this.onChange,
      checked: this.props.selected,
    }

    let s = styles.radio
    let ds = styles.disc
    if(this.props.disabled){
      s = Object.assign({}, s, styles.radioDisabled)
      ds = Object.assign({}, ds, styles.discDisabled)
    }

    return (
      <div>
        <div style={s} onClick={()=>this.onChange(this.props.value)}>
          <input type="radio" {...props} style={{display:'none'}} />
          <div htmlFor={id}>
            <i style={styles.radioIcon}>
              {this.props.selected? <span style={ds}/> : null}
            </i>
            {this.renderChildren()}
          </div>
        </div>
      </div>
    );
  }
}
