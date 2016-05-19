import React, {Component, PropTypes} from 'react'
import Grid from '../grid/grid'
import ListPreview from '../list-preview/list-preview'

export default class Playlist extends Grid {
  static defaultProps = {
    sort: 'recent',
    limit: 5,
    page: 1,
  }

  renderVideos() {
    return this.state.videos.map((video, index) => {
      return (
        <ListPreview key={`ListPreview.${index}`} {...video}/>
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
