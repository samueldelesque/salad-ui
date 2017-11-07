import React from 'react'
import PropTypes from 'prop-types'
import {formatNumber} from '../../../lib/format'

export default class Bar extends React.Component{
  static defaultProps = {
    metricName: 'points',
    value: '0',
    percent: 100,
    metricPadding: 15,
    metricColor: '#777',
    barHeight: 7,
    barRailColor: '#ddd',
    barColor: '#408AE5',
    label: 'N/A'
  }

  static propTypes = {
    metricName: PropTypes.string,
    percent: PropTypes.number,
    barWidth: PropTypes.number,
    barHeight: PropTypes.number,
    metricPadding: PropTypes.number,
    label: PropTypes.string,
    metricColor: PropTypes.string,
    barColor: PropTypes.string,
    barRailColor: PropTypes.string,
  }

  formatValue(value){
     return this.props.metricName === '%' ? Math.round(value) : formatNumber(value)
  }

  render(){
    return (
      <div style={{
        position: 'relative',
        marginBottom: 15,
      }}>
        <div style={{fontSize: 13, textTransform: 'uppercase'}}>{this.props.label}</div>
        <div className="bar-row">
          <div style={{
              backgroundColor: this.props.barRailColor,
              width: '100%',
              height: this.props.barHeight,
              display: 'block',
              marginTop: 4,
              position: 'relative'}}>
            <div style={{
                width: this.props.percent + '%',
                height: this.props.barHeight,
                position: 'absolute',
                backgroundColor: this.props.barColor,
                top: 0,
                left: 0,
                bottom: 0,
                transition: 'all .5s'}}></div>
          </div>
          <div style={{
              paddingLeft: this.props.metricPadding,
              fontSize: 13,
              display: 'inline-block',
              position: 'absolute',
              right: 0,
              top: 0,
              fontWeight: 'bold',
              color: this.props.metricColor,
              textAlign: 'right'}}>
              {`${this.formatValue(this.props.value)} ${this.props.metricName}`}
          </div>
        </div>
      </div>
    )
  }
}
