import React from 'react'
import ReactDOM from 'react-dom'

class Demo extends React.Component {
  render(){
    return (
      <div>This is the demo.</div>
    )
  }
}

ReactDOM.render(<Demo/>, document.getElementById('react-root'));
