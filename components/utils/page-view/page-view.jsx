import React, {Component, PropTypes} from 'react'

import env from 'js/lib/dm/env.es6'
import 'js/lib/dm/stats/googleanalytics.js'

export default class PageView extends Component {
  static propTypes = {
    pageTitle:  React.PropTypes.string.isRequired,
    pageName:  React.PropTypes.string.isRequired,
  }

  componentDidMount() {
    const pageName = `${env.language}:${this.props.pageTitle}:${this.props.pageName}`
    DM_GoogleAnalytics.pageView(pageName, this.props.pageTitle, env.country)
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}
