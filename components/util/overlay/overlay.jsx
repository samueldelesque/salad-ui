import React, {PropTypes, Component} from 'react'
import {VelocityComponent} from 'velocity-react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'
import glob from '../../../lib/glob'

if(glob.canUseDom()){
  require('../../../lib/stylesheet/transitions.scss')
}

export default class Overlay extends Component {

  componentDidMount(){
    document.addEventListener("keydown", this.onClose.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onClose.bind(this), false);
  }

  onClose(e){
    if(e.keyCode && e.keyCode != 27)
      return

    this.props.onClose()
  }

  render() {
    let hasTitle = false
    var renderChildren = React.Children.map(this.props.children, (child) => {
      if(child.type === 'overlayHeader') hasTitle = true
      let s = styles[child.type]
      if(child.props.style){
        s = Object.assign({}, s, child.props.style)
      }
      return <div style={s}>
        {child.props.children}
      </div>
    })

    let className = `transition transition-xsm zoomIn${this.props.show? ' active': '' }`
    let s = styles.wrapper
    if(!this.props.show)
      s = Object.assign({}, s, { opacity: 0, transform: 'scale(0.7)', visibility: 'hidden' })

    return (
      <div style={s} className={className}>
        {this.props.closeButton?
          <Icon
            type="close"
            width={12}
            height={12}
            fill={hasTitle?'white':'black'}
            style={{float:'right', cursor:'pointer', margin: '20px 20px 0 10px'}}
            onClick={e=>this.onClose(e)} />
          : null
        }

        {renderChildren}
      </div>
    )
  }
}
