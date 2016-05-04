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
    return (
      <div style={styles.alertBox}>
        <div style={styles.alertIcon}>
          <Icon type={this.props.type} style={{alignSelf:'center'}} fill='#FF003C' />
        </div>
        <div style={{float:'left'}}>
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
              <Icon width='14' height='14' type="close" fill='#FF003C' onClick={::this.props.onClose} style={{alignSelf:'center'}} />
            </div>
          : null
        }
      </div>
    )
  }
}
