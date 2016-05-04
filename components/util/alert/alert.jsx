import React, {PropTypes, Component} from 'react'
import Icon from '../../icon/icon'

import styles from './_stylesheet'

export default class Alert extends Component {

  static defaultProps = {
    title: false,
    type: 'info',
    onClose: false
  }

  render() {
    styles.alertBox.backgroundColor = styles.colorMap[this.props.type].bgColor
    return (
      <div style={styles.alertBox}>
        <div style={styles.alertIcon}>
          <Icon type={this.props.type} style={{alignSelf:'center'}} fill={styles.colorMap[this.props.type].iconColor} />
        </div>
        <div style={{marginRight: '5px'}}>
          {
            this.props.title
            ? <h2 style={styles.title}>{this.props.title}</h2>
            : null
          }
          {this.props.children}
        </div>
        {
          this.props.onClose
          ? <div style={styles.closeBtn}>
              <Icon width='14' height='14' type="close" fill={styles.closeIcon} onClick={::this.props.onClose} />
            </div>
          : null
        }
      </div>
    )
  }
}
