import React from 'react'

export default class Grid extends React.Component {
  state = {
    items: [],
    width: 660,
    breakPoint: {columns: 3, width: 660}
  }

  static defaultProps = {
    breakPoints: [
      {columns: 1, width: 220},
      {columns: 2, width: 440},
      {columns: 3, width: 660},
      {columns: 4, width: 880},
      {columns: 5, width: 1100},
      {columns: 6, width: 1320},
      {columns: 7, width: 1540},
      {columns: 8, width: 1760},
      {columns: 9, width: 1980},
      {columns: 10, width: 2200},
    ]
  }

  getBreakPoint(breakPoints, width){
    let breakPoint = breakPoints[0]
    let diff = Math.abs(breakPoint.width - width)
    for (const [index, bp] of breakPoints.entries()) {
      let newdiff = Math.abs(bp.width - width)
      if(newdiff < diff){
        breakPoint = bp
        diff = newdiff
      }
    }
    return breakPoint
  }

  componentDidMount(){
    this.onResize = this.onResize.bind(this)
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.onResize)
  }

  onResize(){
    const width = this.refs.container.getBoundingClientRect().width
    const breakPoint = this.getBreakPoint(this.props.breakPoints, width)
    this.setState({width, breakPoint})
  }

  renderItems(items) {
    const containerWidth = this.state.width,
          width = (containerWidth - (20 * (this.state.breakPoint.columns - 1))) / this.state.breakPoint.columns

    return React.Children.map(items, (item, index) => {
      const itemStyles = Object.assign({}, item.props.styles, {
        width,
        marginRight: (index+1) % this.state.breakPoint.columns !== 0 ? 20 : 0,
        marginBottom: 20,
        flexGrow: 'grow',
        display: 'inline-block', //non flex fallback
      })
      return (
        <div key={'vid.'+index} style={itemStyles}>
          {React.cloneElement(item, Object.assign({}, item.props, {width}))}
        </div>
      )
    })
  }

  render() {
    return (
      <div ref="container" style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {this.renderItems(this.props.children)}
      </div>
    )
  }
}
