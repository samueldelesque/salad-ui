import React from 'react'
import SaladUI from '../salad-ui'

export class GridArea extends React.Component{
  render(){
    return (
      <SaladUI.Util.Grid>
        {
          this.props.videos.map((video,index) =>
            <SaladUI.Video.Preview key={`video.${index}`} type="grid" {...video}/>
          )
        }
      </SaladUI.Util.Grid>
    )
  }
}
export class ListArea extends React.Component{
  render(){
    return (
      <div className="video-list-area">
        {
          this.props.videos.map((video,index) =>
            <SaladUI.Video.Preview key={`video.${index}`} width={220} type="list" {...video}/>
          )
        }
      </div>
    )
  }
}
export class LoadMore extends React.Component{
  render(){
    return (
      <SaladUI.Util.Button loading={this.props.loading} fullWidth={true} onPress={()=>this.props.loadMore()}>
        Load More
      </SaladUI.Util.Button>
    )
  }
}
