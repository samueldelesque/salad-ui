import React from 'react'

export default class Switch extends React.Component{
  static defaultProps = {
    onChange: () => {},
    value: true,
  }

  render(){
    return(
      <div style={{
        position: 'relative',
        display: 'inline-block',
        width: 36,
        height: 22,
        lineHeight: 20,
        verticalAlign: 'middle',
        borderRadius: '20px 20px',
        border: '1px solid #ccc',
        backgroundColor: this.props.value ? 'rgb(0, 200, 50)' : '#ccc',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
      }} onClick={()=>this.props.onChange(!this.props.value)}>
        <span style={Object.assign({}, {
          position: 'absolute',
          width: 18,
          height: 18,
          top: 1,
          borderRadius: '50% 50%',
          backgroundColor: '#ffffff',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,.4)',
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
