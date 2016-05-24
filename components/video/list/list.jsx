import React, {Component, PropTypes} from 'react'
import Grid from '../grid/grid'
import Preview from '../preview/preview'

export default class Playlist extends Grid {
  static defaultProps = {
    sortBy: 'recent',
    limit: 2,
    page: 1,
  }

  renderVideos() {
    return this.state.videos.map((video, index) => {
      return (
        <Preview type="list" key={`Preview.${index}`} {...video}/>
      )
    })
  }

  render() {
    return (
      <div className="video-list">
        <div ref="videoResults">{this.renderVideos()}</div>
      </div>
    )
  }
}
