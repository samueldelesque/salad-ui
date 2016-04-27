import React, {Component, PropTypes} from 'react'

export default class ButtonMore extends Component {
  trans = DM_ENV['utils/load-more']

  defaultProps = {
    active: false,
    loading: false
  }

  handleClick(){
    this.props.onClick(this)
  }

  render() {
    let cssClasses = `btn ${this.props.active?' is-active':''}${this.props.loading?' loading-more':''}`
    return (
      <div className={cssClasses} style={{width: '100%'}} onClick={::this.handleClick}>{this.props.loading?this.trans.loading:this.trans.more}</div>
    )
  }
}
