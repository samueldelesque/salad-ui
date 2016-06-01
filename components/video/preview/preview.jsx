import React, {Component} from 'react'
import moment from 'moment'
import Badge from '../../util/badge/badge'
import Trans from '../../util/trans/trans'
import TextClamp from '../../util/text-clamp/text-clamp'
import TimeAndViews from '../../util/time-and-views/time-and-views'
import {VelocityComponent} from 'velocity-react'

import styles from './_stylesheet.jsx'

export const mediaTypes = {
  video: {
    fields: [
      'id',
      'uri',
      'duration',
      'record_status',
      'duration_formatted',
      'title',
      'onair',
      'views_total',
      'created_time',
      'thumbnail_240_url',
    ]
  },
  playlist: {
    fields: [
      'id',
      'uri',
      'name',
      'description',
      'videos_total',
      'owner.username',
      'owner.screenname',
      'thumbnail_240_url',
    ]
  }
}

export default class Preview extends Component {
  trans = DM_ENV['video/preview']

  state = {
    hovered: false
  }

  static propTypes = {
    type: React.PropTypes.oneOf(['list', 'grid']),
    mediaType: React.PropTypes.oneOf(['video', 'playlist']),
  }

  static defaultProps = {
    type: 'grid',
    pixelle: false,
    playing: false,
    mediaType: 'video'
  }

  render() {
    let type = 'duration',
        label = '',
        previewStyles = styles[this.props.type]

    if(this.props.mediaType === 'video'){
      label = this.props.duration_formatted
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
    }
    else if(this.props.mediaType === 'playlist'){
      label = <span>{this.props.videos_total + ' '}<Trans context={this.trans}>videos</Trans></span>
    }

    return (
      <div
        onMouseOver={() => this.setState({ hovered:true })}
        onMouseOut={() => this.setState({ hovered:false })}
        style={previewStyles.preview}>
        <div style={{
          height: this.props.imageHeight || previewStyles.image.height,
          width: this.props.imageWidth || previewStyles.image.width,
          position: 'relative',
          display: 'inline-block', //non flex fallback
        }}>
          <a href={this.props.uri} style={{display: 'block', overflow: 'hidden'}}>
            <VelocityComponent animation={{
              scaleX: this.state.hovered ? 1.1 : 1,
              scaleY: this.state.hovered ? 1.1 : 1
            }} duration={300}>
              <div style={{
                backgroundImage: `url(${this.props.thumbnail_240_url})`,
                backgroundSize: 'cover',
                height: this.props.imageHeight || previewStyles.image.height,
                width: this.props.imageWidth || previewStyles.image.width,
              }}/>
            </VelocityComponent>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}/>
            {<Badge position="btm-end" type={type}>{label}</Badge>}
            {this.props.playing ? <Badge position="top-start" type="staff"><Trans context={this.trans}>Now playing</Trans></Badge> : null}
          </a>
        </div>
        <div style={previewStyles.text}>
          <h4 style={previewStyles.title}>
            <a href={this.props.uri} style={{
              textDecoration: this.state.hovered ? 'underline' : 'none',
              color: styles.link.color
            }}>
              <TextClamp clamp="2">
                {
                  this.props.mediaType === 'video' ?
                  this.props.title:
                  this.props.name
                }
              </TextClamp>
            </a>
          </h4>
        {
          this.props.mediaType === 'video' ?
          <TimeAndViews noUploadLabel={true} time={this.props.created_time} views={this.props.views_total}/>:
          null
        }
        </div>
        <span style={styles.after}/>
      </div>
    )
  }
}
