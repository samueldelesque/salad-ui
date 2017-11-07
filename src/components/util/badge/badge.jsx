import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { defaults } from '../../../lib/stylesheet/stylesheet'

const styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: 'white',
  padding: '3px',
  lineHeight: '1.2rem',
  height: 'auto',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  zIndex: '2',
  position: 'relative',
  verticalAlign: 'middle',
  letterSpacing: '0.6px',
}

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
      'private',
      'featured'
    ]).isRequired,
    className: PropTypes.string,
    children: PropTypes.any,
    position: PropTypes.string
  }

  static defaultProps = {
    position: 'btm-end'
  }

  positionBadge(position){
    let styles = {}
    if(this.props.position === 'inline'){
      styles.display = 'inline-block'
      styles.marginLeft = 5
      styles.marginRight = 5
      return styles
    }
    styles.position = 'absolute'
    styles.zIndex = '2'

    switch(this.props.position){
      case 'top-start':
        styles.top = 5
        styles.left = 5
        break
      case 'top-end':
        styles.top = 5
        styles.right = 5
        break
      case 'btm-start':
        styles.bottom = 5
        styles.left = 5
        break
      case 'btm-end':
        styles.bottom = 5
        styles.right = 5
        break
    }
    return styles
  }

  colorizeBadge(type){
    let styles = {}
    switch(type){
      case 'duration':
      case 'private':
      case 'admin-buttons':
      case 'recording':
      case 'private':
        styles.backgroundColor = 'rgba(0,0,0,0.6)'
        break

      case 'live':
      case 'count':
        styles.letterSpacing = '1px'
        styles.backgroundColor = defaults.colors.red
        break

      case 'sponsored':
        styles.color = '#FFF'
        styles.backgroundColor = '#E09021'
        break

      case 'partner':
        styles.backgroundColor = defaults.colors.green
        styles.color = '#FFF'
        break

      case 'featured':
        styles.backgroundColor = defaults.colors.dmBrand
        styles.color = '#FFF'
        break

      case 'verified':
        styles.backgroundColor = defaults.colors.dmBrand
        styles.color = '#FFF'
        break

      case 'staff':
        styles.backgroundColor = defaults.colors.dmBrand
        styles.color = '#FFF'
        break

      case 'substitute':
        styles.backgroundColor = defaults.colors.purple
        break

      case 'price':
        styles.color = 'black'
        styles.backgroundColor = defaults.colors.yellow
        break

      case 'tag':
        styles.backgroundColor = defaults.colors.neutral5
        styles.textTransform = 'uppercase'
        styles.color = defaults.colors.neutral1
        break
    }
    return styles
  }

  render() {
    const badgeStyles = Object.assign({}, styles, this.props.styles, this.colorizeBadge(this.props.type), this.positionBadge(this.props.position));

    return (
      <span style={badgeStyles}>
        { this.props.children }
      </span>
    )
  }
}
