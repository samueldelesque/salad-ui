import React, {PropTypes, Component} from 'react'
import {VelocityComponent} from 'velocity-react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'

export default class Overlay extends Component {

  componentWillMount(){
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

    let animationProps = {
      opacity: (this.props.show? 1 : 0),
      scaleX: (this.props.show? 1 : 0),
      scaleY: (this.props.show? 1 : 0),
    }

    return (
      <VelocityComponent animation={animationProps} duration={200}>
        <div style={styles.wrapper}>
          {this.props.closeButton?
            <Icon
              type="close"
              width="12"
              height="12"
              fill={hasTitle?'white':'black'}
              style={{float:'right', cursor:'pointer', margin: '20px 20px 0 10px'}}
              onClick={e=>this.onClose(e)} />
            : null
          }

          {renderChildren}
        </div>
      </VelocityComponent>
    )
  }
}
