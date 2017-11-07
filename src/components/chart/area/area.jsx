import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { formatNumber } from '../../../lib/format'
import Chart from '../chart/chart'

/*
 *   - x axis is always time.
 *   - data is given as [{time: TIMESTAMP, value: VALUE, label: LABEL}]
 *   - TIMESTAMP is in UNIX_MS
 *   - @TODO:
          • multiple lines as [[{time: TIMESTAMP, value: VALUE}, ...], [{time: TIMESTAMP, value: VALUE}, ...] ...])
 *
 *
 */

export default class Area extends Component{
  tipsData = {}
  xAxisLabels = []

  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    border: PropTypes.string,
    strokeWidth: PropTypes.number,
    useDynamicYMin: PropTypes.bool,
    strokeColor: PropTypes.string,
    strokeDasharray: PropTypes.number,
    pointsRadius: PropTypes.number,
    showFirstAndLastTip: PropTypes.bool,
    tipsWidth: PropTypes.number,
    tipsHeight: PropTypes.number,
    tipsPadding: PropTypes.number,
    tipStrokeWidth: PropTypes.number,
    tipStrokeColor: PropTypes.string,
    tipsFill: PropTypes.string,
    gridColor: PropTypes.string,
    labelFontSize: PropTypes.number,
    labelTextShadow: PropTypes.string,
    labelColor: PropTypes.string,
    fillColor: PropTypes.string,
    maxOverflow: PropTypes.number,
    maxPoints: PropTypes.number,
    yLabelsOutside: PropTypes.bool,
    yLabelsPosition: PropTypes.string,
    formula: PropTypes.string,
    yPadding: PropTypes.number,
    data: PropTypes.array,
  }

  static defaultProps = {
    width: 640,
    height: 320,
    border: 'none',
    strokeWidth: 2,
    useDynamicYMin: false,
    strokeColor: '#408AE5',
    strokeDasharray: 0,
    pointsRadius: 5,
    showFirstAndLastTip: false,
    tipsWidth: 240,
    tipsHeight: 22,
    tipsPadding: 10,
    tipStrokeWidth: 1,
    tipStrokeColor: '#BBBBBB',
    tipsFill: 'white',
    gridColor: 'rgba(230,230,230,.5)',
    labelFontSize: 12,
    labelTextShadow: '1px 1px #fff',
    labelColor: '#555',
    labelTemplate: '{{value}}', // or function(value, date){ return value + "$ on " + date}
    fillColor: 'rgba(191, 216, 246, 0.3)',
    maxOverflow: 20,
    yLabelsOutside: false,
    yLabelsPosition: 'left',
    yPadding: 10,
    maxPoints: -1,
    formula: 'sum',
    data: [],
  }

  describeLine(data, xMin, yMin, xSpread, ySpread, xScale, yScale){
    let isZero = ySpread === 0 && yMin === 0
    return data.map((point, index) => `${Math.max(0,(point.time - xMin) * xScale - this.props.strokeWidth)},${isZero ? yScale : (ySpread - (point.value - yMin)) * yScale}`).join(' ')
  }

  centerElement(el, center, width, setWidth=false){
    if(setWidth) el.setAttribute('width', width)
    let xPos = center - width / 2
    // if(xPos + this.props.maxOverflow < 0) xPos = -this.props.maxOverflow
    // if(xPos + width - this.props.maxOverflow > this.activeWidth) xPos = this.activeWidth - width + this.props.maxOverflow
    el.setAttribute('x', xPos)
  }

  showPointTip(point, event){
    let scope = this.refs[point.ref],
        background = scope.getElementsByClassName('tip-background')[0],
        textDate = scope.getElementsByClassName('tip-text-date')[0],
        textValue = scope.getElementsByClassName('tip-text-value')[0]

    this.centerElement(textDate, this.tipsData[point.ref].xBase, textDate.getBBox().width)
    this.centerElement(textValue, this.tipsData[point.ref].xBase, textValue.getBBox().width)
    this.centerElement(background, this.tipsData[point.ref].xBase, Math.max(textDate.getBBox().width, textValue.getBBox().width) + this.props.tipsPadding * 2, true)
    scope.style.display = 'block'
  }

  hidePointTip(point, event){
    this.refs[point.ref].style.display = 'none'
  }

  renderTipText(template, data){
    if(typeof(template) === 'function'){
      return template(data)
    }
    else if(typeof(template) === 'string'){
      return template
      .replace('{{date}}', moment(data.date).format(data.dateFormat || 'YYYY-MM-DD'))
      .replace('{{date1}}', moment(data.date1).format(data.dateFormat || 'YYYY-MM-DD'))
      .replace('{{date2}}', moment(data.date2).format(data.dateFormat || 'YYYY-MM-DD'))
      .replace('{{value}}', formatNumber(data.value))
    }
    else{
      throw new Error('Invalid labelTemplate type!')
    }
  }

  renderTips(data, xMin, yMin, xSpread, ySpread, xScale, yScale){
    let intervalLength,
        dateFormat,
        tipText = '{{date}}',
        followingTime,
        label = '{{value}} views',
        day = 86400000,
        isZero = ySpread === 0 && yMin === 0

    if(data.length === 0) return
    else if(data.length === 1) intervalLength = 0
    else intervalLength = data[1].time - data[0].time

    // if(data[0].label) label = data[0].label

    if(xSpread > day * 365 * 7) dateFormat = 'YYYY' // > 7 years
    else if(xSpread > day * 30 * 9) dateFormat = 'MMM' // > 9 Months
    else if(xSpread > day * 7) dateFormat = 'MMM Do' // > a week
    else if(xSpread < day) dateFormat = 'LT'

    if(intervalLength > day * 27 && intervalLength < day * 32){ //roughly one month
      dateFormat = 'MMMM'
    }
    else if(intervalLength > day){ //more than 1d
      dateFormat = 'MMM Do'
      tipText = '{{date1}} through {{date2}}'
    }
    else if(xSpread < day){
      dateFormat = 'LT'
    }
    else{
      dateFormat = 'MMM Do'
    }

    return data.map((point, index) => {
      if((index === 0 || index === data.length - 1) && !this.props.showFirstAndLastTip) return
      if(data[index+1]) followingTime = data[index+1].time
      else followingTime = point.time + intervalLength
      if(!point.label) point.label = label

      let xBase = (point.time - xMin) * xScale,
        key = 'point_' + index + '_tooltip',
        pointTimeFormat = dateFormat,
        tipHeight = 38,
        tipOffset = 25,
        yBase = (isZero ? yScale : (ySpread - (point.value - yMin)) * yScale) - this.props.tipsPadding / 2,
        triangleWidth = 25,
        triagleHeight = 10,
        trianglePath = [
          (xBase - this.props.tipStrokeWidth - triangleWidth / 2) + ',' + (yBase - tipOffset + 9),
          (xBase - this.props.tipStrokeWidth + triangleWidth / 2) + ',' + (yBase - tipOffset + 9),
          xBase - this.props.tipStrokeWidth  + ',' + (yBase - tipOffset + triagleHeight + 9),
        ].join(' '),
        triangleBorderPath = [
          (xBase - this.props.tipStrokeWidth - triangleWidth / 2) + ',' + (yBase - tipOffset + 10),
          (xBase - this.props.tipStrokeWidth + triangleWidth / 2) + ',' + (yBase - tipOffset + 10),
          xBase - this.props.tipStrokeWidth  + ',' + (yBase - tipOffset + triagleHeight + 10),
        ].join(' ')

      this.tipsData[key] = {xBase: xBase}

      if((new Date(point.time)).getFullYear() !== (new Date()).getFullYear()){
        pointTimeFormat += ' YYYY'
      }

      return (
        <g key={`point-${index}`} ref={key} style={{display: 'none', position: 'relative', zIndex: 4}} className="value-tip">
          <rect
            className="tip-background"
            x={(point.time - xMin) * xScale - this.props.strokeWidth - this.props.tipsWidth / 2}
            y={yBase - tipHeight - tipOffset}
            width={this.props.tipsWidth + this.props.tipsPadding}
            height={tipHeight + this.props.tipsPadding}
            style={{stroke: this.props.tipStrokeColor, strokeWidth: this.props.tipStrokeWidth, fill: this.props.tipsFill}}
          />
          <polygon
            points={triangleBorderPath}
            style={{stroke: this.props.tipStrokeColor, opacity: 0.5, strokeWidth: this.props.tipStrokeWidth}}
          />
          <polygon
            points={trianglePath}
            style={{fill: this.props.tipsFill}}
          />
          <text
            className="tip-text-date"
            x={xBase - this.props.tipsWidth / 2 + 2}
            y={yBase - this.props.strokeWidth - tipHeight - tipOffset + this.props.tipsPadding + 10}
            style={{fontSize: 14, fontWeight: 'light'}}
            dangerouslySetInnerHTML={{__html: this.renderTipText(tipText, {dateFormat: pointTimeFormat, date: point.time, date1: point.time, date2: followingTime, value: point.value})}}
          />
          <text
            className="tip-text-value"
            x={xBase - this.props.tipsWidth / 2 + 2}
            y={yBase - this.props.strokeWidth - tipHeight - tipOffset + this.props.tipsPadding + 30}
            style={{fontSize: 16, fontWeight: 'bold'}}
            dangerouslySetInnerHTML={{__html: this.renderTipText(this.props.labelTemplate, {value: point.value, date: point.time})}}
          />
        </g>
      )
    })
  }

  renderPoints(data, xMin, yMin, xSpread, ySpread, xScale, yScale){
    let isZero = ySpread === 0 && yMin === 0
    return data.map((point, index) =>{
      if((index === 0 || index === data.length - 1) && !this.props.showFirstAndLastTip) return
      return <circle
        key={`point-${index}`}
        cx={(point.time - xMin) * xScale - this.props.strokeWidth / 2}
        cy={isZero ? yScale : (ySpread - (point.value - yMin)) * yScale}
        r={this.props.pointsRadius}
        onMouseOver={this.showPointTip.bind(this, {ref: `point_${index}_tooltip`})}
        onMouseLeave={this.hidePointTip.bind(this, {ref: `point_${index}_tooltip`})}
        style={{stroke: this.props.strokeColor, strokeWidth: this.props.strokeWidth, fill: 'white', cursor: 'default'}}
      />
    })
  }

  renderLabel(label, index){
    if(!label.x){
      if(this.props.yLabelsPosition === 'right')
        label.x = this.activeWidth + (this.props.yLabelsOutside ? 5 : -1 * (20 + (5 * (label.txt.length || 1))))
      else
        label.x = 20
    }
    if(!label.ref) label.ref = `label.${index},${label.x},${label.y}`
    return (
      <text
        key={`graph.xAxis.label.${label.ref}`}
        x={label.x}
        y={label.y}
        ref={label.ref}
        fill={this.props.labelColor}
        style={{fontSize: this.props.labelFontSize, textShadow: this.props.labelTextShadow}}
      >
        {label.txt}
      </text>
    )
  }

  renderYGridLine(label, index){
    return (
      <line
        key={`graph.ygridLine.${index}`}
        x1="0"
        y1={label.y}
        x2={this.activeWidth - this.props.strokeWidth}
        y2={label.y}
        fill={this.props.labelColor}
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
      labels: labels.map(k => {var v = k * rule * 2;return {y: isZero ? yScale : (ySpread - k * rule * 2) * yScale, txt: formatNumber(Math.round(v + yMin))}})
    }
  }


  reduceData(data = [], startDate, endDate, maxPoints = 12){
    let results = []
    // Force each point ot have a time
    data.forEach((point, i)=>{if(!point.time)data[i].time = point.id || 0;results.push(point)})

    // Convert unix time to ms unix time
    // results.forEach((point, i)=>{if(results[i].format !== 'x'){results[i].time = parseFloat(point.time) * 1000;results[i].format = 'x'}})

    // Remove data which is out of range
    let s = parseFloat(startDate.format('x')),
        e = parseFloat(endDate.format('x'))

    results = results.filter(point=>point.time >= s && point.time <= e)

    // Limit number of points for given data set
    if(results.length > maxPoints){
      let zScale = results.length / maxPoints, selectedRange = []
      results.forEach((point, i) => {
        let k = Math.floor(i / zScale),
            v = parseFloat(point.value)
        if(selectedRange[k]) selectedRange[k].value += v
        else selectedRange[k] = {value: v, label: '{{value}} '+point.label, time: point.time}
      })
      if(this.props.formula === 'mean'){
        return selectedRange.map(point=>({...point, value: Math.round(point.value * 100 / zScale) / 100}))
      }
      return selectedRange
    }
    else
      return results
  }

  describeXAxis(xMin, xSpread, xScale, data){
    let keys = [1,2,3,4,5,6,7,8,9],
        keyInterval = data.length / keys.length,
        dateFormat = 'ddd',
        labels = [],
        day = 86400000

    if(xMin < 10000) return {labels: []} // No timestamps given
    if(keys.length > data.length){
      keys = data.map((p,i) => i + 1)
      keyInterval = 1
    }
    if(xSpread > day * 365 * 7) dateFormat = 'YYYY' // > 7 years
    else if(xSpread > day * 30 * 9) dateFormat = 'MMM' // > 9 Months
    else if(xSpread > day * 7) dateFormat = 'MMM D' // > a week
    else if(xSpread < day) dateFormat = 'LT'

    keys.forEach((k,i)=>{
      let time = xMin + (k * (xSpread/keys.length))
      // Skip last item
      if(i<keys.length-1) labels.push({
        txt: moment(time).format(dateFormat),
        time: time,
        x: (time - xMin) * xScale,
        y: this.activeHeight + 30,
        ref: 'xLabel.' + i
      })
    })

    this.xAxisLabels = labels

    return {
      labels
    }
  }

  centerXAxisLabelMarkers(){
    this.xAxisLabels.forEach(label=>{
      let domLabel = this.refs[label.ref]
      this.centerElement(domLabel, label.x, domLabel.getBBox().width)
    })
  }

  componentDidMount(){
    this.centerXAxisLabelMarkers()
  }

  componentDidUpdate(){
    this.centerXAxisLabelMarkers()
  }

  render(){
    let {data} = this.props
    this.activeWidth = this.props.width
    this.activeHeight = this.props.height - 50 // add 50 px in the bottom for the labels

    // Let's ensure all data has a timeStamp
    data.forEach((point,index)=>{
      if(!point.time){
        data[index].time = index
      }
      if(!(point.time instanceof Date)){
        data[index].time = (new Date(data[index].time)).getTime()
      }
    })

    data = data.sort((a,b) => a.time === b.time ? 0 : a.time > b.time ? 1 : -1)

    // let xMax = this.props.data.length - 1
    let xMax = Math.max(...data.map((point, index) => point.time), data.length)
    const xMin = Math.min(...data.map((point, index) => point.time))

    if(this.props.maxPoints !== -1) {
      data = this.reduceData(data, moment(xMin), moment(xMax), this.props.maxPoints)
      xMax = Math.max(...data.map((point, index) => point.time), data.length)
    }

    const yMax = Math.max(...data.map(point => point.value))
    const yRoundup = Math.pow(10, String(Math.round(yMax)).length-1)
    const yMultiplier = 1 + 1 / this.props.yPadding
    let roundedYMax = Math.max(Math.ceil(yMax/yRoundup) * yRoundup,1)
    const naturalYPadding = roundedYMax - yMax

    let yMin = (
      this.props.useDynamicYMin ?
      Math.min(...data.map(point => point.value)) - roundedYMax / 5 :
      0
    )

    const xSpread = (xMax - xMin)
    const ySpread = (roundedYMax - yMin)
    const xScale = this.activeWidth / (xSpread || 1)
    const yScale = this.activeHeight / (ySpread || 1)

    const line = this.describeLine(data, xMin, yMin, xSpread, ySpread, xScale, yScale)
    const area = `0,${(isZero ? yScale : ySpread * yScale) - this.props.strokeWidth} ${line} ${(xMax - xMin) * xScale - this.props.strokeWidth},${(isZero ? yScale : ySpread * yScale) - this.props.strokeWidth}`
    const yAxis = this.describeYAxis(yMin, ySpread, yScale)
    const xAxis = this.describeXAxis(xMin, xSpread, xScale, data)

    const isZero = ySpread === 0 && yMin === 0

    if(!data || !data.length) return null

    return (
      <Chart width={this.props.width} height={this.props.height} type="area">
        {yAxis.gridLines.map(::this.renderYGridLine)}

        <polygon
          points={area}
          style={{fill: this.props.fillColor, strokeWidth: 0}}
        />

        <polyline
          points={line}
          style={{stroke: this.props.strokeColor, strokeDasharray: this.props.strokeDasharray, strokeWidth: this.props.strokeWidth, fill: 'none'}}
        />

        {yAxis.labels.map(::this.renderLabel)}
        {xAxis.labels.map((label,index) => <line
          key={`graph.xAxis.label.${index}`}
          ref={label.ref+'.marker'}
          x1={label.x}
          x2={label.x}
          y1={this.activeHeight}
          y2={this.activeHeight + 10}
          stroke={this.props.gridColor}
          strokeWidth={1}
        />)}
        {xAxis.labels.map(::this.renderLabel)}
        {this.renderPoints(data, xMin, yMin, xSpread, ySpread, xScale, yScale)}
        {this.renderTips(data, xMin, yMin, xSpread, ySpread, xScale, yScale)}
      </Chart>
    )
  }
}
