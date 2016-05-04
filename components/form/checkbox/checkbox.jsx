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
    this.setState({checked: !this.state.checked})
    this.handleChange(!this.state.checked)
  }

  render() {
    return (
      <div style={{margin: '10px 0', position:'relative'}}>
        <input type="checkbox" checked={this.state.checked} style={{display:'none'}} />
        {this.state.checked ? <Icon onClick={::this.toggleState} type="check" style={styles.checkmark} fill="#0066DC"/> : null}
        <label onClick={::this.toggleState} style={{cursor:'pointer'}}>
          <i style={styles.checkboxIcon}></i>
          {this.props.children}
        </label>
      </div>
    )
  }
}
