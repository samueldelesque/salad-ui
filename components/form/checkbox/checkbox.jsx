import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Checkbox extends Component {
  state = {
    checked: false
  }

  static defaultProps = {
    checked: false
  }

  componentDidMount() {
    this.setState({checked: this.props.checked})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: nextProps.checked})
  }

  handleChange(value) {
    this.setState({checked: value})

    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  toggleState() {
    this.setState({checked: !this.state.checked})
    this.handleChange(!this.state.checked)
  }

  render() {
    return (
      <div className={classNames('multi-choice', this.props.className)}>
        <input
          type="checkbox"
          checked={this.state.checked}/>
        <label onClick={::this.toggleState}>
          <i className="checkbox_icon"></i>
          {this.props.children}
        </label>
      </div>
    )
  }
}
