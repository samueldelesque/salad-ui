import React, { Component } from 'react'

export default class Chart extends Component{
  static defaultProps = {
    border: 'none',
    height: 400,
    width: 600,
    style: {},
  }

  render(){
    return (
      <svg
        className={`react-chart ${this.props.type}`}
        width={this.props.width}
        style={{overflow: 'visible', border: this.props.border, ...this.props.style}}
        height={this.props.height}>
        {this.props.children}
      </svg>
    )
  }
}
