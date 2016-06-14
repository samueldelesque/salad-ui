import React, {Component} from 'react'

export default class Anchor extends Component {
  state = {
    hovered: false
  }

  static defaultProps = {
    style: {
      color: '#0066DC',
      cursor: 'pointer',
    },

    activeStyle: {
      textDecoration: 'underline'
    },

    hoverStyle: {
      textDecoration: 'underline'
    },
  }

  getStyle(){
    if(this.props.active){
      return Object.assign({}, this.props.style, this.props.activeStyle)
    }
    else if(this.state.hovered){
      return Object.assign({}, this.props.style, this.props.hoverStyle)
    }
    else {
      return this.props.style
    }
  }

  handleClick(e){
    e.preventDefault()
    if(this.props.handleClick)
      this.props.handleClick()
  }

  render(){
    return <a
      onMouseOver={() => this.setState({ hovered:true })}
      onMouseOut={() => this.setState({ hovered:false })}
      onClick={e => this.handleClick(e)}
      {...this.props}
      style={this.getStyle()}>
      {this.props.children}
    </a>
  }
}
