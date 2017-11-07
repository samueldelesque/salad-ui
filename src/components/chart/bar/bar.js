import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from '../../../lib/format'

export default class Bar extends Component{
  static defaultProps = {
    data: [],
    metricName: 'points',
    metricColor: '#777',
    barSize: 20,
    barRailColor: null,
    barColor: '#408AE5',
    gridColor: 'rgba(230,230,230,.5)',
    label: 'N/A',
    width: 400,
    height: 200,
    bottomBarHeight: 20,
    yLabelsOutside: true,
    labelFontSize: 12,
    labelTextShadow: '1px 1px #fff',
    labelColor: '#555',
    isPercent: false,
    labelTemplate: '{{value}}', // or function(value, date){ return value + "$ on " + date}
  }

  static propTypes = {
    metricName: PropTypes.string,
    barSize: PropTypes.number,
    label: PropTypes.string,
    metricColor: PropTypes.string,
    barColor: PropTypes.string,
    barRailColor: PropTypes.string,
  }

  formatValue(value){
     return this.props.metricName === '%' ? Math.round(value) : formatNumber(value)
  }

  renderYGridLine(label, index){
    return (
      <line
        key={`graph.ygridLine.${index}`}
        x1={0}
        y1={label.y}
        x2={this.props.width}
        y2={label.y}
        style={{stroke: this.props.gridColor, strokeWidth: 1}}
      />
    )
  }

  describeYAxis(yMin, ySpread, yScale){
    function ruler(value, m){
      if(!m) m = 100
      if(value > m) ruler(value, m * 5)
      return Math.ceil(value / m) * m / 10
    }

    let rule = ruler(ySpread, ySpread / 10),
        lines = [1,2,3,4,5,6,7,8,9],
        labels = [0,1,2,3,4],
        isZero = ySpread === 0 && yMin === 0

    return {
      gridLines: lines.map(k => {return {y: isZero ? yScale : (ySpread - k * rule) * yScale}}),
      labels: labels.map(k => {
        var v = k * rule * 2;
        return {
          y: isZero ? yScale : (ySpread - k * rule * 2) * yScale,
          txt: formatNumber(Math.round(v + yMin)) + (this.props.isPercent ? '%' : '')
        }
      })
    }
  }

  renderTip(index, text, xBase, yBase){
    const triangleWidth = 25
    const triangleHeight = 10

    const trianglePath = [
      (xBase - triangleWidth / 2) + ',' + yBase - 10,
      (xBase + triangleWidth / 2) + ',' + yBase - 10,
      xBase + ',' + (yBase + triangleHeight) - 10,
    ].join(' ')
    const triangleBorderPath = [
      (xBase - triangleWidth / 2) + ',' + yBase - 10,
      (xBase + triangleWidth / 2) + ',' + yBase - 10,
      xBase  + ',' + (yBase + triangleHeight ) - 10,
    ].join(' ')

    const boxWidth = 28
    const boxHeight = 15

    return (
      <g key={`point.${index}`} ref={`point.${index}`}>
        <text
          x={xBase - boxWidth / 2}
          y={yBase - boxHeight / 2}
          style={{fontSize: 16, fontWeight: 'bold'}}
        >
          {text}
        </text>
      </g>
    )
  }

  renderLabel(label, index){
    if(!label.x){
      if(this.props.yLabelsPosition === 'right')
        label.x = this.activeWidth + (this.props.yLabelsOutside ? 5 : -1 * (20 + (5 * (label.txt.length || 1))))
      else
        label.x = 0
    }
    if(!label.ref) label.ref = `label.${index},${label.x},${label.y}`
    return (
      <text
        key={`graph.yAxis.label.${label.ref}`}
        x={label.x}
        y={label.y}
        ref={label.ref}
        fill={this.props.labelColor}
        style={{fontSize: this.props.labelFontSize, textShadow: this.props.labelTextShadow, textAlign: 'center'}}
      >
        {label.txt}
      </text>
    )
  }

  render(){
    const height = this.props.height - this.props.bottomBarHeight
    const yMin = 0
    const yMax = Math.max(...this.props.data.map(point => point.value)) * 1.1
    const ySpread = (yMax - yMin)
    const yScale = height / (ySpread || 1)
    const yAxis = this.describeYAxis(yMin, ySpread, yScale)

    const barSpacing = this.props.width / this.props.data.length
    const barSize = this.props.barSize === -1 ? barSpacing : this.props.barSize

    if(!this.props.data || !this.props.data.length) return null

    return (
      <svg width={this.props.width} height={this.props.height}>
        {yAxis.gridLines.map(::this.renderYGridLine)}
        {
          this.props.data.map((item,i)=>(
            <g key={`bar.item.${i}`}>
              <rect
                fill={this.props.barColor}
                width={barSize}
                height={item.value * yScale}
                y={height - (item.value * yScale)}
                x={i * barSpacing - barSize / 2 + barSpacing / 2 - barSize / 2}
              />
              {this.renderTip(i, item.value + (this.props.isPercent?'%':''), i * barSpacing - barSize / 2 + barSpacing / 2, height - (item.value * yScale))}
            </g>
          ))
        }
        {yAxis.labels.map(::this.renderLabel)}
        {this.props.data.map((item,i)=>(
          <text
            key={`graph.xAxis.label.${i}`}
            x={i * barSpacing - barSize / 2 + barSpacing / 2 - 5}
            y={height + this.props.bottomBarHeight}
            fill={this.props.labelColor}
            style={{fontSize: this.props.labelFontSize, textShadow: this.props.labelTextShadow}}
          >
            {item.label}
          </text>
        ))}
      </svg>
    )
  }
}
