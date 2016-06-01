import React, {PropTypes, Component} from 'react'
import Icon from '../../icon/icon'
import {defaults} from '../../../lib/stylesheet/stylesheet'

const styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: 'white',
  padding: '0 0.3rem',
  lineHeight: '1.2rem',
  height: 'auto',
  fontSize: '12px',
  whiteSpace: 'nowrap',
  zIndex: '2',
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
        styles.backgroundColor = 'rgba(0,0,0,0.6)'
        break

      case 'recording':
        // let preprend = <div style={{
        //       marginTop: '10px',
        //       float: 'left',
        //       marginRight: '10px',
        //       width: '10px',
        //       height: '10px',
        //       borderRadius: '50%',
        //       backgroundColor: defaults.colors.red,
        //       verticalAlign: 'middle',
        //       animation: 'pulse 1s infinite alternate',
        //     }}/>
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
        styles.width = 16
        styles.height = 16
        styles.transform = 'rotate(-45deg)'
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
    let badgeStyles = Object.assign({}, styles, this.props.styles, this.colorizeBadge(this.props.type), this.positionBadge(this.props.position))
    return (
      <span style={badgeStyles}>
        {
          this.props.type === 'verified' ?
          <Icon type="check" fill="white" height={10} width={10} style={{transform: 'rotate(45deg)', position: 'relative', left: -1, top: 1}}/>:
          this.props.children
        }
      </span>
    )
  }
}
