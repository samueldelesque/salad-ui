import React, {Component, PropTypes} from 'react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'

export default class Collection extends Component {

  propTypes: {
    classname: React.PropTypes.string,
    itemClassname: React.PropTypes.string,
    items: React.PropTypes.array,
  }

  static defaultProps = {
    classname: '',
    itemClassname: 'pill',
    items: [],
  }

  removeItem(i) {
    if(this.props.handleRemoveItem) {
      this.props.handleRemoveItem(i)
    }
  }

  renderItems() {
    let lis = this.props.items.map((item, index) => {
      return <li style={styles.pill} key = {'tags.' + index}>
                <span style={{paddingRight: '10px'}}>{item}</span>
                <Icon width={10} height={10} type="close" onClick={() => this.removeItem(item)} />
             </li>
    })

    return <ul>
      {lis}
    </ul>
  }

  render() {
    return (
      <div style={styles.tagBox}>
        {this.renderItems(this.props.items)}
      </div>
    )
  }
}
