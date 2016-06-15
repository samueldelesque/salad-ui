'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _saladUi = require('../salad-ui');

var _saladUi2 = _interopRequireDefault(_saladUi);

var _icon = require('../icon/icon');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _glob = require('../../lib/glob.js');

var _glob2 = _interopRequireDefault(_glob);

var _demoAutocomplete = require('./demo-autocomplete');

var _demoAutocomplete2 = _interopRequireDefault(_demoAutocomplete);

var _videoComponents = require('./video-components');

var videoComponents = _interopRequireWildcard(_videoComponents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Enjoying this toolkit? Come to 156 5th ave in NYC for ' + String.fromCharCode(55356, 57211) + ' Friday 6pm.');

var chartData = [{ time: 1422766800000, value: 0, label: "{{value}} active users" }, { time: 1422853200000, value: 9, label: "{{value}} active users" }, { time: 1422939600000, value: 5, label: "{{value}} active users" }, { time: 1423026000000, value: 15, label: "{{value}} active users" }, { time: 1423112400000, value: 7, label: "{{value}} active users" }, { time: 1423198800000, value: 13, label: "{{value}} active users" }];

var selectOptions = [{ name: 'tofu', value: -2, calories: 400 }, { name: 'bacon', value: -1, calories: 900 }, { name: 'roasted chicken', value: 0, calories: 600 }, { name: 'steak', value: 1, calories: 700 }];

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Demo)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      selectedRadio: 'radio1',
      protein: { name: null, value: null, calories: 0 },
      tagsAdded: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      showOverlay: false,
      sectionWidth: 720
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
      ga('create', 'UA-78769010-1', 'auto');
      _saladUi2.default.Lib.tracking.trackPage('SaladUI Demo');

      this.onResize = this.onResize.bind(this);
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      var sectionWidth = this.refs.firstSection.getBoundingClientRect().width;
      this.setState({ sectionWidth: sectionWidth });
    }
  }, {
    key: 'handleRemoveTag',
    value: function handleRemoveTag(tag) {
      console.log('item to remove: ', tag);
      var tags = this.state.tagsAdded,
          index = this.state.tagsAdded.indexOf(tag);

      tags.splice(index, 1);
      this.setState({
        tagsAdded: tags
      });
    }
  }, {
    key: 'showOverlay',
    value: function showOverlay() {
      this.setState({
        showOverlay: true
      });
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay() {
      this.setState({
        showOverlay: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'demo', ref: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/dailymotion/salad-ui', target: '_blank', className: 'github-corner' },
            _react2.default.createElement(
              'svg',
              { width: '80', height: '80', viewBox: '0 0 250 250' },
              _react2.default.createElement('path', { d: 'M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' }),
              _react2.default.createElement('path', { d: 'M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2', fill: 'currentColor', className: 'octo-arm' }),
              _react2.default.createElement('path', { d: 'M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z', fill: 'currentColor', className: 'octo-body' })
            )
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Salad-UI ',
            String.fromCharCode(55357, 56960)
          ),
          _react2.default.createElement(
            'h2',
            null,
            _react2.default.createElement(
              'pre',
              null,
              'npm i --save salad-ui'
            ),
            _react2.default.createElement(
              'pre',
              null,
              'import SaladUI from \'salad-ui\''
            ),
            _react2.default.createElement(
              'pre',
              null,
              '<SaladUI.Chart.Area/>'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://npmjs.com/package/salad-ui', target: '_blank' },
              _react2.default.createElement('img', { src: 'https://badge.fury.io/js/salad-ui.svg' })
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'Salad-UI can be enjoyed as a complete salad using ',
            _react2.default.createElement(
              'i',
              { className: 'snippet' },
              'import SaladUI from \'salad-ui\''
            ),
            ' or as its separate ingredients using ',
            _react2.default.createElement(
              'i',
              { className: 'snippet' },
              'import {Area} from \'salad-ui.chart\''
            ),
            '. You can install separate ingredients as ',
            _react2.default.createElement(
              'i',
              { className: 'snippet' },
              'npm i --save salad-ui.chart'
            ),
            '.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Salad-UI will work both in Browser and Server environment - use it in your universal apps!'
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'warning-mobile' },
          _react2.default.createElement(
            _saladUi2.default.Util.Alert,
            { type: 'error' },
            'Code snippets not shown on mobile!'
          )
        ),
        _react2.default.createElement(
          'section',
          { ref: 'firstSection' },
          _react2.default.createElement(
            'h2',
            null,
            'Form'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Autocomplete'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Autocomplete/>'
              ),
              _react2.default.createElement(_demoAutocomplete2.default, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Checkbox'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Checkbox/>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.Checkbox,
                null,
                'This is a checkbox'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Radio'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<RadioGroup/><Radio></RadioGroup>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Form.RadioGroup,
                { name: 'radiotest', onChange: function onChange(val) {
                    return _this2.setState({ selectedRadio: val });
                  }, selected: this.state.selectedRadio },
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio1' },
                  'This is a Radio element'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Radio,
                  { value: 'radio2' },
                  'This is another Radio element'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' InputText'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<InputText/><InputText textarea/>'
              ),
              _react2.default.createElement(_saladUi2.default.Form.InputText, null),
              _react2.default.createElement(_saladUi2.default.Form.InputText, { textarea: true })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Toggle'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Toggle/>'
              ),
              _react2.default.createElement(_saladUi2.default.Form.Toggle, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Select'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'let options = [\n  {name: \'tofu\', value: \'tofu\', calories: 400},\n  {name: \'bacon\', value: \'bacon\', calories: 900},\n  {name: \'roasted chicken\', value: \'chicken\', calories: 600},\n  {name: \'steak\', value: \'steak\', calories: 700}\n]\n<Select\n  options={options}\n  onChange={(protein)=>this.setState({protein})}>Pick one</Select>'
              ),
              _react2.default.createElement(
                'div',
                { style: { width: 300 } },
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    options: selectOptions,
                    onChange: function onChange(protein) {
                      return _this2.setState({ protein: protein });
                    } },
                  'Pick a protein'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { margin: '10px 0' } },
                  'Select without border'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Form.Select,
                  {
                    options: selectOptions,
                    value: selectOptions[2].value,
                    onChange: function onChange(protein) {
                      return _this2.setState({ protein: protein });
                    },
                    noBorder: true },
                  'Borderless'
                ),
                _react2.default.createElement(
                  'p',
                  { style: { padding: 10 } },
                  'Protein: ',
                  _react2.default.createElement(
                    'b',
                    { style: { fontWeight: 'bold' } },
                    this.state.protein.value,
                    ' (',
                    this.state.protein.calories,
                    'cal)'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Lib'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' childrenWithProps'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'childrenWithProps(reactComponent, __INITIAL_PROPS__)'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' currencyToSymbol'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'currencyToSymbol(\'USD\')\n// $'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' f'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'f.get(\'http://api.dailymotion.com/user/spi0n\')\n.then(json => console.log(json))\n.catch(err => console.error(err))\n\nf.post(\'http://api.dailymotion.com/user/spi0n\')\nf.delete(\'http://api.dailymotion.com/user/spi0n\')'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' glob'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'glob.canUseDom()\n// true'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' numberToString'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'numberToString(10782)\n// 11k'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' polyfill'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'polyfill()\n// Object.assign etc are now available in your shitty browser'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' sso'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'sso.init(SDX)\nsso.getJWT(\'revshare\').then(token => {\n  console.log(\'Yay I have a token!\')\n})'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'Function'
                ),
                ' tracking'
              ),
              _react2.default.createElement(
                'pre',
                null,
                'tracking.trackPage(\'SaladUI Demo\')\ntracking.trackEvent(\'eventName\', {ga: {label: \'test\'}})'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Stylesheet'
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Chart'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Chart.Area\n  width={900}\n  height={300}\n  data={chartData} width={560}\n  />'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_saladUi2.default.Chart.Area, {
              width: this.state.sectionWidth,
              height: this.state.sectionWidth * 0.6,
              data: chartData })
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Util'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Alert'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Alert type="info/error/success/warning">Hello World</Alert>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Alert,
                { type: 'info', onClose: function onClose() {
                    return alert("don't close me!");
                  }, title: 'title eh' },
                'Hello World'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Trans'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Trans context={{"Hello": "Bonjour"}}>Hello</Trans>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Trans,
                { context: { "Hello": "Bonjour" } },
                'Hello'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Button'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<Button onPress={()=>alert(\'ay ay captain\')}>Press Me</Button>'
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    } },
                  'Press Me'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, type: 'primary', style: { marginLeft: 10 } },
                  'Type primary'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'sm', style: { marginLeft: 10 } },
                  'Size small'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, size: 'lg', mouseOverText: 'Way fatter.', loading: true },
                  'I am bigger.'
                ),
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, style: { marginLeft: 10 }, size: 'lg', type: 'success', mouseOverText: 'Unfollow' },
                  'Following'
                )
              ),
              _react2.default.createElement(
                'div',
                { style: { padding: 10 } },
                _react2.default.createElement(
                  _saladUi2.default.Util.Button,
                  { onPress: function onPress() {
                      return alert('ay ay captain');
                    }, fullWidth: true },
                  'I am longer.'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' ProfilePicture'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<ProfilePicture size={50}/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, null),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'https://lh6.googleusercontent.com/-2lJYGtfXKwQ/AAAAAAAAAAI/AAAAAAAB15E/JDAoqjtUysE/s0-c-k-no-ns/photo.jpg' }),
              _react2.default.createElement(_saladUi2.default.Util.ProfilePicture, { src: 'http://s2.dmcdn.net/JWg8h/118x118-Os1.png' })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Tag List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<TagList items=[\'tag1\',\'tag2\',\'tag3\',\'tag4\',\'tag5\',\'tag6\']/>'
              ),
              _react2.default.createElement(_saladUi2.default.Util.TagList, { items: this.state.tagsAdded, handleRemoveItem: function handleRemoveItem(t) {
                  return _this2.handleRemoveTag(t);
                } })
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Badges'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'live\'>Live</SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Util.Badge type=\'verified\'></SaladUI.Util.Badge>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'live' },
                'Live'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'duration' },
                '00:23'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Badge,
                { position: 'inline', type: 'verified' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: 'check', fill: 'white', width: 12, height: 12 })
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Icon ',
            _react2.default.createElement(_saladUi2.default.Icon, { type: 'favorite', fill: 'white', width: 20, height: 20 })
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Icon\n    type="favorite"\n    fill="white"\n    width={20}\n    height={20}/>'
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon-list' },
            _lodash2.default.map(_icon.iconTypes, function (path, icon) {
              return _react2.default.createElement(
                'span',
                { key: 'icon.' + icon, className: 'icon-item' },
                _react2.default.createElement(_saladUi2.default.Icon, { type: icon, fill: 'white' }),
                _react2.default.createElement(
                  'span',
                  { className: 'icon-title' },
                  icon
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Video'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' Grid'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Video.Grid/>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Video.List,
                { apiURL: 'https://api.dailymotion.com', limit: 10, endpoint: '/videos' },
                _react2.default.createElement(videoComponents.GridArea, null),
                _react2.default.createElement(videoComponents.LoadMore, null)
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'h3',
                null,
                _react2.default.createElement(
                  'span',
                  { style: { fontStyle: 'italic', opacity: .3 } },
                  'React Component'
                ),
                ' List'
              ),
              _react2.default.createElement(
                'pre',
                null,
                '<SaladUI.Video.List/>'
              ),
              _react2.default.createElement(
                _saladUi2.default.Video.List,
                { apiURL: 'https://api.dailymotion.com', limit: 3, endpoint: '/videos' },
                _react2.default.createElement(videoComponents.ListArea, null),
                _react2.default.createElement(videoComponents.LoadMore, null)
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Overlay'
          ),
          _react2.default.createElement(
            'pre',
            null,
            '<SaladUI.Util.Overlay\n    show=true\n    onClose={()}\n    closeButton={true}>\n    <overlayHeader style={{backgroundColor:\'blue\'}}>\n      This is the header section and the overlay\'s title\n    </overlayHeader>\n    <overlayContent>\n      This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content\n    </overlayContent>\n    <overlayFooter>\n      <SaladUI.Util.Button onPress={()=>this.closeOverlay()} style={{marginRight: \'10px\'}}>Cancel</SaladUI.Util.Button>\n      <SaladUI.Util.Button type="primary" onPress={()=>this.closeOverlay()}>Save</SaladUI.Util.Button>\n    </overlayFooter>\n  </SaladUI.Util.Overlay>\n'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'functionality' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _saladUi2.default.Util.Button,
                { type: 'primary', onPress: function onPress() {
                    return _this2.showOverlay();
                  } },
                'Click me!'
              ),
              _react2.default.createElement(
                _saladUi2.default.Util.Overlay,
                {
                  show: this.state.showOverlay,
                  onClose: function onClose() {
                    return _this2.closeOverlay();
                  },
                  closeButton: true },
                _react2.default.createElement(
                  'overlayHeader',
                  null,
                  'This is the header section and the overlay\'s title'
                ),
                _react2.default.createElement(
                  'overlayContent',
                  null,
                  'This is overlay\'s content This is overlay\'s content This is overlay\'s content This is overlay\'s content'
                ),
                _react2.default.createElement(
                  'overlayFooter',
                  null,
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { onPress: function onPress() {
                        return _this2.closeOverlay();
                      }, style: { marginRight: '10px' } },
                    'Cancel'
                  ),
                  _react2.default.createElement(
                    _saladUi2.default.Util.Button,
                    { type: 'primary', onPress: function onPress() {
                        return _this2.closeOverlay();
                      } },
                    'Save'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'footer',
          null,
          'Made with love at ',
          _react2.default.createElement(
            'a',
            { href: 'http://dailymotion.com' },
            'Dailymotion'
          ),
          ' in NYC.'
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component);

exports.default = Demo;