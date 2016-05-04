import React, {Component} from 'react'
import styles from './_stylesheet.js'
import merge from 'lodash.merge'

export default class Anchor extends Component {
  state = {
    hovered: false
  }

  static defaultProps = {
    onPress: () => console.warn('Button has no onPress action.'),
    type: 'default',
    size: 'sm',
    fullWidth: false,
  }

  render(){
    let s = [{}, styles.button, styles[this.props.type], styles[this.props.size]]
    if(this.state.hovered)
      s = s.concat(styles.buttonHover, styles[this.props.type + 'Hover'])
    if(this.props.fullWidth)
      s = s.concat(styles.fullWidth)
    const buttonStyle = Object.assign(...s)
    return <div
      onMouseOver={() => this.setState({ hovered:true })}
      onMouseOut={() => this.setState({ hovered:false })}
      onClick={e => this.props.onPress(e)}
      style={buttonStyle}>
      {this.props.children}
    </div>
  }
}
