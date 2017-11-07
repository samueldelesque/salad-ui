import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon/icon'

import styles from './_stylesheet'

export default class Alert extends Component {

  static defaultProps = {
    title: false,
    type: 'info',
    onClose: false,
    style: null
  }

  render() {
    styles.alertBox.backgroundColor = styles.colorMap[this.props.type]
    return (
      <div style={Object.assign({}, styles.alertBox, this.props.styles)}>
        <div style={styles.alertIcon}>
          <Icon width={18} height={18} type={this.props.type} style={{alignSelf:'center'}} />
        </div>
        <div style={{marginRight: 5}}>
          {
            this.props.title
            ? <p style={styles.title}>{this.props.title}</p>
            : null
          }
          {this.props.children}
        </div>
        {
          this.props.onClose
          ? <div style={styles.closeBtn}>
              <Icon width={10} height={10} type="close" onClick={::this.props.onClose} style={{alignSelf:'center'}} />
            </div>
          : null
        }
      </div>
    )
  }
}
