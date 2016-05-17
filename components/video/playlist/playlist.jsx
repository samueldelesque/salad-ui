import React, {Component, PropTypes} from 'react'
import Grid from '../grid/grid'
import PlaylistPreview from '../playlist-preview/playlist-preview'

export default class Playlist extends Grid {
  static defaultProps = {
    sort: 'recent',
    limit: 5,
    page: 1,
  }

  renderVideos() {
    return this.state.videos.map((video, index) => {
      return (
        <PlaylistPreview key={`PlaylistPreview.${index}`} {...video}/>
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
