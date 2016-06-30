import React, {Component} from 'react'
import styles from './_stylesheet.js'
import Spinner from '../../spinner/spinner'

export default class Anchor extends Component {
  state = {
    hovered: false
  }

  static defaultProps = {
    onPress: () => console.warn('Button has no onPress action.'),
    type: 'default',
    size: 'md',
    fullWidth: false,
    style: {},
    isLoading: false
  }

  onPress(e){
    if(this.props.disabled)
      return

    this.props.onPress(e)
  }

  render(){
    const buttonStyle = Object.assign(
      {},
      styles.button,
      styles[this.props.type],
      styles[this.props.size],
      this.state.hovered && !this.props.disabled ? Object.assign({}, styles.buttonHover, styles[this.props.type + 'Hover']) : null,
      this.props.fullWidth ? styles.fullWidth : null,
      this.props.disabled ? styles.buttonDisabled : null,
      this.props.style
    )
    return <div
      onMouseOver={() => this.setState({ hovered:true })}
      onMouseOut={() => this.setState({ hovered:false })}
      onClick={(e) => this.onPress(e)}
      style={buttonStyle}>
      {
        this.props.isLoading ?
        <Spinner/>:
        this.state.hovered && this.props.mouseOverText ?
        this.props.mouseOverText :
        this.props.children
      }
    </div>
  }
}
