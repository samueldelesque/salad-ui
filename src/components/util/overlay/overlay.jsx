import React, {PropTypes, Component} from 'react'
import {VelocityComponent} from 'velocity-react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'
import glob from '../../../lib/glob'

export default class Overlay extends Component {
  state = {
    responsive: false
  }

  componentDidMount(){
    document.addEventListener("keydown", this.onClose.bind(this), false);
    if(window.innerWidth < 600){
      this.setState({responsive:true})
    }
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
      let childStyles = Object.assign({}, styles[child.type], child.props.style)
      return <div style={childStyles}>
        {child.props.children}
      </div>
    })

    let className = `transition transition-xsm zoomIn${this.props.show? ' active': '' }`
    let overlayStyles = Object.assign(
      {},
      styles.wrapper,
      this.state.responsive ? styles.wrapperResponsive : null,
      this.props.show ? null : { opacity: 0, transform: 'scale(0.7)', visibility: 'hidden' }
    )

    return (
      <div style={overlayStyles} className={className}>
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
