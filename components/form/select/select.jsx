import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {merge, filter} from 'lodash'
import Icon from '../../icon/icon'
import styles from './_stylesheet'

export default class Select extends Component {
  state = {
    currentOption: null,
    open: false,
  }

  static defaultProps = {
    noBorder: false,
  }

  componentWillMount() {
    let obj = {}
    if(this.props.value){
      let value = this.props.value
      obj = filter(this.props.options, function(o){ return o.value === value })[0]
    }

    else if(this.props.children){
      obj = {
        name: this.props.children,
        value: null
      }
    }
    else {
      obj = this.props.options[0]
    }

    this.setState({
      currentOption: obj
    })
  }

  handleOutsideClick(e){
    if(ReactDOM.findDOMNode(this).contains(e.target))
      return
    else {
      this.setState({
        open: false
      })
    }
  }

  componentDidMount(){
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    document.addEventListener('click', this.handleOutsideClick)
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.handleOutsideClick);
  }

  selectClick(e){
    this.setState({
      open: true
    })
  }

  itemMouseEnter(option) {
    this.setState({
      currentOption: option
    })
  }

  itemClick(){
    this.setState({
      open: false
    })

    if(this.props.handleClick)
      this.props.handleClick(this.state.currentOption)

    if(this.props.onChange)
      this.props.onChange(this.state.currentOption)
  }

  renderOptions() {
    let selectedItemStyle = merge({}, styles.dropdownItem, styles.selected)
    let options = this.props.options.map((item, index) => {
      return <li
        key = {'select_' + index}
        style={(item.value === this.state.currentOption.value) ? selectedItemStyle : styles.dropdownItem}
        value={item.value}
        onMouseEnter={() => this.itemMouseEnter(item)}
        onClick={() => this.itemClick()}>
        {item.name}
      </li>
    });

    if(this.props.children){
      let defaultOption = {name: this.props.children, value: null}
      return <ul><li
        style={(this.state.currentOption.value === null) ? selectedItemStyle : styles.dropdownItem}
        value={null}
        onMouseEnter={() => this.itemMouseEnter(defaultOption)}
        onClick={() => this.itemClick()}>
        {this.props.children}
      </li>{ options }</ul>
    }
    else {
      return <ul>{ options }</ul>
    }
  }

  render() {
    let selectBoxStyles = styles.selectBox
    if(this.props.noBorder) selectBoxStyles = Object.assign({}, selectBoxStyles, styles.noBorder)
    return (
      <div style={{position: 'relative'}}>
        <div style={selectBoxStyles} onClick={(e) => this.selectClick(e)}>
          <Icon type="arrow-left" width={10} height={10} style={styles.dropdownIcon} />
          <div>
            {this.state.currentOption.name}
          </div>
        </div>
        {
          this.state.open
          ? <div style={styles.dropdown}>{this.renderOptions()}</div>
          : null
        }
      </div>
    )
  }
}
