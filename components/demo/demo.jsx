import React from 'react'
import SaladUI from '../salad-ui'
import Chart from '../chart/chart'
import { iconTypes } from '../icon/icon'
import _ from 'lodash'
import glob from '../../lib/glob.js'


if(!glob.DM_ENV) glob.DM_ENV = {}
glob.DM_ENV['form/input-text'] = {}

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for ' + String.fromCharCode(55356, 57211) + ' Friday 6pm.')

console.log(SaladUI.Form)

const chartData = [
  {time:1422766800000, value: 0, label: "{{value}} active users"},
  {time:1422853200000, value: 9, label: "{{value}} active users"},
  {time:1422939600000, value: 5, label: "{{value}} active users"},
  {time:1423026000000, value: 15, label: "{{value}} active users"},
  {time:1423112400000, value: 7, label: "{{value}} active users"},
  {time:1423198800000, value: 13, label: "{{value}} active users"},
];

const selectOptions = [
  {name: 'tofu', value: 'tofu', calories: 400},
  {name: 'bacon', value: 'bacon', calories: 900},
  {name: 'roasted chicken', value: 'chicken', calories: 600},
  {name: 'steak', value: 'steak', calories: 700}
]


class DemoAutocomplete extends React.Component {

  constCountryNames = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  state = {
    suggestions: [],
  }

  requestSuggestions(keyword) {
    let suggs = []
    keyword = keyword.toLowerCase()
    for(let country of this.constCountryNames){
      if(country.toLowerCase().startsWith(keyword)){
        suggs.push(country)
      }
    }

    this.setState({
      suggestions: suggs.slice(0)
    })
  }

  render() {
    let acProps = {
      handleSelectItem: val => console.log('You have selected', val),
      inputPlaceholder: 'Start typing a country name',
      requestSuggestions: ::this.requestSuggestions,
      suggestions: this.state.suggestions,
    }

    return (
      <div>
        <SaladUI.Form.Autocomplete {...acProps} />
      </div>
    )
  }
}

export default class Demo extends React.Component {
  state = {
    selectedRadio: 'radio1',
    protein: {name: null, value: null, calories: 0}
  }

  render(){
    return (
      <div className="demo">
        <header>
          <h1>Salad-UI {String.fromCharCode(55357, 56960)}</h1>
          <p>Salad-UI can be enjoyed as a complete salad using <i className="snippet">import SaladUI from 'salad-ui'</i> or as its separate ingredients using <i className="snippet">import Chart from 'salad-ui.chart'</i>.</p>
          <p>Salad-UI is composed of: Form, Chart, Utils, Lib, Icon.</p>
          <p>Salad-UI will work both in Browser and Server environment - use it in your universal apps!</p>
        </header>
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
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> InputText</h3>
              <pre>{'<InputText/>'}</pre>
              <SaladUI.Form.InputText/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Toggle</h3>
              <pre>{'<Toggle/>'}</pre>
              <SaladUI.Form.Toggle/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Select</h3>
              <pre>
{`let options = [
  {name: 'tofu', value: 'tofu', calories: 400},
  {name: 'bacon', value: 'bacon', calories: 900},
  {name: 'roasted chicken', value: 'chicken', calories: 600},
  {name: 'steak', value: 'steak', calories: 700}
]
<Select
  options={options}
  handleClick={(protein)=>this.setState({protein})}>Pick one</Select>`
}
              </pre>
              <div style={{width: 300}}>
                <SaladUI.Form.Select
                  options={selectOptions}
                  handleClick={(protein)=>this.setState({protein})}>Pick a protein</SaladUI.Form.Select>
                <p style={{padding: 10}}>Protein: <b style={{fontWeight: 'bold'}}>{this.state.protein.value} ({this.state.protein.calories}cal)</b></p>
              </div>
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
  />`}
          </pre>
          <div>
            <SaladUI.Chart.Area
              width={900}
              height={300}
              data={chartData} width={600}/>
          </div>
        </section>
        <section>
          <h2>Util</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Alert</h3>
              <pre>{'<Alert type="info/error/success/warning">Hello World</Alert>'}</pre>
              <SaladUI.Util.Alert type="info" onClose={()=>alert("don't close me!")} title="title eh">
                Hello World
              </SaladUI.Util.Alert>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Button</h3>
              <pre>{`<Button onPress={()=>alert('ay ay captain')}>Press Me</Button>`}</pre>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')}>Press Me</SaladUI.Util.Button>{' '}
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} type="primary">I have type=primary</SaladUI.Util.Button>
              </div>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} type="primary" size="lg">I am bigger.</SaladUI.Util.Button>
              </div>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} type="primary" fullWidth={true}>I am longer.</SaladUI.Util.Button>
              </div>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> ProfilePicture</h3>
              <pre>{`<ProfilePicture size={50}/>`}</pre>
              <SaladUI.Util.ProfilePicture/>
              <SaladUI.Util.ProfilePicture src="https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB15E/JDAoqjtUysE/s0-c-k-no-ns/photo.jpg"/>
              <SaladUI.Util.ProfilePicture src="http://s2.dmcdn.net/JWg8h/118x118-Os1.png"/>
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
              <span key={`icon.${icon}`} className="icon-item">
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
