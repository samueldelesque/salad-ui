import React from 'react'
import SaladUI from '../salad-ui'
import { iconTypes } from '../icon/icon'
import _ from 'lodash'
import glob from '../../lib/glob.js'
import DemoAutocomplete from './demo-autocomplete'
import * as videoComponents from './video-components'

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for ' + String.fromCharCode(55356, 57211) + ' Friday 6pm.')
if(glob.canUseDom()){
  console.log('Test SaladUI functions directly using window.SaladUI')
  window.SaladUI = SaladUI
}

const chartData = [
  {time: new Date('2010-04-01'), value: 0, label: "{{value}} active users"},
  {time: new Date('2010-04-02'), value: 9, label: "{{value}} active users"},
  {time: new Date('2010-04-03'), value: 5, label: "{{value}} active users"},
  {time: new Date('2010-04-04'), value: 15, label: "{{value}} active users"},
  {time: new Date('2010-04-05'), value: 7, label: "{{value}} active users"},
  {time: new Date('2010-04-06'), value: 13, label: "{{value}} active users"},
];

const selectOptions = [
  {name: 'tofu', value: -2, calories: 400},
  {name: 'bacon', value: -1, calories: 900},
  {name: 'roasted chicken', value: 0, calories: 600},
  {name: 'steak', value: 1, calories: 700}
]

export default class Demo extends React.Component {
  state = {
    selectedRadio: 'radio1',
    protein: {name: null, value: null, calories: 0},
    demoSwitch: true,
    tagsAdded: ['tag1','tag2','tag3','tag4','tag5','tag6'],
    showOverlay: false,
    videoSelected: false,
    sectionWidth: 720,
  }

  componentDidMount(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-78769010-1', 'auto');
    SaladUI.Lib.tracking.trackPage('SaladUI Demo')

    this.onResize = this.onResize.bind(this)
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.onResize)
  }

  onResize(){
    const sectionWidth = this.refs.firstSection.getBoundingClientRect().width
    this.setState({sectionWidth})
  }

  handleRemoveTag(tag){
    console.log('item to remove: ', tag)
    let tags = this.state.tagsAdded,
        index = this.state.tagsAdded.indexOf(tag);

    tags.splice(index, 1);
    this.setState({
      tagsAdded: tags
    })
  }

  showOverlay(){
    this.setState({
      showOverlay: true
    })
  }

  closeOverlay(){
    this.setState({
      showOverlay: false
    })
  }

  render(){
    return (
      <div className="demo" ref="container">
        <header>
          <a href="https://github.com/dailymotion/salad-ui" target="_blank" className="github-corner">
            <svg width="80" height="80" viewBox="0 0 250 250">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm"></path>
              <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
            </svg>
          </a>
          <div className="header-content">
            <h1>Salad-UI {String.fromCharCode(55357, 56960)}</h1>
            <h2>
              <pre>npm i --save salad-ui</pre>
              <pre>import SaladUI from 'salad-ui'</pre>
              <pre>{`<SaladUI.Chart.Area/>`}</pre>
            </h2>
            <p>
              <a href="https://npmjs.com/package/salad-ui" target="_blank"><img src="https://badge.fury.io/js/salad-ui.svg"/></a>
            </p>
            <p>Salad-UI can be enjoyed as a complete salad using <i className="snippet">import SaladUI from 'salad-ui'</i> or as its separate ingredients using <i className="snippet">{`import {Area} from 'salad-ui.chart'`}</i>. You can install separate ingredients as <i className="snippet">npm i --save salad-ui.chart</i>.</p>
            <p>Salad-UI will work both in Browser and Server environment - use it in your universal apps!</p>
            <p>For optimal old browser compatibility with SaladUI, please include the following polyfill on your page:</p>
            <pre>
  {`<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js"></script>`}
            </pre>
          </div>
        </header>
        <section className="warning-mobile">
          <SaladUI.Util.Alert type="error">Code snippets not shown on mobile!</SaladUI.Util.Alert>
        </section>
        <section ref="firstSection">
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
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Switch</h3>
              <pre>{'<Switch value={this.state.val} onChange={(val)=>this.setState({val})}/>'}</pre>
              <SaladUI.Form.Switch value={this.state.demoSwitch} onChange={(demoSwitch)=>this.setState({demoSwitch})}/>
              <span style={{color: '#bbb', marginLeft: 20}}>{this.state.demoSwitch?'ON':'OFF'}</span>
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
              <pre>{'<InputText/><InputText textarea/>'}</pre>
              <div style={{marginTop: 10}}>
                <SaladUI.Form.InputText prefix="https://dailymotion." placeholder="yoursubdomain" suffix=".com" label="Input with label, prefix and suffix"/>
              </div>
              <div style={{marginTop: 10}}>
                <SaladUI.Form.InputText textarea label="Input type textarea"/>
              </div>
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
  onChange={(protein)=>this.setState({protein})}>Pick one</Select>`
}
              </pre>
              <div style={{width: 300}}>
                <SaladUI.Form.Select
                  options={selectOptions}
                  onChange={(protein)=>this.setState({protein})}>Pick a protein</SaladUI.Form.Select>

                <p style={{margin: '10px 0'}}>{'Select without border'}</p>
                <SaladUI.Form.Select
                  options={selectOptions}
                  value={selectOptions[2].value}
                  onChange={(protein)=>this.setState({protein})}
                  noBorder={true}>Borderless</SaladUI.Form.Select>
                <p style={{padding: 10}}>Protein: <b style={{fontWeight: 'bold'}}>{this.state.protein.value} ({this.state.protein.calories}cal)</b></p>

                <SaladUI.Form.Select style={{marginTop: 20}}/>
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
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> sso</h3>
              <pre>
{`sso.init(SDX)
sso.getJWT('revshare').then(token => {
  console.log('Yay I have a token!')
})`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> tracking</h3>
              <pre>
{`tracking.trackPage('SaladUI Demo')
tracking.trackEvent('eventName', {ga: {label: 'test'}})`}
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
{`
const chartData = [{time: new Date('1990-01-02'), value: 1231}]

<SaladUI.Chart.Area
  width={900}
  height={300}
  labelTemplate="{{value}} cats ate here that day"
  data={chartData} width={560}
  />`}
          </pre>
          <div>
            <SaladUI.Chart.Area
              width={this.state.sectionWidth}
              height={this.state.sectionWidth*0.6}
              strokeWidth={3}
              strokeDasharray={3}
              labelTemplate="Over {{value}} cats ate here that day."
              data={chartData}/>
          </div>
        </section>
        <section>
          <h2>Util</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Alert</h3>
              <pre>{'<Alert type="info/error/success/warning">Hello World</Alert>'}</pre>
              <SaladUI.Util.Alert type="info" onClose={()=>alert("don't close me!")} title="This is an alert.">
                This is the body of the alert.
                <div style={{marginTop: 10}}>
                  <SaladUI.Util.Button type="primary">Accept</SaladUI.Util.Button>
                  <SaladUI.Util.Button style={{marginLeft: 10}}>Cancel</SaladUI.Util.Button>
                </div>
              </SaladUI.Util.Alert>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Trans</h3>
              <pre>
{`<Trans context={{"Hello": "Bonjour"}}>Hello</Trans>

//Can also be used as a plain function (to return a string instead of React Component)
// Salad.Util.translate(key, args, [pluralform n], [translations])
SaladUI.Util.translate(
  'There are %(elephants)s elephants in %(city).',
  {elephants: 24, city: "Hong Kong"},
  24,
  {
    'There are %(elephants)s elephants in %(city).': {
      singular: "Il y a %(elephants)s elephant à %(city)s.",
      plural: "Il y a %(elephants)s elephants à %(city)s.",
    }
  }
)`}</pre>
              <h3>
                <SaladUI.Util.Trans context={{"Hello": "Bonjour"}}>Hello</SaladUI.Util.Trans>
              </h3>
              <p>
                {SaladUI.Util.translate(
                  'There are %(elephants)s elephants in %(city).',
                  {elephants: 24, city: "Hong Kong"},
                  24,
                  {
                    'There are %(elephants)s elephants in %(city).': {
                      singular: "Il y a %(elephants)s elephant à %(city)s.",
                      plural: "Il y a %(elephants)s elephants à %(city)s.",
                    }
                  }
                )}
              </p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> TimeAndViews</h3>
              <pre>{'<SaladUI.Util.TimeAndViews time={new Date(\'2010-04-01\')} views={40123}/>'}</pre>
              <SaladUI.Util.TimeAndViews time={new Date('2016-06-21')} views={40123}/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> TextClamp</h3>
              <pre>
{`<TextClamp>
This is a long long long long long long long long
long long long long long long long long long long
long long long long long long long long long long
long long long long long long long long long long
long long long long long long long long long long
long long long long long long text.
</TextClamp>`}
              </pre>
              <SaladUI.Util.TextClamp clamp={1}>
                This is a long long long long long long long long
                long long long long long long long long long long
                long long long long long long long long long long
                long long long long long long long long long long
                long long long long long long long long long long
                long long long long long long text.
              </SaladUI.Util.TextClamp>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Button</h3>
              <pre>{`<Button onPress={()=>alert('ay ay captain')}>Press Me</Button>`}</pre>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')}>Press Me</SaladUI.Util.Button>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} type="primary" style={{marginLeft: 10}}>Type primary</SaladUI.Util.Button>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} size="sm" style={{marginLeft: 10}}>Size small</SaladUI.Util.Button>
              </div>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} size="lg" mouseOverText="Way fatter." isLoading={true}>I am bigger.</SaladUI.Util.Button>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} size="lg" type="primary" style={{backgroundColor: 'rgb(218, 33, 0)', marginLeft: 10}}>DANGER</SaladUI.Util.Button>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} style={{marginLeft:10}} size="lg" type="success" mouseOverText="Unfollow">Following</SaladUI.Util.Button>
              </div>
              <div style={{padding: 10}}>
                <SaladUI.Util.Button onPress={()=>alert('ay ay captain')} fullWidth={true}>I am longer.</SaladUI.Util.Button>
              </div>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> ProfilePicture</h3>
              <pre>{`<ProfilePicture size={50}/>`}</pre>
              <SaladUI.Util.ProfilePicture/>
              <SaladUI.Util.ProfilePicture src="https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB15E/JDAoqjtUysE/s0-c-k-no-ns/photo.jpg"/>
              <SaladUI.Util.ProfilePicture src="http://s2.dmcdn.net/JWg8h/118x118-Os1.png"/>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Tag List</h3>
              <pre>{`<TagList items=['tag1','tag2','tag3','tag4','tag5','tag6']/>`}</pre>
              <SaladUI.Util.TagList items={this.state.tagsAdded} handleRemoveItem={(t) => this.handleRemoveTag(t)} />
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Badges</h3>
              <pre>{`<SaladUI.Util.Badge type='live'>Live</SaladUI.Util.Badge>`}</pre>
              <pre>{`<SaladUI.Util.Badge type='verified'></SaladUI.Util.Badge>`}</pre>
              <SaladUI.Util.Badge position="inline" type="live">Live</SaladUI.Util.Badge>
              <SaladUI.Util.Badge position="inline" type="duration">00:23</SaladUI.Util.Badge>
              <SaladUI.Util.Badge position="inline" type="verified"><SaladUI.Icon type="check" fill="white" width={12} height={12}/></SaladUI.Util.Badge>
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
        <section>
          <h2>Spinner</h2>
          <pre>
            {`<SaladUI.Spinner/>`}
          </pre>
          <div>
            <SaladUI.Spinner/>
          </div>
        </section>
        <section>
          <h2>Video</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Preview</h3>
              <SaladUI.Video.Preview
                {...{
                  created_time: 1470415017,
                  duration: 30,
                  duration_formatted: "00:30",
                  id: "x4neil8",
                  onair: false,
                  private: false,
                  record_status: null,
                  thumbnail_240_url: "http://s1.dmcdn.net/ZN5T3/427x240-kqC.jpg",
                  title: "Some video title",
                  uri: "/video/x4neil8_books-the-world-according-to-bob-the-further-adventures-of-one-man-and-his-streetwise-cat-free_news",
                }}
                width={240}
              />
              <SaladUI.Video.Preview
                {...{
                  created_time: 1470415017,
                  duration: 30,
                  duration_formatted: "00:30",
                  id: "x4neil8",
                  onair: false,
                  private: false,
                  record_status: null,
                  thumbnail_240_url: "http://s1.dmcdn.net/ZN5T3/427x240-kqC.jpg",
                  title: "A selectable video preview",
                  uri: "/video/x4neil8_books-the-world-according-to-bob-the-further-adventures-of-one-man-and-his-streetwise-cat-free_news",
                }}
                width={240}
                style={{marginLeft: 20}}
                selected={this.state.videoSelected}
                onSelect={()=>this.setState({videoSelected: !this.state.videoSelected})}
              />
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> List</h3>
              <pre>
{`class GridArea extends React.Component{
  render(){
    return (
      <SaladUI.Util.Grid>
        // The videos property is passed down from the Video.List Component
        {
          this.props.videos.map((video,index) =>
            <SaladUI.Video.Preview key={\`video.\${index}\`} type="grid" {...video}/>
          )
        }
      </SaladUI.Util.Grid>
    )
  }
}

export class LoadMore extends React.Component{
  render(){
    return (
      // The loadMore property is passed down from the Video.List Component
      <SaladUI.Util.Button fullWidth={true} onPress={()=>this.props.loadMore()}>
        Load More
      </SaladUI.Util.Button>
    )
  }
}

<SaladUI.Video.List
  apiURL="https://api.dailymotion.com"
  limit={10}
  endpoint="/videos"
>
  <GridArea/>
  <LoadMore/>
</SaladUI.Video.List>`}
              </pre>
              <SaladUI.Video.List apiURL="https://api.dailymotion.com" limit={10} endpoint="/videos">
                <videoComponents.GridArea/>
                <videoComponents.LoadMore/>
              </SaladUI.Video.List>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> List with Preview</h3>
              <pre>
{`class ListArea extends React.Component{
    render(){
      return (
        <div className="video-list-area">
          {
            this.props.videos.map((video,index) =>
              <SaladUI.Video.Preview key={\`video.\${index}\`} width={220} type="list" {...video}/>
            )
          }
        </div>
      )
    }
  }
<SaladUI.Video.List
  apiURL="https://api.dailymotion.com"
  limit={3}
  endpoint="/videos"
>
  <ListArea/>
  <LoadMore/>
</SaladUI.Video.List>`}
              </pre>
              <SaladUI.Video.List apiURL="https://api.dailymotion.com" limit={3} endpoint="/videos">
                <videoComponents.ListArea/>
                <videoComponents.LoadMore/>
              </SaladUI.Video.List>
            </li>
          </ul>
        </section>
        <section>
          <h2>Overlay</h2>
          <pre>
{`<SaladUI.Util.Overlay
    show=true
    onClose={()}
    closeButton={true}>
    <overlayHeader style={{backgroundColor:'blue'}}>
      This is the header section and the overlay's title
    </overlayHeader>
    <overlayContent>
      This is overlay's content This is overlay's content This is overlay's content This is overlay's content
    </overlayContent>
    <overlayFooter>
      <SaladUI.Util.Button onPress={()=>this.closeOverlay()} style={{marginRight: '10px'}}>Cancel</SaladUI.Util.Button>
      <SaladUI.Util.Button type="primary" onPress={()=>this.closeOverlay()}>Save</SaladUI.Util.Button>
    </overlayFooter>
  </SaladUI.Util.Overlay>
`}
          </pre>
          <ul className="functionality">
            <li>
              <SaladUI.Util.Button type="primary" onPress={()=>this.showOverlay()}>Click me!</SaladUI.Util.Button>
              <SaladUI.Util.Overlay
                show={this.state.showOverlay}
                onClose={()=>this.closeOverlay()}
                closeButton={true}>
                <overlayHeader>
                  This is the header section and the overlay's title
                </overlayHeader>
                <overlayContent>
                  This is overlay's content This is overlay's content This is overlay's content This is overlay's content
                </overlayContent>
                <overlayFooter>
                  <SaladUI.Util.Button onPress={()=>this.closeOverlay()} style={{marginRight: '10px'}}>Cancel</SaladUI.Util.Button>
                  <SaladUI.Util.Button type="primary" onPress={()=>this.closeOverlay()}>Save</SaladUI.Util.Button>
                </overlayFooter>
              </SaladUI.Util.Overlay>
            </li>
          </ul>
        </section>

        <section>
          <h2>Transitions</h2>
          <pre>{`import 'salad-ui.transitions'`}</pre>
          <ul className="functionality">
            <li>
              <h3>Transition Duration</h3>
              <ol>
                <li>transition (default transition)</li>
                <li>transition-xs</li>
                <li>transition-sm</li>
                <li>transition-md</li>
                <li>transition-lg</li>
                <li>transition-xl</li>
              </ol>
            </li>
            <li>
              <h3>Transition Timing</h3>
              <ol>
                <li>transition-timing-linear</li>
                <li>transition-timing-bezier</li>
                <li>transition-timing-ease</li>
                <li>transition-timing-ease-in-out</li>
              </ol>
            </li>
            <li>
              <h3>Scale Effects</h3>
              <ol>
                <li>scale-in-sm</li>
                <li>scale-in-md</li>
                <li>scale-in-lg</li>
                <li>scale-in-xl</li>
                <li>scale-out-sm</li>
                <li>scale-out-md</li>
                <li>scale-out-lg</li>
                <li>scale-out-xl</li>
              </ol>
            </li>
            <li>
              <h3>Fade Effects</h3>
              <ol>
                <li>fade-in</li>
                <li>fade-out</li>
              </ol>
            </li>
          </ul>
        </section>
        <footer>
          Made with love at <a href="http://dailymotion.com">Dailymotion</a> in NYC.
        </footer>
      </div>
    )
  }
}
