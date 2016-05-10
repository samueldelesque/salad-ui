import React from 'react'
import ImageResponsive, {Source} from 'react-image-responsive'
import Badge from '../../util/badge/badge.jsx'
import TextClamp from '../../util/text-clamp/text-clamp.jsx'
import TimeAndViews from '../../util/time-and-views/time-and-views'
import Trans from '../../util/trans/trans.jsx'

export default class PlaylistPreview extends React.Component {
  trans = DM_ENV['video/preview-vertical']

  static apiFields = [
    'id',
    'uri',
    'thumbnail_120_url',
    'thumbnail_240_url',
    'thumbnail_360_url',
    'thumbnail_720_url',
    'duration',
    'duration_formatted',
    'title',
    'onair',
    'views_total',
    'created_time'
  ]

  static propTypes = {
    className: React.PropTypes.string,
    video: React.PropTypes.object
  }

  static defaultProps = {
    className: '',
    pixelle: false,
    playing: false
  }

  numberFormat(val){
    if(val > 1000000)return Math.round(val/1000000) + 'M'
    if(val > 1000)return Math.round(val/1000) + 'K'
    return val + ''
  }

  timeFormat(val){
    let date = new Date(val * 1000)
    let now = new Date()
    var diff = (now - date) / 36e5
    if(diff > 8760)
      diff = Math.round(diff/8760) + 'y'
    else if(diff > 720)
      diff = Math.round(diff/720) + 'm'
    else if(diff > 24)
      diff = Math.round(diff/24) + 'd'
    else
      diff = Math.round(diff) + 'h'
    return diff + ' ago'
  }

  render() {
    let image = (<ImageResponsive type="background-image" className="preview" alt={this.props.title} title={this.props.title} src={this.props.thumbnail_120_url} transition={false}>
      <Source maxWidth={300} src={this.props.thumbnail_120_url}/>
      <Source maxWidth={500} src={this.props.thumbnail_240_url}/>
    </ImageResponsive>)

    if (this.props.pixelle) {
      image = <img src={this.props.thumbnail_120_url} className="preview" alt={this.props.title} title={this.props.title}/>
    }

    let badgeBottomStart = this.props.onair
      ? <Badge position="btm-end" type="live"><Trans context={this.trans}>LIVE</Trans></Badge>
      : <Badge position="btm-end" type="duration">{this.props.duration_formatted}</Badge>

    return (
      <div className={`video_preview--vertical ${this.props.className}`}>
        <a className="preview_link link" href={this.props.uri}>
          <div className="thumbnail-area">
            {image}
            <div className="play"></div>
            {badgeBottomStart}
            {this.props.playing ? <Badge position="top-start" type="staff"><Trans context={this.trans}>Now playing</Trans></Badge> : null}
          </div>
          <div className="meta-info-area">
            <h3 className="link"><TextClamp clamp={2}>{this.props.title}</TextClamp></h3>
            <TimeAndViews noUploadLabel={true} time={this.props.created_time} views={this.props.views_total}/>
          </div>
        </a>
      </div>
    )
  }
}
