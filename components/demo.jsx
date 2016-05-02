import React from 'react'
import ReactDOM from 'react-dom'
import SaladUI from './salad-ui'
import _ from 'lodash'

import './demo.scss'

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for 🍻 Friday 6pm.')

class Demo extends React.Component {
  render(){
    return (
      <div className="demo">
        <section>
          <h1>Salad-UI 🚀</h1>
        </section>
        <section>
          <h2>Form</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Autocomplete</h3>
              <pre>{'<Autocomplete/>'}</pre>
              <SaladUI.Form.Autocomplete/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Checkbox</h3>
              <pre>{'<Checkbox/>'}</pre>
              <SaladUI.Form.Checkbox/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> FormInput</h3>
              <pre>{'<FormInput/>'}</pre>
              <SaladUI.Form.FormInput><p>My Input</p></SaladUI.Form.FormInput>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> InputText</h3>
              <pre>{'<InputText/>'}</pre>
              <SaladUI.Form.InputText />
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Toggle</h3>
              <pre>{'<Toggle/>'}</pre>
              <SaladUI.Form.Toggle/>
            </li>
          </ul>
        </section>
        <section>
          <h2>Lib</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> childrenWithProps</h3>
              <pre>
                {`childrenWithProps(reactComponent, __INITIAL_PROPS__)`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> currencyToSymbol</h3>
              <pre>
{`
  currencyToSymbol('USD')
  // $
`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> f</h3>
              <pre>
{`
  f.get('http://api.dailymotion.com/user/spi0n')
  f.post('http://api.dailymotion.com/user/spi0n')
  f.delete('http://api.dailymotion.com/user/spi0n')
`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> glob</h3>
              <pre>
{`
  glob.canUseDom()
  // true
`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> numberToString</h3>
              <pre>
{`
  numberToString(10782)
  // 11k
`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> polyfill</h3>
              <pre>
{`
  polyfill()
  // Object.assign etc are now available in your shitty browser
`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> sso</h3>
              <pre>
{`
  sso.init(SDX)
  sso.getJWT('revshare').then(token => {
    console.log('Yay I have a token!')
  })
`}
              </pre>
            </li>
          </ul>
        </section>
        <section>
          <h2>Stylesheet</h2>
        </section>
        <section>
          <h2>Utils</h2>
        </section>
        <section>
          <h2>Icon</h2>

        </section>
        <footer>
          Made with love at <a href="http://dailymotion.com">Dailymotion</a> in NYC.
        </footer>
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
