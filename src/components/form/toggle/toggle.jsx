import React, {Component, PropTypes} from 'react'

export default class Toggle extends Component {
  static defaultProps = {
    data: [{label: 'on', value: 'on'}, {label: 'off', value: 'off'}],
    selectedIndex: 0,
    onChange: () => {},
    className: ''
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    selectedIndex: PropTypes.number,
    onChange: PropTypes.func,
    className: PropTypes.string
  }
  static contextTypes = {
    router: PropTypes.func
  }
  state = {
    selectedIndex: 0,
    cursorStyle: {},
    value: null
  }
  componentWillMount() {
    this.setState({selectedIndex: this.props.selectedIndex, value: this.props.data[this.props.selectedIndex].value})
  }

  componentDidMount() {
    this.select(this.state.selectedIndex)
  }

  select(index) {
    this.setState({
      selectedIndex: index,
      cursorStyle: this.getCursorStyle(index),
      value: this.props.data[index].value,
      off: this.props.data[index].off
    })
    this.props.onChange(this.props.data[index].value)
  }

  handleClick() {
    this.select(this.state.selectedIndex === 1 ? 0 : 1)
  }

  getCursorStyle(index) {
    index = index === 1 ? 0 : 1
    let selected = this.refs[`choice-${index}`]

    return {left: selected.offsetLeft, width: selected.offsetWidth}
  }

  render() {
    let data0 = this.props.data[0]
    let data1 = this.props.data[1]
    let className = `${this.props.className} ${this.state.off ? 'form_toggle--off' : ''}`

    return (
      <div className={`form_toggle ${className}`} onClick={::this.handleClick}>
        <span ref="choice-0" className="form_toggle__choice">{data0.label}</span>
        <span ref="choice-1" className="form_toggle__choice">{data1.label}</span>
        <div className="form_toggle__slider" style={this.state.cursorStyle}/>
        <input ref="input" type="hidden" name={this.props.name} value={this.state.value}/>
      </div>
    )
  }
}
