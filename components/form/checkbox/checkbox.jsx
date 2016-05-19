import React, {Component, PropTypes} from 'react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'

export default class Checkbox extends Component {
  state = {
    checked: false
  }

  static defaultProps = {
    checked: false
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
    let s = styles.checkbox
    if(this.props.disabled){
      s = Object.assign({}, s, styles.checkboxDisabled)
    }

    return (
      <div>
        <div onClick={::this.toggleState} style={s}>
          <i style={styles.checkboxIcon}>
            {this.state.checked ?
              <Icon
                onClick={::this.toggleState}
                type="check"
                style={styles.checkmark}
                fill={this.props.disabled?styles.gray:styles.blue}
                width="14"
                height="14">
              </Icon>
            : null}
          </i>
          <div style={{display:'block', overflow:'hidden'}}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
