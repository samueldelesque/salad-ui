import React, {Component, PropTypes} from 'react'

// import './tag-list.scss'

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

  removeItem(item) {
    if(this.props.handleRemoveItem) {
      this.props.handleRemoveItem(item)
    }
  }

  renderItems() {
    let lis = this.props.items.map((item, index) => {
      return <li
                key = {'tags.' + index}
                onClick={this.removeItem.bind(this, item)}
                className={this.props.itemClassname}>
              <span>{item}</span><span className="close-icon"></span>
             </li>
    })

    return <ul>
      {lis}
    </ul>
  }

  render() {
    let className = `collection-wrapper ${this.props.classname}`;

    return (
      <div className={className}>
        {this.renderItems(this.props.items)}
      </div>
    )
  }
}
