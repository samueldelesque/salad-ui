import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon/icon'
import styles from './_stylesheet'

export default class Checkbox extends Component {
  state = {
    checked: false
  }

  static defaultProps = {
    checked: false,
    style: null
  }

  componentWillMount() {
    this.setState({checked: this.props.checked})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: nextProps.checked})
  }

  handleChange(value) {
    this.setState({checked: value})

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  toggleState() {
    if(this.props.disabled){
      return
    }
    else {
      this.setState({checked: !this.state.checked})
      this.handleChange(!this.state.checked)
    }
  }

  render() {
    let checkboxStyle = Object.assign(
      {},
      styles.checkbox,
      this.props.disabled ? styles.checkboxDisabled : null,
      this.props.style
    )

    return (
      <div>
        <div onClick={::this.toggleState} style={checkboxStyle}>
          <i style={styles.checkboxIcon}>
            {
              this.state.checked ?
              <Icon
                onClick={::this.toggleState}
                type="check"
                fill={this.props.disabled?styles.gray:styles.blue}
                style={styles.checkmark}
                width={styles.checkmark.width}
                height={styles.checkmark.height}
                fill={this.props.disabled?'#BFBFBF':'#0066DC'}/>:
              null
          }
          </i>
          {this.props.children
            ? <div style={{display:'block', overflow:'hidden'}}>{this.props.children}</div>
            : null
          }
        </div>
      </div>
    )
  }
}
