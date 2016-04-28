import React from 'react'
import Trans from '../trans/trans'

export default class TimeAndViews extends React.Component {
  trans = DM_ENV['utils/time-and-views']

  defaultProps = {
    views: null,
    uploaded: null
  }

  timesince(val){
    let [date, now] = [new Date(val * 1000), new Date()]
    var diff = (now - date) / 36e5

    if(!val || typeof(val) !== 'number')
      return null
    else if(diff > 17520)
      return <Trans context={this.trans} years={Math.round(diff/8760)} isPlural={Math.round(diff/8760)!==1}>%(years)s years ago</Trans>
    else if(diff > 8760)
      return this.trans['last year']
    else if(diff > 1440)
      return <Trans context={this.trans} month={this.trans.months[date.getMonth()]}>last %(month)s</Trans>
    else if(diff > 720)
      return this.trans['last month']
    else if(diff > 336)
      return <Trans context={this.trans} weeks={Math.round(diff/168)} isPlural={Math.round(diff/168)!==1}>%(weeks)s weeks ago</Trans>
    else if(diff > 168)
      return this.trans['a week ago']
    else if(diff > 48)
      return <Trans context={this.trans} day={this.trans.days[date.getDay()]}>last %(day)s</Trans>
    else if(diff > 24)
      return this.trans['yesterday']
    else if(diff > 1)
      return <Trans context={this.trans} hours={Math.round(diff)} isPlural={diff!==1}>%(hours)s hours ago</Trans>
    return <Trans>a few minutes ago</Trans>
  }

  number(val){
    if(val > 1000000)return Math.round(val/1000000) + 'M'
    if(val > 1000)return Math.round(val/1000) + 'K'
    return val
  }

  render(){
    let parts = []

    if(this.props.time !== null)
      parts.push(this.timesince(this.props.time))

    if(this.props.views !== null)
      parts.push((<Trans context={this.trans} views={this.number(this.props.views)}>%(views)s views</Trans>))

    return (
      <div style={{fontSize: '0.875rem', color: '#BFBFBF'}}>
        {parts.map((part,i) => <span key={Math.random() + i}>{i>0?' • ':null}{part}</span>)}
      </div>
    )
  }
}
