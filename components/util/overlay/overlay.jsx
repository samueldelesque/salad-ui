import React, {PropTypes, Component} from 'react'
import {VelocityComponent} from 'velocity-react'
import styles from './_stylesheet'

export default class Overlay extends Component {

  componentWillMount(){
    document.addEventListener("keydown", this.onClose.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onClose.bind(this), false);
  }

  onClose(e){
    if(e.keyCode === 27)
      this.props.onClose()
  }

  render() {
    var renderChildren = React.Children.map(this.props.children, (child) => {
      if(child.type === 'overlayFooter')
        return <div style={styles.action}>
          {child}
        </div>

      else
        return <div style={styles.content}>
          {child}
        </div>
    })

    let animationProps = {
      opacity: (this.props.show? 1 : 0),
      scaleX: (this.props.show? 1 : 0),
      scaleY: (this.props.show? 1 : 0),
    }

    return (
      <div>
        <VelocityComponent animation={animationProps} duration={200}>
          <div style={styles.wrapper}>
            {this.props.header?
              <div style={styles.heading}>
                {this.props.header}
              </div>
              : null
            }
            {renderChildren}
          </div>
        </VelocityComponent>
      </div>
    )
  }
}
