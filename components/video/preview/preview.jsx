import React, {Component} from 'react'
import moment from 'moment'
import Badge from '../../util/badge/badge'
import Trans from '../../util/trans/trans'
import TextClamp from '../../util/text-clamp/text-clamp'
import TimeAndViews from '../../util/time-and-views/time-and-views'
import {VelocityComponent} from 'velocity-react'

import styles from './_stylesheet.jsx'

export default class Preview extends Component {
  trans = DM_ENV['video/preview']

  state = {
    hovered: false
  }

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
    video: React.PropTypes.object,
    type: React.PropTypes.oneOf(['list', 'grid'])
  }

  static defaultProps = {
    type: 'grid',
    pixelle: false,
    playing: false,
  }

  render() {
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

    const s = styles[this.props.type]

    return (
      <div
        onMouseOver={() => this.setState({ hovered:true })}
        onMouseOut={() => this.setState({ hovered:false })}
        style={s.preview}>
        <div style={{
          height: this.props.imageHeight || s.image.height,
          width: this.props.imageWidth || s.image.width,
          position: 'relative'
        }}>
          <a href={this.props.uri} style={{display: 'block', overflow: 'hidden'}}>
            <VelocityComponent animation={{
              scaleX: this.state.hovered ? 1.1 : 1,
              scaleY: this.state.hovered ? 1.1 : 1
            }} duration={300}>
              <div style={{
                backgroundImage: `url(${this.props.thumbnail_120_url})`,
                backgroundSize: 'cover',
                height: this.props.imageHeight || s.image.height,
                width: this.props.imageWidth || s.image.width,
              }}/>
            </VelocityComponent>
            <div className="play" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}/>
            <Badge position="btm-end" type={type}>{label}</Badge>
            {this.props.playing ? <Badge position="top-start" type="staff"><Trans context={this.trans}>Now playing</Trans></Badge> : null}
          </a>
        </div>
        <div style={s.text}>
          <h4 style={s.title}><a href={this.props.uri} style={{
            textDecoration: this.state.hovered ? 'underline' : 'none'
          }}><TextClamp clamp="2">{this.props.title}</TextClamp></a></h4>
          <TimeAndViews noUploadLabel={true} time={this.props.created_time} views={this.props.views_total}/>
        </div>
        <span style={styles.after}/>
      </div>
    )
  }
}
