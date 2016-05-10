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
    let checkStyle = {
      margin: '10px 0',
      position:'relative'
    }
    if(this.props.disabled){
      checkStyle.color = '#BFBFBF;';
    }

    return (
      <div style={checkStyle}>
        <input type="checkbox" checked={this.state.checked} style={{display:'none'}} />
        <div onClick={::this.toggleState} style={{cursor:'pointer'}}>
          <i style={styles.checkboxIcon}>
            {this.state.checked ? <Icon onClick={::this.toggleState} type="check" style={styles.checkmark} fill={this.props.disabled?'#BFBFBF':'#0066DC'}/> : null}
          </i>
          <div style={{display:'block', overflow:'hidden'}}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
