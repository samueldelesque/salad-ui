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
  // SaladUI.Util.Trans.enableDebug()
  window.enableHighlight = ()=>SaladUI.Util.Trans.enableHighlight()
}
const realtime_views = {"label":"Vues simultan\u00e9es","data":[{"id":1480448720,"value":0,"label":"vues"},{"id":1480448730,"value":5,"label":"vues"},{"id":1480448740,"value":10,"label":"vues"},{"id":1480448750,"value":10,"label":"vues"},{"id":1480448760,"value":11,"label":"vues"},{"id":1480448770,"value":11,"label":"vues"},{"id":1480448780,"value":10,"label":"vues"},{"id":1480448790,"value":12,"label":"vues"},{"id":1480448800,"value":11,"label":"vues"},{"id":1480448810,"value":13,"label":"vues"},{"id":1480448820,"value":15,"label":"vues"},{"id":1480448830,"value":15,"label":"vues"},{"id":1480448840,"value":18,"label":"vues"},{"id":1480448850,"value":18,"label":"vues"},{"id":1480448860,"value":24,"label":"vues"},{"id":1480448870,"value":20,"label":"vues"},{"id":1480448880,"value":22,"label":"vues"},{"id":1480448890,"value":20,"label":"vues"},{"id":1480448900,"value":26,"label":"vues"},{"id":1480448910,"value":24,"label":"vues"},{"id":1480448920,"value":24,"label":"vues"},{"id":1480448930,"value":24,"label":"vues"},{"id":1480448940,"value":24,"label":"vues"},{"id":1480448950,"value":27,"label":"vues"},{"id":1480448960,"value":20,"label":"vues"},{"id":1480448970,"value":29,"label":"vues"},{"id":1480448980,"value":23,"label":"vues"},{"id":1480448990,"value":24,"label":"vues"},{"id":1480449000,"value":24,"label":"vues"},{"id":1480449010,"value":24,"label":"vues"},{"id":1480449020,"value":24,"label":"vues"},{"id":1480449030,"value":21,"label":"vues"},{"id":1480449040,"value":23,"label":"vues"},{"id":1480449050,"value":24,"label":"vues"},{"id":1480449060,"value":22,"label":"vues"},{"id":1480449070,"value":20,"label":"vues"},{"id":1480449080,"value":22,"label":"vues"},{"id":1480449090,"value":22,"label":"vues"},{"id":1480449100,"value":21,"label":"vues"},{"id":1480449110,"value":22,"label":"vues"},{"id":1480449120,"value":24,"label":"vues"},{"id":1480449130,"value":26,"label":"vues"},{"id":1480449140,"value":20,"label":"vues"},{"id":1480449150,"value":22,"label":"vues"},{"id":1480449160,"value":22,"label":"vues"},{"id":1480449170,"value":23,"label":"vues"},{"id":1480449180,"value":25,"label":"vues"},{"id":1480449190,"value":27,"label":"vues"},{"id":1480449200,"value":27,"label":"vues"},{"id":1480449210,"value":23,"label":"vues"},{"id":1480449220,"value":33,"label":"vues"},{"id":1480449230,"value":27,"label":"vues"},{"id":1480449240,"value":28,"label":"vues"},{"id":1480449250,"value":28,"label":"vues"},{"id":1480449260,"value":22,"label":"vues"},{"id":1480449270,"value":25,"label":"vues"},{"id":1480449280,"value":84,"label":"vues"},{"id":1480449290,"value":303,"label":"vues"},{"id":1480449300,"value":271,"label":"vues"},{"id":1480449310,"value":308,"label":"vues"},{"id":1480449320,"value":312,"label":"vues"},{"id":1480449330,"value":280,"label":"vues"},{"id":1480449340,"value":279,"label":"vues"},{"id":1480449350,"value":306,"label":"vues"},{"id":1480449360,"value":293,"label":"vues"},{"id":1480449370,"value":34,"label":"vues"},{"id":1480449380,"value":114,"label":"vues"},{"id":1480449390,"value":202,"label":"vues"},{"id":1480449400,"value":228,"label":"vues"},{"id":1480449410,"value":280,"label":"vues"},{"id":1480449420,"value":181,"label":"vues"},{"id":1480449430,"value":173,"label":"vues"},{"id":1480449440,"value":266,"label":"vues"},{"id":1480449450,"value":299,"label":"vues"},{"id":1480449460,"value":316,"label":"vues"},{"id":1480449470,"value":326,"label":"vues"},{"id":1480449480,"value":199,"label":"vues"},{"id":1480449490,"value":36,"label":"vues"},{"id":1480449500,"value":36,"label":"vues"},{"id":1480449510,"value":39,"label":"vues"},{"id":1480449520,"value":42,"label":"vues"},{"id":1480449530,"value":40,"label":"vues"},{"id":1480449540,"value":45,"label":"vues"},{"id":1480449550,"value":87,"label":"vues"},{"id":1480449560,"value":271,"label":"vues"},{"id":1480449570,"value":302,"label":"vues"},{"id":1480449580,"value":192,"label":"vues"},{"id":1480449590,"value":59,"label":"vues"},{"id":1480449600,"value":102,"label":"vues"},{"id":1480449610,"value":48,"label":"vues"},{"id":1480449620,"value":48,"label":"vues"},{"id":1480449630,"value":49,"label":"vues"},{"id":1480449640,"value":49,"label":"vues"},{"id":1480449650,"value":55,"label":"vues"},{"id":1480449660,"value":57,"label":"vues"},{"id":1480449670,"value":57,"label":"vues"},{"id":1480449680,"value":60,"label":"vues"},{"id":1480449690,"value":61,"label":"vues"},{"id":1480449700,"value":63,"label":"vues"},{"id":1480449710,"value":66,"label":"vues"},{"id":1480449720,"value":65,"label":"vues"},{"id":1480449730,"value":68,"label":"vues"},{"id":1480449740,"value":69,"label":"vues"},{"id":1480449750,"value":69,"label":"vues"},{"id":1480449760,"value":68,"label":"vues"},{"id":1480449770,"value":69,"label":"vues"},{"id":1480449780,"value":70,"label":"vues"},{"id":1480449790,"value":73,"label":"vues"},{"id":1480449800,"value":74,"label":"vues"},{"id":1480449810,"value":78,"label":"vues"},{"id":1480449820,"value":80,"label":"vues"},{"id":1480449830,"value":80,"label":"vues"},{"id":1480449840,"value":83,"label":"vues"},{"id":1480449850,"value":84,"label":"vues"},{"id":1480449860,"value":82,"label":"vues"},{"id":1480449870,"value":83,"label":"vues"},{"id":1480449880,"value":84,"label":"vues"},{"id":1480449890,"value":87,"label":"vues"},{"id":1480449900,"value":88,"label":"vues"},{"id":1480449910,"value":92,"label":"vues"},{"id":1480449920,"value":98,"label":"vues"},{"id":1480449930,"value":92,"label":"vues"},{"id":1480449940,"value":87,"label":"vues"},{"id":1480449950,"value":91,"label":"vues"},{"id":1480449960,"value":93,"label":"vues"},{"id":1480449970,"value":97,"label":"vues"},{"id":1480449980,"value":99,"label":"vues"},{"id":1480449990,"value":101,"label":"vues"},{"id":1480450000,"value":107,"label":"vues"},{"id":1480450010,"value":119,"label":"vues"},{"id":1480450020,"value":118,"label":"vues"},{"id":1480450030,"value":113,"label":"vues"},{"id":1480450040,"value":113,"label":"vues"},{"id":1480450050,"value":112,"label":"vues"},{"id":1480450060,"value":109,"label":"vues"},{"id":1480450070,"value":103,"label":"vues"},{"id":1480450080,"value":105,"label":"vues"},{"id":1480450090,"value":104,"label":"vues"},{"id":1480450100,"value":101,"label":"vues"},{"id":1480450110,"value":106,"label":"vues"},{"id":1480450120,"value":103,"label":"vues"},{"id":1480450130,"value":100,"label":"vues"},{"id":1480450140,"value":100,"label":"vues"},{"id":1480450150,"value":103,"label":"vues"},{"id":1480450160,"value":109,"label":"vues"},{"id":1480450170,"value":111,"label":"vues"},{"id":1480450180,"value":107,"label":"vues"},{"id":1480450190,"value":104,"label":"vues"},{"id":1480450200,"value":108,"label":"vues"},{"id":1480450210,"value":108,"label":"vues"},{"id":1480450220,"value":114,"label":"vues"},{"id":1480450230,"value":113,"label":"vues"},{"id":1480450240,"value":105,"label":"vues"},{"id":1480450250,"value":114,"label":"vues"},{"id":1480450260,"value":118,"label":"vues"},{"id":1480450270,"value":113,"label":"vues"},{"id":1480450280,"value":122,"label":"vues"},{"id":1480450290,"value":128,"label":"vues"},{"id":1480450300,"value":123,"label":"vues"},{"id":1480450310,"value":123,"label":"vues"},{"id":1480450320,"value":125,"label":"vues"},{"id":1480450330,"value":127,"label":"vues"},{"id":1480450340,"value":128,"label":"vues"},{"id":1480450350,"value":128,"label":"vues"},{"id":1480450360,"value":127,"label":"vues"},{"id":1480450370,"value":129,"label":"vues"},{"id":1480450380,"value":130,"label":"vues"},{"id":1480450390,"value":131,"label":"vues"},{"id":1480450400,"value":134,"label":"vues"},{"id":1480450410,"value":134,"label":"vues"},{"id":1480450420,"value":134,"label":"vues"},{"id":1480450430,"value":135,"label":"vues"},{"id":1480450440,"value":136,"label":"vues"},{"id":1480450450,"value":136,"label":"vues"},{"id":1480450460,"value":137,"label":"vues"},{"id":1480450470,"value":141,"label":"vues"},{"id":1480450480,"value":146,"label":"vues"},{"id":1480450490,"value":147,"label":"vues"},{"id":1480450500,"value":145,"label":"vues"},{"id":1480450510,"value":145,"label":"vues"},{"id":1480450520,"value":147,"label":"vues"},{"id":1480450530,"value":151,"label":"vues"},{"id":1480450540,"value":146,"label":"vues"},{"id":1480450550,"value":145,"label":"vues"},{"id":1480450560,"value":147,"label":"vues"},{"id":1480450570,"value":143,"label":"vues"},{"id":1480450580,"value":135,"label":"vues"},{"id":1480450590,"value":132,"label":"vues"},{"id":1480450600,"value":136,"label":"vues"},{"id":1480450610,"value":138,"label":"vues"},{"id":1480450620,"value":139,"label":"vues"},{"id":1480450630,"value":141,"label":"vues"},{"id":1480450640,"value":142,"label":"vues"},{"id":1480450650,"value":141,"label":"vues"},{"id":1480450660,"value":134,"label":"vues"},{"id":1480450670,"value":133,"label":"vues"},{"id":1480450680,"value":135,"label":"vues"},{"id":1480450690,"value":135,"label":"vues"},{"id":1480450700,"value":132,"label":"vues"},{"id":1480450710,"value":131,"label":"vues"},{"id":1480450720,"value":130,"label":"vues"},{"id":1480450730,"value":132,"label":"vues"},{"id":1480450740,"value":135,"label":"vues"},{"id":1480450750,"value":135,"label":"vues"},{"id":1480450760,"value":142,"label":"vues"},{"id":1480450770,"value":143,"label":"vues"},{"id":1480450780,"value":141,"label":"vues"},{"id":1480450790,"value":143,"label":"vues"},{"id":1480450800,"value":139,"label":"vues"},{"id":1480450810,"value":136,"label":"vues"},{"id":1480450820,"value":135,"label":"vues"},{"id":1480450830,"value":133,"label":"vues"},{"id":1480450840,"value":134,"label":"vues"},{"id":1480450850,"value":135,"label":"vues"},{"id":1480450860,"value":134,"label":"vues"},{"id":1480450870,"value":142,"label":"vues"},{"id":1480450880,"value":147,"label":"vues"},{"id":1480450890,"value":143,"label":"vues"},{"id":1480450900,"value":139,"label":"vues"},{"id":1480450910,"value":141,"label":"vues"},{"id":1480450920,"value":148,"label":"vues"},{"id":1480450930,"value":151,"label":"vues"},{"id":1480450940,"value":149,"label":"vues"},{"id":1480450950,"value":152,"label":"vues"},{"id":1480450960,"value":146,"label":"vues"},{"id":1480450970,"value":142,"label":"vues"},{"id":1480450980,"value":142,"label":"vues"},{"id":1480450990,"value":138,"label":"vues"},{"id":1480451000,"value":136,"label":"vues"},{"id":1480451010,"value":135,"label":"vues"},{"id":1480451020,"value":133,"label":"vues"},{"id":1480451030,"value":134,"label":"vues"},{"id":1480451040,"value":133,"label":"vues"},{"id":1480451050,"value":144,"label":"vues"},{"id":1480451060,"value":139,"label":"vues"},{"id":1480451070,"value":133,"label":"vues"},{"id":1480451080,"value":132,"label":"vues"},{"id":1480451090,"value":134,"label":"vues"},{"id":1480451100,"value":142,"label":"vues"},{"id":1480451110,"value":142,"label":"vues"},{"id":1480451120,"value":145,"label":"vues"},{"id":1480451130,"value":146,"label":"vues"},{"id":1480451140,"value":142,"label":"vues"},{"id":1480451150,"value":141,"label":"vues"},{"id":1480451160,"value":142,"label":"vues"},{"id":1480451170,"value":141,"label":"vues"},{"id":1480451180,"value":143,"label":"vues"},{"id":1480451190,"value":145,"label":"vues"},{"id":1480451200,"value":142,"label":"vues"},{"id":1480451210,"value":148,"label":"vues"},{"id":1480451220,"value":155,"label":"vues"},{"id":1480451230,"value":157,"label":"vues"},{"id":1480451240,"value":155,"label":"vues"},{"id":1480451250,"value":151,"label":"vues"},{"id":1480451260,"value":148,"label":"vues"},{"id":1480451270,"value":151,"label":"vues"},{"id":1480451280,"value":154,"label":"vues"},{"id":1480451290,"value":150,"label":"vues"},{"id":1480451300,"value":149,"label":"vues"},{"id":1480451310,"value":150,"label":"vues"},{"id":1480451320,"value":150,"label":"vues"},{"id":1480451330,"value":150,"label":"vues"},{"id":1480451340,"value":155,"label":"vues"},{"id":1480451350,"value":161,"label":"vues"},{"id":1480451360,"value":154,"label":"vues"},{"id":1480451370,"value":152,"label":"vues"},{"id":1480451380,"value":159,"label":"vues"},{"id":1480451390,"value":151,"label":"vues"},{"id":1480451400,"value":145,"label":"vues"},{"id":1480451410,"value":143,"label":"vues"},{"id":1480451420,"value":135,"label":"vues"},{"id":1480451430,"value":139,"label":"vues"},{"id":1480451440,"value":142,"label":"vues"},{"id":1480451450,"value":143,"label":"vues"},{"id":1480451460,"value":143,"label":"vues"},{"id":1480451470,"value":140,"label":"vues"},{"id":1480451480,"value":138,"label":"vues"},{"id":1480451490,"value":136,"label":"vues"},{"id":1480451500,"value":261,"label":"vues"},{"id":1480451510,"value":404,"label":"vues"},{"id":1480451520,"value":426,"label":"vues"},{"id":1480451530,"value":425,"label":"vues"},{"id":1480451540,"value":346,"label":"vues"},{"id":1480451550,"value":204,"label":"vues"},{"id":1480451560,"value":138,"label":"vues"},{"id":1480451570,"value":145,"label":"vues"},{"id":1480451580,"value":145,"label":"vues"},{"id":1480451590,"value":141,"label":"vues"},{"id":1480451600,"value":145,"label":"vues"},{"id":1480451610,"value":145,"label":"vues"},{"id":1480451620,"value":140,"label":"vues"},{"id":1480451630,"value":113,"label":"vues"},{"id":1480451640,"value":145,"label":"vues"},{"id":1480451650,"value":144,"label":"vues"},{"id":1480451660,"value":148,"label":"vues"},{"id":1480451670,"value":148,"label":"vues"},{"id":1480451680,"value":147,"label":"vues"},{"id":1480451690,"value":150,"label":"vues"},{"id":1480451700,"value":150,"label":"vues"},{"id":1480451710,"value":157,"label":"vues"},{"id":1480451720,"value":157,"label":"vues"},{"id":1480451730,"value":152,"label":"vues"},{"id":1480451740,"value":151,"label":"vues"},{"id":1480451750,"value":156,"label":"vues"},{"id":1480451760,"value":154,"label":"vues"},{"id":1480451770,"value":151,"label":"vues"},{"id":1480451780,"value":153,"label":"vues"},{"id":1480451790,"value":151,"label":"vues"},{"id":1480451800,"value":153,"label":"vues"},{"id":1480451810,"value":155,"label":"vues"},{"id":1480451820,"value":157,"label":"vues"},{"id":1480451830,"value":157,"label":"vues"},{"id":1480451840,"value":156,"label":"vues"},{"id":1480451850,"value":157,"label":"vues"},{"id":1480451860,"value":159,"label":"vues"},{"id":1480451870,"value":155,"label":"vues"},{"id":1480451880,"value":154,"label":"vues"},{"id":1480451890,"value":157,"label":"vues"},{"id":1480451900,"value":263,"label":"vues"},{"id":1480451910,"value":429,"label":"vues"},{"id":1480451920,"value":490,"label":"vues"},{"id":1480451930,"value":497,"label":"vues"},{"id":1480451940,"value":498,"label":"vues"},{"id":1480451950,"value":502,"label":"vues"},{"id":1480451960,"value":397,"label":"vues"},{"id":1480451970,"value":373,"label":"vues"},{"id":1480451980,"value":310,"label":"vues"},{"id":1480451990,"value":162,"label":"vues"},{"id":1480452000,"value":157,"label":"vues"},{"id":1480452010,"value":154,"label":"vues"},{"id":1480452020,"value":162,"label":"vues"},{"id":1480452030,"value":159,"label":"vues"},{"id":1480452040,"value":153,"label":"vues"},{"id":1480452050,"value":157,"label":"vues"},{"id":1480452060,"value":157,"label":"vues"},{"id":1480452070,"value":160,"label":"vues"},{"id":1480452080,"value":161,"label":"vues"},{"id":1480452090,"value":156,"label":"vues"},{"id":1480452100,"value":153,"label":"vues"},{"id":1480452110,"value":153,"label":"vues"},{"id":1480452120,"value":160,"label":"vues"},{"id":1480452130,"value":157,"label":"vues"},{"id":1480452140,"value":157,"label":"vues"},{"id":1480452150,"value":160,"label":"vues"},{"id":1480452160,"value":163,"label":"vues"},{"id":1480452170,"value":166,"label":"vues"},{"id":1480452180,"value":168,"label":"vues"},{"id":1480452190,"value":163,"label":"vues"},{"id":1480452200,"value":165,"label":"vues"},{"id":1480452210,"value":162,"label":"vues"},{"id":1480452220,"value":163,"label":"vues"},{"id":1480452230,"value":163,"label":"vues"},{"id":1480452240,"value":260,"label":"vues"},{"id":1480452250,"value":433,"label":"vues"},{"id":1480452260,"value":513,"label":"vues"},{"id":1480452270,"value":514,"label":"vues"},{"id":1480452280,"value":448,"label":"vues"},{"id":1480452290,"value":439,"label":"vues"},{"id":1480452300,"value":489,"label":"vues"},{"id":1480452310,"value":428,"label":"vues"}]}

const realtime_data = realtime_views.data.map(e=>({time: new Date(e.id * 1000), value: e.value}))

const translations = {
  'It is a beautiful day!': 'C\'est une belle journée!',
  'The parrot ate the cake.': 'Le perroquet a mangé le gateau.',
  hello: "<a class=\"js-fb-permissions link\" data-scopes=\"email\" href=\"https://google.com\" target=\"_blank\">Bonjour",
}

const Trans = SaladUI.Util.Trans.factory(translations)

const chartData = [
  {time: new Date('2010-04-01'), value: 5102},
  {time: new Date('2010-04-02'), value: 22902},
  {time: new Date('2010-04-03'), value: 10052},
  {time: new Date('2010-04-04'), value: 11053},
  {time: new Date('2010-04-05'), value: 17001},
  {time: new Date('2010-04-06'), value: 21010},
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

    this.setState({ protein: selectOptions[1] })

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
            <p>
              SaladUI is a collection of React components and utility functions that range from translation, to autocomplete and charts.
              It can be enjoyed as a complete salad using <i className="snippet">import SaladUI from 'salad-ui'</i> or as its separate ingredients using <i className="snippet">{`import {Area} from 'salad-ui.chart'`}</i>. You can install separate ingredients as <i className="snippet">npm i --save salad-ui.chart</i>.</p>
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
        <section>
          <h2>1.x.x release notes</h2>
          <ol>
            <li><i className="snippet">Trans</i> component and translate function should now take parameters in object notation format: <i className="snippet">{`{user:{name:'Sam'}}`}</i></li>
            <li><i className="snippet">f</i> is renamed to <i className="snippet">http</i></li>
            <li>Added formatter.render function to format string templates.</li>
            <li>Various updates to the charts, better yLabel formatting.</li>
          </ol>
        </section>
        <section ref="firstSection">
          <h2>Chart</h2>
          <ul className="functionality">
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Area</h3>
              <pre>
{`const chartData = [{time: new Date('1990-01-02'), value: 1231}]

<SaladUI.Chart.Area
  width={900}
  height={300}
  labelTemplate={data=>\`Cats ate \${SaladUI.Lib.formatter.formatCurrency(data.value, 'USD')} worth of fish that day.\`}
  data={chartData} width={560}
/>`}
              </pre>
              <div>
                <SaladUI.Chart.Area
                  width={this.state.sectionWidth}
                  height={this.state.sectionWidth*0.6}
                  maxPoints={30}
                  formula="mean"
                  data={realtime_data}
                  labelTemplate={data=>`${data.value} views`}
                  // labelTemplate={data=>`Cats ate ${SaladUI.Lib.formatter.formatCurrency(data.value, 'USD')} worth of fish that day.`}
                  // data={chartData}
                />
              </div>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Bar</h3>
              <pre>
{`const chartData = [{time: new Date('1990-01-02'), value: 1231}]

<SaladUI.Chart.Area
  width={900}
  height={300}
  labelTemplate={data=>\`Cats ate \${SaladUI.Lib.formatter.formatCurrency(data.value, 'USD')} worth of fish that day.\`}
  data={chartData} width={560}
/>`}
              </pre>
              <div>
                <SaladUI.Chart.Bar
                  width={this.state.sectionWidth}
                  height={this.state.sectionWidth*0.4}
                  data={[
                    {label: '100%', value: 100},
                    {label: '90%', value: 80},
                    {label: '80%', value: 79},
                    {label: '70%', value: 68},
                    {label: '60%', value: 59},
                    {label: '50%', value: 50},
                    {label: '40%', value: 39},
                    {label: '30%', value: 29},
                    {label: '20%', value: 12},
                    {label: '10%', value: 10}
                  ]}
                />
              </div>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Bar Metric</h3>
              <pre>
{`<SaladUI.Chart.BarMetric
  label={'Cats'}
  percent={20}
  value={String(20)}
  metricName="%"
/>`}
              </pre>
              <div>
                <SaladUI.Chart.BarMetric
                  label={'White Cats'}
                  percent={20}
                  value={String(20)}
                  metricName="%"
                />
                <SaladUI.Chart.BarMetric
                  label={'Black Cats'}
                  percent={40}
                  value={String(40)}
                  metricName="%"
                />
                <SaladUI.Chart.BarMetric
                  label={'Other Cats'}
                  percent={40}
                  value={String(40)}
                  metricName="%"
                />
              </div>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>React Component</span> Circle Pie</h3>
              <pre>
{`<SaladUI.Chart.CirclePie
  width={100}
  height={100}
  strokeWidth={7}
  percent={42}
  strokeColor="rgb(31, 207, 101)"
  fillColor="rgb(31, 207, 101)"
/>`}
              </pre>
              <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 40, alignItems: 'flex-end'}}>
                <SaladUI.Chart.CirclePie width={120} height={120} strokeWidth={20} percent={49} labelColor="rgb(245, 210, 84)" strokeColor="rgb(245, 210, 84)"/>
                <SaladUI.Chart.CirclePie width={160} height={160} strokeWidth={20} percent={42}/>
                <SaladUI.Chart.CirclePie width={200} height={200} strokeWidth={20} labelColor="rgb(31, 207, 101)" strokeColor="rgb(31, 207, 101)" percent={72}/>
                <SaladUI.Chart.CirclePie width={160} height={160} strokeWidth={20} percent={32} labelColor="rgb(245, 84, 133)" strokeColor="rgb(245, 84, 133)"/>
                <SaladUI.Chart.CirclePie width={120} height={120} strokeWidth={20} percent={3} labelColor="rgb(169, 84, 245)" strokeColor="rgb(169, 84, 245)"/>
              </div>
            </li>
          </ul>
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
                <SaladUI.Form.InputText placeholder="yoursubdomain" label="Input with label, prefix and suffix"/>
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
                  value={this.state.protein.value}
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
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> http (fetch wrapper)</h3>
              <pre>
{`http.get('https://api.dailymotion.com/user/spi0n')
.then(json => console.log(json))
.catch(err => console.error(err))

http.post('https://api.dailymotion.com/user/spi0n')
http.delete('https://api.dailymotion.com/user/spi0n')

const api = http.apiFactory('https://api.dailymotion.com', {access_token: 'abc'})
api.get('/user/spi0n')`}
              </pre>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> glob</h3>
              <pre>
                {`glob.canUseDom()`}
              </pre>
              <p><strong>{SaladUI.Lib.glob.canUseDom()?'true':'false'}</strong></p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> formatter.numberToString</h3>
              <pre>
                {`formatter.numberToString(10782.123)`}
              </pre>
              <p><strong>{SaladUI.Lib.formatter.numberToString(10782.123)}</strong></p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> formatter.formatNumber</h3>
              <pre>
                {`formatter.formatNumber(10782.123)`}
              </pre>
              <p><strong>{SaladUI.Lib.formatter.formatNumber(10782.123)}</strong></p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> formatter.currencyToSymbol</h3>
              <pre>
                {`formatter.currencyToSymbol('USD')`}
              </pre>
              <p><strong>{SaladUI.Lib.formatter.currencyToSymbol('USD')}</strong></p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> formatter.formatCurrency</h3>
              <pre>
                {`formatter.formatCurrency(205.12, 'EUR')`}
              </pre>
              <p><strong>{SaladUI.Lib.formatter.formatCurrency(205.12, 'EUR')}</strong></p>
            </li>
            <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> formatter.render</h3>
              <pre>
                {`formatter.render('{greeting}! I am {user.age} years old.', {greeting: 'Hello', user: {age: 32}})`}
              </pre>
              <p><strong>{SaladUI.Lib.formatter.render('{greeting}! I am {user.age} years old.', {greeting: 'Hello', user: {age: 32}})}</strong></p>
            </li>
            {/* <li>
              <h3><span style={{fontStyle: 'italic', opacity: .3}}>Function</span> sso</h3>
              <pre>
{`sso.init(SDX)
sso.getJWT('revshare').then(token => {
  console.log('Yay I have a token!')
})`}
              </pre>
            </li> */}
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
  'There are {elephants} elephants in {city}.',
  {elephants: 24, city: "Hong Kong"},
  24,
  {
    'There are {elephants} elephants in {city}': {
      singular: "Il y a {elephants} elephant à {city}.",
      plural: "Il y a {elephants} elephants à {city}.",
    }
  }
)

// Or as a factory passing the translations object:
const Trans = SaladUI.Util.Trans.factory({
  'It is a beautiful day!': 'C\'est une belle journée!'
  'The parrot ate the cake.': 'Le perroquet a mangé le gateau.'
})
<Trans>It is a beautiful day!</Trans>
Trans.translate('The parrot ate the cake.')`}</pre>
              <h3>
                <SaladUI.Util.Trans context={{"Hello": "Bonjour"}}>Hello</SaladUI.Util.Trans>
              </h3>
              <p>
                <strong>
                {SaladUI.Util.translate(
                  'There are {elephants} elephants in {city}.',
                  {elephants: 24, city: "Hong Kong"},
                  24,
                  {
                    'There are {elephants} elephants in {city}.': {
                      singular: "Il y a {elephants} éléphant à {city}.",
                      plural: "Il y a {elephants} éléphants à {city}.",
                    }
                  }
                )}
                </strong>
              </p>
              <p>
                <strong>
                <Trans>It is a beautiful day!</Trans>
                </strong>
              </p>
              <p>
                <strong>
                {Trans.translate('The parrot ate the cake.')}
                </strong>
              </p>
              {
                Object.keys(DM_ENV).map(key=>(
                  <div key={key}>
                    <h3>{key}</h3>
                    {
                      Object.keys(DM_ENV[key]).map(sub_key=>(
                        <p key={sub_key}><SaladUI.Util.Trans context={DM_ENV[key]}>{sub_key}</SaladUI.Util.Trans></p>
                      ))
                    }
                  </div>
                ))
              }
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
              <SaladUI.Util.TagList
                items={this.state.tagsAdded}
                handleRemoveItem={(t) => this.handleRemoveTag(t)}
                handleAddItem={t=>this.setState({tagsAdded: this.state.tagsAdded.concat(t)})}
              />
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
              <SaladUI.Video.List apiURL="https://api.dailymotion.com" limit={10} endpoint="/videos" sortBy="random">
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
              <SaladUI.Video.List apiURL="https://api.dailymotion.com" limit={3} endpoint="/videos" sortBy="random">
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
          <p>Made with love at <a href="https://dailymotion.com">Dailymotion</a> in NYC.</p>
          <p>Maintained by <a href="https://samueldelesque.com">Samuel Delesque</a>.</p>
        </footer>
      </div>
    )
  }
}
