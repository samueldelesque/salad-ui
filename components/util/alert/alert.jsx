import React, {PropTypes, Component} from 'react'
import Icon from '../../icon/icon'

const colorMap = {
  success: '#00C832',
  error:   '#FF003C',
  warning: '#FF8200',
  info:    '#0066DC',
}

export default class Alert extends Component {
  static defaultProps = {
    title: false,
    type: 'info',
    onClose: false
  }

  render() {
    let className = `media utils_alert utils_alert--${this.props.type} ${this.props.className ? this.props.className: ''}`
    if (this.props.title) {
      className += ' utils_alert--lg'
    }
    else {
      className += ' utils_alert--md'
    }

    return (
      <div className={className}>
        <div style={{float:'left',marginRight:'10px'}}>
          <Icon type={this.props.type} fill={colorMap[this.props.type]} />
        </div>
        <div className="media-block">
            {
              this.props.onClose ?
              <div className="utils_alert__close icon-close" onClick={::this.props.onClose}></div> :
              null
            }
            {
              this.props.title
              ? <h2 className="utils_alert__title">{this.props.title}</h2>
              : null
            }
            {this.props.children}
        </div>
      </div>
    )
  }
}
