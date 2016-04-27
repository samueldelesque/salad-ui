import React, {PropTypes, Component} from 'react'
import isClient from 'is-client'
import {Link} from 'react-router'
import history from 'js/lib/dm/history.es6'

//import Event, {Events} from 'lib/event'

export default class Nav extends Component {
  static propTypes = { activeTabIndex: React.PropTypes.number }

  static defaultProps = {
    data: [],
    direction: 'horizontal',
    activeTabIndex: null
  }

  static contextTypes = {
    router: PropTypes.func
  }

  constructor() {
    super()
    this.onResize = ::this.onResize
  }

  componentWillMount() {
    this.setState({activeTabIndex: this.props.activeTabIndex})
  }

  componentDidMount(){
    if (isClient) {
      window.addEventListener('resize', this.onResize)
    }
    if (this.state.activeTabIndex !== null) {
      setTimeout(() => this.setState({cursorStyle: this.getCursorStyle(this.state.activeTabIndex)}, 0))
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({activeTabIndex: nextProps.activeTabIndex})
    setTimeout(() => this.setState({cursorStyle: this.getCursorStyle(this.state.activeTabIndex)}, 0))

  }

  componentWillUnmount() {
    if (isClient) {
      window.removeEventListener('resize', this.onResize)
    }
  }

  getPanes(){
    return this.props.data.map(
      (item, index) => {
        let style = {display: (index === this.state.activeTabIndex ? 'block' : 'none')}
        return (<div className="pane" style={style} ref={'tab-' + index + '-content'} key={index}>{item.content}</div>)
      }
    )
  }

  getCursorStyle(index) {
    if (isClient) {
      let el = this.refs['tab-' + index]
      let marginWidth = 20

      if (!el) {
        return
      }
      if (this.props.direction === 'horizontal') {
        return {top: (el.offsetTop + el.offsetHeight - 4) + 'px', left: el.offsetLeft + 'px', width: el.offsetWidth - marginWidth + 'px'}
      }
      else if (this.props.direction === 'vertical') {
        return {top: el.offsetTop + 'px', height: el.offsetHeight + 'px'}
      }
    }
    return {}
  }

  onResize() {
    if (this.state.activeTabIndex !== null) {
      this.setState({cursorStyle: this.getCursorStyle(this.state.activeTabIndex)})
    }
  }

  onTabClicked(index) {
    this.setState({activeTabIndex: index, cursorStyle: this.getCursorStyle(index)})
  }

  render() {
    let className = 'utils_nav ' + (this.props.direction === 'vertical' ? 'utils_nav--vertical' : 'utils_nav--horizontal')
    if (this.props.className){
      className += ` ${this.props.className}`
    }
    let hasPanes = false
    let linkIndex = 0
    let tabs = this.props.data.map(
      (item, index) => {
        let title = item
        if (typeof item === 'object') {
          // if (item.type && item.type  === Link) {
          //   if (window.location.pathname === item.props.to) {
          //     console.log('active')
          //   }
          //   //console.log('nadir', history.isActive(item.props.to))
          // }
          if (item.title) {
            title = <a>{item.title}</a>
          }
          if (item.separator) {
            return (<li key={`title-${index}`}><h2>{title}</h2></li>)
          }
          if (item.content) {
            hasPanes = true
          }
        }
        else if (typeof item === 'string') {
          title = <a>{item}</a>
        }
        let tabClassName = 'tab ' + (linkIndex === this.state.activeTabIndex ? 'tab--active' : '')
        if (item.props.position === 'end') {
          tabClassName = 'tab pull-end'
        }
        let li = <li className={tabClassName} onClick={this.onTabClicked.bind(this, linkIndex)} ref={'tab-' + linkIndex} key={index}>{title}</li>
        linkIndex++
        return li
      }
    )

    let tabStyle = {}
    if (this.props.centered){
      tabStyle.textAlign = 'center'
    }

    return (
      <div className={`${className}`}>
        <div className="utils_nav__tabs mrg-btm-lg">
          <ul style={tabStyle} className={this.props.ulClassName}>{tabs}</ul>
          <div className="cursor" style={this.state.cursorStyle}/>
        </div>
        {
          hasPanes
          ? <div className="utils_nav__panes">
              {this.getPanes()}
            </div>
          : null
        }
      </div>
    )
  }
}
