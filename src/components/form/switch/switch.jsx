import React from 'react'

export default class Switch extends React.Component{
  static defaultProps = {
    onChange: () => {},
    value: true,
    backgroundColorActive: '#0066DC',
    backgroundColorPassive: '#ccc',
    switchColor: '#fff',
    switchBoxShadow: '0 2px 5px rgba(0,0,0,.4)',
    width: 34,
    height: 20,
    switchSize: 18,
    lineHeight: 20,
    borderRadius: 20,
    border: 'none',
  }

  render(){
    return(
      <div style={{
        position: 'relative',
        display: 'inline-block',
        width: this.props.width,
        height: this.props.height,
        lineHeight: this.props.lineHeight,
        verticalAlign: 'middle',
        borderRadius: this.props.borderRadius,
        border: this.props.border,
        backgroundColor: this.props.value ? this.props.backgroundColorActive : this.props.backgroundColorPassive,
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
      }} onClick={()=>this.props.onChange(!this.props.value)}>
        <span style={Object.assign({}, {
          position: 'absolute',
          width: this.props.switchSize,
          height: this.props.switchSize,
          top: 1,
          borderRadius: '50% 50%',
          backgroundColor: this.props.switchColor,
          cursor: 'pointer',
          boxShadow: this.props.switchBoxShadow,
          transition: 'all 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
        },
        this.props.value ? {
          left: '100%',
          marginLeft: -20
        }: {
          left: 2,
        },
      )}/>
      </div>
    )
  }
}
