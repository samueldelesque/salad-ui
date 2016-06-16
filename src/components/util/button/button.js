import React, {Component} from 'react'
import styles from './_stylesheet.js'
import Spinner from '../../spinner/spinner'
import merge from 'lodash.merge'

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
    loading: false
  }

  onPress(e){
    if(this.props.disabled)
      return

    this.props.onPress(e)
  }

  render(){
    let s = [{}, this.props.style, styles.button, styles[this.props.type], styles[this.props.size]]
    if(this.state.hovered && !this.props.disabled)
      s = s.concat(styles.buttonHover, styles[this.props.type + 'Hover'])
    if(this.props.fullWidth)
      s = s.concat(styles.fullWidth)
    if(this.props.disabled)
      s = s.concat(styles.buttonDisabled)

    const buttonStyle = Object.assign(...s)
    return <div
      onMouseOver={() => this.setState({ hovered:true })}
      onMouseOut={() => this.setState({ hovered:false })}
      onClick={(e) => this.onPress(e)}
      style={buttonStyle}>
      {
        this.props.loading ?
        <Spinner/>:
        this.state.hovered && this.props.mouseOverText ?
        this.props.mouseOverText :
        this.props.children
      }
    </div>
  }
}
