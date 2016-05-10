import React, {Component} from 'react'
import ImageResponsive, {Source} from 'react-image-responsive'
import moment from 'moment'
import Badge from '../../util/badge/badge'
import Trans from '../../util/trans/trans'

// import './_preview.scss'

export default class Preview extends Component {
  trans = DM_ENV['video/preview']

  static apiFields = [
    'id',
    'uri',
    'duration',
    'record_status',
    'duration_formatted',
    'title',
    'onair',
    'views_total',
    'created_time',
    'thumbnail_120_url',
    'thumbnail_180_url',
    'thumbnail_240_url',
    'thumbnail_360_url',
    'thumbnail_480_url'
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

  render() {

    let ratio = 16/9
    let image = <ImageResponsive height={120} type="background-image" className="preview" alt={this.props.title} title={this.props.title} src={this.props.thumbnail_120_url} transition={false}>
      <Source src={this.props.thumbnail_120_url} maxWidth={120 * ratio}/>
      <Source src={this.props.thumbnail_180_url} maxWidth={180 * ratio}/>
      <Source src={this.props.thumbnail_240_url} maxWidth={240 * ratio} />
      <Source src={this.props.thumbnail_360_url} maxWidth={360 * ratio}/>
      <Source src={this.props.thumbnail_480_url} maxWidth={480 * ratio}/>
    </ImageResponsive>

    if (this.props.pixelle) {
      image = <img src={this.props.thumbnail_120_url} className="preview" alt={this.props.title} title={this.props.title}/>
    }

    let type = 'duration'
    let label = this.props.duration_formatted
    let isRecording = this.props.record_status && this.props.record_status !== 'stopped'

    if (this.props.onair) {
      type = 'live'
      label = (<Trans context={this.trans}>LIVE</Trans>)
    } else if (isRecording) {
      type = 'recording'
      let duration = moment.duration({seconds: moment.utc().unix() - this.props.created_time}),
          s = duration.seconds(),
          m = duration.minutes(),
          h = duration.hours()

      label = `${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`
      if (duration.hours()) {
        label = `${h > 9 ? h : '0' + h}:${label}`
      }
    }

    return (
      <div style={{position: 'relative'}}>
        <a href={this.props.uri} style={{display: 'block'}}>
          {image}
          <div className="play"></div>
          <Badge position="btm-end" type={type}>{label}</Badge>
          {this.props.playing ? <Badge position="top-start" type="staff"><Trans context={this.trans}>Now playing</Trans></Badge> : null}
        </a>
      </div>
    )
  }
}
