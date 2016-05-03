import React from 'react'
import ReactDOM from 'react-dom'
import SaladUI from './salad-ui'
import { iconTypes } from './icon/icon'
import DemoAutocomplete from './form/autocomplete/demo-autocomplete'
import _ from 'lodash'
import glob from '../lib/glob.js'

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for 🍻 Friday 6pm.')

const chartData = [
  {time:1422766800000, value: 0, label: "{{value}} active users"},
  {time:1422853200000, value: 9, label: "{{value}} active users"},
  {time:1422939600000, value: 5, label: "{{value}} active users"},
  {time:1423026000000, value: 15, label: "{{value}} active users"},
  {time:1423112400000, value: 7, label: "{{value}} active users"},
  {time:1423198800000, value: 13, label: "{{value}} active users"},
];

export default class Demo extends React.Component {
  state = {
    selectedRadio: 'radio1'
  }

  render(){
    return (
      <div className="demo">
        <section>
          <h1>Salad-UI 🚀</h1>
          <p>Salad-UI can be enjoyed as a complete salad using <i className="snippet">import SaladUI from 'salad-ui'</i> or as its separate ingredients using <i className="snippet">import Chart from 'salad-ui.chart'</i>.</p>
          <p>Salad-UI is composed of: Form, Chart, Utils, Lib, Icon.</p>
          <p>Salad-UI will work both in Browser and Server environment - use it in your universal apps!</p>
        </section>
        <section>
          <h2>Form</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Autocomplete</h3>
              <pre>{'<Autocomplete/>'}</pre>
              <DemoAutocomplete/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Checkbox</h3>
              <pre>{'<Checkbox/>'}</pre>
              <SaladUI.Form.Checkbox>This is a checkbox</SaladUI.Form.Checkbox>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Radio</h3>
              <pre>{'<RadioGroup/><Radio></RadioGroup>'}</pre>
              <SaladUI.Form.RadioGroup name="radiotest" onChange={val=>this.setState({selectedRadio: val})} selected={this.state.selectedRadio}>
                <SaladUI.Form.Radio value="radio1">This is a Radio element</SaladUI.Form.Radio>
                <SaladUI.Form.Radio value="radio2">This is another Radio element</SaladUI.Form.Radio>
              </SaladUI.Form.RadioGroup>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> FormInput</h3>
              <pre>{'<FormInput/>'}</pre>
              <SaladUI.Form.FormInput><p>My Input</p></SaladUI.Form.FormInput>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> InputText</h3>
              <pre>{'<InputText/>'}</pre>
              <SaladUI.Form.InputText/>
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
{`currencyToSymbol('USD')
// $`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> f</h3>
              <pre>
{`f.get('http://api.dailymotion.com/user/spi0n')
.then(json => console.log(json))
.catch(err => console.error(err))

f.post('http://api.dailymotion.com/user/spi0n')
f.delete('http://api.dailymotion.com/user/spi0n')`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> glob</h3>
              <pre>
{`glob.canUseDom()
// true`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> numberToString</h3>
              <pre>
{`numberToString(10782)
// 11k`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> polyfill</h3>
              <pre>
{`polyfill()
// Object.assign etc are now available in your shitty browser`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> sso</h3>
              <pre>
{`sso.init(SDX)
sso.getJWT('revshare').then(token => {
  console.log('Yay I have a token!')
})`}
              </pre>
            </li>
          </ul>
        </section>
        <section>
          <h2>Stylesheet</h2>
        </section>
        <section>
          <h2>Chart</h2>
          <pre>
{`<SaladUI.Chart.Area
  width={900}
  height={300}
  data={chartData} width={560}
  labelTextShadow="none"
  labelColor="white"
  gridColor="rgba(230,230,230,.1)"
  yLabelsPosition="right"
  />`}
          </pre>
          <div>
            <SaladUI.Chart.Area
              width={900}
              height={300}
              data={chartData} width={560}
              labelTextShadow="none"
              labelColor="white"
              gridColor="rgba(230,230,230,.1)"
              yLabelsPosition={"right"} />
          </div>
        </section>
        <section>
          <h2>Util</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Alert</h3>
              <pre>{'<Alert>Hello World</Alert>'}</pre>
              <SaladUI.Util.Alert type="error">Hello World</SaladUI.Util.Alert>
            </li>
          </ul>
        </section>
        <section>
          <h2>Icon <SaladUI.Icon type="favorite" fill="white" width={20} height={20}/></h2>
          <pre>
{`<SaladUI.Icon
    type="favorite"
    fill="white"
    width={20}
    height={20}/>`}
          </pre>
          <div className="icon-list">
          {
            _.map(iconTypes, (path, icon) =>
              <span className="icon-item">
                <SaladUI.Icon type={icon} fill={'white'}/>
                <span className="icon-title">{icon}</span>
              </span>
            )
          }
          </div>
        </section>
        <footer>
          Made with love at <a href="http://dailymotion.com">Dailymotion</a> in NYC.
        </footer>
      </div>
    )
  }
}

if(glob.canUseDom()){
  require('./demo.scss')
  if(!glob.DM_ENV) glob.DM_ENV = {}
  glob.DM_ENV['form/input-text'] = {}
  ReactDOM.render(<Demo/>, document.getElementById('react-root'));
}
