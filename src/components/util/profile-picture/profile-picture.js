import React from 'react'
import {defaults} from '../../../lib/stylesheet/stylesheet'

export default class ProfilePicture extends React.Component{
  static defaultProps = {
    size: 50
  }
  static propTypes = {
    src: React.PropTypes.string,
    size: React.PropTypes.number,
  }
  render(){
    const styles = {
      display: 'inline-block',
      width: this.props.size,
      height: this.props.size,
      borderRadius: this.props.size / 2,
      backgroundColor: defaults.colors.dmBrand
    }
    if(this.props.src)
      return <img src={this.props.src} style={styles}/>

    return <span style={styles}/>
  }
}
