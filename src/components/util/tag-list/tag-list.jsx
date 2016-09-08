import React, {Component, PropTypes} from 'react'
import Icon from '../../icon/icon'
import styles from './_stylesheet'
import InputText from '../../form/input-text/input-text'

export default class Collection extends Component {
  static defaultProps = {
    items: [],
    placeholder: 'Add a tag...',
  }

  state = {
    addTag: ''
  }

  removeItem(i) {
    if(this.props.handleRemoveItem) {
      this.props.handleRemoveItem(i)
    }
  }

  addItem(text){
    if(this.props.handleAddItem){
      this.props.handleAddItem(text)
    }
    this.setState({addTag:''})
  }

  render() {
    return (
      <div style={styles.tagBox}>
        {
          this.props.items.map((item, index) => (
            <span style={styles.tag} key={`tags.${index}`}>
              <span style={{paddingRight: '10px'}}>{item}</span>
              <Icon width={10} height={10} type="close" onClick={() => this.removeItem(item)} />
            </span>
          ))
        }
        <div style={{display: 'inline-block', width: 200}}>
          <form autoComplete="off" action="#" onSubmit={(e)=>{e.preventDefault();this.addItem(this.state.addTag)}}>
            <InputText
              placeholder={this.props.placeholder}
              autoComplete="off"
              onChange={addTag=>this.setState({addTag})}
              value={this.state.addTag}
              style={{border: 'none'}}
            />
          </form>
        </div>
      </div>
    )
  }
}
