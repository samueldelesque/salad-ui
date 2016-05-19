import React from 'react'

const styles = {
  
}

export default class Column extends React.Component {
  render() {
    return (
      <div style={styles[size]}>
        {this.props.children}
      </div>
    )
  }
}
