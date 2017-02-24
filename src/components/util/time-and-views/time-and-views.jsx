import React from 'react'
import Trans, {DEBUG} from '../trans/trans'

export default class TimeAndViews extends React.Component {
  trans = DM_ENV['utils/time-and-views']

  defaultProps = {
    views: null,
    time: null
  }

  timesince(val){
    let [date, now] = [
      typeof(val) === 'number' ? new Date(val * 1000) : typeof(val) === 'object' ? val : new Date(),
      new Date()
    ]
    var diff = (now - date) / 36e5

    if(diff > 17520)
      return <Trans context={this.trans} years={Math.round(diff/8760)} n={Math.round(diff/8760)}>{'{years} years ago'}</Trans>
    else if(diff > 8760)
      return <Trans context={this.trans}>last year</Trans>
    else if(diff > 1440){
      let monthName = ""
      try{
        monthName = this.trans.months[date.getMonth()]
      }
      catch(e){
        if(DEBUG) console.warn('Months['+date.getMonth()+'] is not translated')
        return <Trans context={this.trans}>A few months ago</Trans>
      }
      return <Trans context={this.trans} month={monthName}>{'last {month}'}</Trans>
    }
    else if(diff > 720)
      return <Trans context={this.trans}>last month</Trans>
    else if(diff > 336)
      return <Trans context={this.trans} weeks={Math.round(diff/168)} n={Math.round(diff/168)}>{'{weeks} weeks ago'}</Trans>
    else if(diff > 168)
      return <Trans context={this.trans}>a week ago</Trans>
    else if(diff > 48){
      let dayName = ""
      try{
        dayName = this.trans.days[date.getDay()]
      }
      catch(e){
        console.warn('Trans error: ', e)
        return <Trans context={this.trans}>A few days ago</Trans>
      }
      return <Trans context={this.trans} day={this.trans.days[date.getDay()]}>{'last {day}'}</Trans>
    }
    else if(diff > 24)
      return <Trans context={this.trans}>yesterday</Trans>
    else if(diff > 1)
      return <Trans context={this.trans} hours={Math.round(diff)} n={Math.round(diff)}>{'{hours} hours ago'}</Trans>
    return <Trans context={this.trans}>a few minutes ago</Trans>
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
      parts.push((<Trans context={this.trans} views={this.number(this.props.views)} n={this.props.views}>{'{views} views'}</Trans>))

    return (
      <div style={{fontSize: '13px', color: '#BFBFBF'}}>
        {parts.map((part,i) => <span key={Math.random() + i}>{i>0?' • ':null}{part}</span>)}
      </div>
    )
  }
}
