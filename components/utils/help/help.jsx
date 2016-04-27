import React, {PropTypes} from 'react'
import PureComponent from 'react-pure-render/component'
import classNames from 'classnames'

import Tooltip from 'components/utils/tooltip/tooltip'

export default class Help extends PureComponent {
  static propTypes = {
    position: PropTypes.string,
    theme: PropTypes.oneOf(['light', 'dark'])
  }

  static defaultProps = {
    position: 'top',
    arrow: 'center',
    theme: 'light'
  }

  state = {
    isActive: false
  }

  showHelp() {
    this.setState({isActive: true})
  }

  hideHelp() {
    this.setState({isActive: false})
  }

  render() {
    let id = `help-tooltip-${Math.floor(Math.random() * 100)}`

    return (
      <span className={this.props.className}>
        <i
          id={id}
          className="icon-question_mark_sign"
          onMouseEnter={::this.showHelp}
          onMouseLeave={::this.hideHelp}
          style={{cursor: 'pointer', color: 'rgba(155,155,155, 0.8)'}}/>
        <Tooltip active={this.state.isActive} position={this.props.position} arrow={this.props.arrow} parent={`#${id}`} theme={this.props.theme}>{this.props.children}</Tooltip>
      </span>
    )
  }
}
