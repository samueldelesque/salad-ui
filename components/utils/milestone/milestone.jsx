import React, {Component, PropTypes} from 'react'

export default class Milestone extends Component {
  el = null
  state = {}

  static defaultProps = {
    offset: 100,
    revertable: false
  }

  componentDidMount() {
    this.el = this.refs.element
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    let center = window.innerHeight/2
    let elementCenter = rect.top + rect.height / 2
    return (
      elementCenter - rect.height / 2 <= center && elementCenter + rect.height / 2 >= center
    )
  }

  handleScroll(e) {
    if (this.isInViewport(this.el)) {
      if (!this.props.revertable) {
        window.removeEventListener('scroll', this.handleScroll, false)
      }
      this.setState({className: 'milestone--active'})
      this.props.onEnter && this.props.onEnter()
    } else {
      this.setState({className: 'milestone--inactive'})
      this.props.onLeave && this.props.onLeave()
    }
  }

  handleScroll = ::this.handleScroll

  render() {
    return (
      <div className={`${this.props.className} ${this.state.className}`} ref="element">
        {this.props.children}
      </div>
    )
  }
}
