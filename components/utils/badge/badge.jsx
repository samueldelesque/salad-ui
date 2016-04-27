import React, {PropTypes, Component} from 'react'
import classNames from 'classnames'

export default class Badge extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'substitute',
      'duration',
      'sponsored',
      'admin-buttons',
      'price',
      'live',
      'tag',
      'partner',
      'verified',
      'staff',
      'count',
      'recording',
      'featured'
    ]).isRequired,
    className: PropTypes.string,
    children: PropTypes.any,
    position: PropTypes.string
  }

  static contextTypes = {
    router: PropTypes.func
  }

  static defaultProps = {
    position: 'btm-end'
  }

  render() {
    let position = this.props.position ? `utils_badge--${this.props.position}` : false
    return <div className={classNames('utils_badge', `utils_badge--${this.props.type}`, position)}>{this.props.children}</div>
  }
}
