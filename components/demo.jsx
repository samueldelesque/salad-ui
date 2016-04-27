import React from 'react'
import ReactDOM from 'react-dom'
import SaladUI from './salad-ui'

class Demo extends React.Component {
  render(){
    return (
      <div>
        <h1>This is the demo.</h1>
        <div>
          <SaladUI.Form.InputText/>
        </div>
      </div>
    )
  }
}

if(typeof(DM_ENV) === 'undefined'){
  window.DM_ENV = {}
  DM_ENV['form/input-text'] = {
    clear: 'Clear',
    max_characters: 'Max characters',
  }
}

ReactDOM.render(<Demo/>, document.getElementById('react-root'));
