import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from '../chart/chart'

export default class CirclePie extends Component{
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
    labelFontWeight: PropTypes.string,
    labelFontSize: PropTypes.string,
    fillColor: PropTypes.string,
    startAngle: PropTypes.number,
    endAngle: PropTypes.number,
    radius: PropTypes.number,
    style: PropTypes.object,
  }

  static defaultProps = {
    width: 150,
    height: 150,
    border: 'none',
    strokeWidth: 10,
    style: {},
    labelColor: '#408AE5',
    labelFontSize: '1.2em',
    labelFontWeight: 'bold',
    strokeColor: '#408AE5',
    railColor: '#f5f5f5',
    fillColor: 'none',
    percent: 0,
    padding: 0,
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    if(!x||!y) console.error('x or y missing to describeArc')

    let start = this.polarToCartesian(x, y, radius, endAngle),
        end = this.polarToCartesian(x, y, radius, startAngle),
        arcSweep = endAngle - startAngle <= 180 ? "0" : "1"

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y
    ].join(" ");
  }

  render() {
    const percent = Math.min(this.props.percent || 0, 100)
    const radius = this.props.width / 2 - this.props.strokeWidth / 2 - this.props.padding,
        center = radius + this.props.strokeWidth / 2 + this.props.padding,
        startAngle = 0,
        endAngle = 3.6 * percent,
        label = `${percent}%`,
        labelLeftOffset = label.length === 3 ? -0.6 : -0.95,
        arc = this.describeArc(center, center, radius, startAngle, endAngle - .001)


    return (
      <Chart width={this.props.width} style={this.props.style} height={this.props.height} border={this.props.border}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={this.props.fillColor}
          stroke={this.props.railColor}
          strokeWidth={this.props.strokeWidth}/>
        <path
          fill={this.props.fillColor}
          stroke={this.props.strokeColor}
          strokeWidth={this.props.strokeWidth}
          d={arc}/>
        <text
          x={center}
          y={center}
          dx={`${labelLeftOffset}em`}
          dy=".35em"
          fill={this.props.labelColor}
          fontWeight={this.props.labelFontWeight}
          fontSize={this.props.labelFontSize}>
          {label}
        </text>
      </Chart>
    )
  }
}
