import React from 'react'
import { get } from '../../../lib/fetch-methods'
import Grid from '../../util/grid/grid'
import Preview, {mediaTypes} from '../preview/preview'
import Button from '../../util/button/button'
import Trans from '../../util/trans/trans'

export default class List extends React.Component {
  state = {
    videos: [],
    failed: false,
    currentPage: 1,
    hasMore: false,
    loading: false,
    searching: false,
    initialVideos: {
      videos: [],
      hasMore: false
    },
    err: null
  }

  static propTypes = {
    sortBy: React.PropTypes.string,
    limit: React.PropTypes.number,
    flags: React.PropTypes.array,
    endpoint: React.PropTypes.string,
    searchTerm: React.PropTypes.string,
    mediaType: React.PropTypes.oneOf(['video', 'playlist']),
  }

  static defaultProps = {
    sortBy: 'recent',
    limit: 3,
    flags: [],
    endpoint: '/videos',
    colSize: 3,
    searchTerm: null,
    mediaType: 'video'
  }

  componentDidMount(){
    this.loadVideos('setInitialVideos', this.props)
  }

  componentWillReceiveProps(nextProps){
    if(this.hasPropsChanged(this.props, nextProps)){
    if(this.refs.container) this.refs.container.style.opacity = .4
      this.setState({currentPage: 1}, () => {
        this.loadVideos('replaceVideos', nextProps)
      })
    }
  }

  hasPropsChanged(oldProps, nextProps){
    return JSON.stringify({
      sortBy: oldProps.sortBy,
      limit: oldProps.limit,
      flags: (oldProps.flags||[]).join(','),
      endpoint: oldProps.endpoint,
      searchTerm: oldProps.searchTerm
    }) !== JSON.stringify({
      sortBy: nextProps.sortBy,
      limit: nextProps.limit,
      flags: (nextProps.flags||[]).join(','),
      endpoint: nextProps.endpoint,
      searchTerm: nextProps.searchTerm
    })
  }

  // Allow us to store the first set of videos to avoid hitting API after a search
  setInitialVideos(videos, hasMore){
    if(videos.length === 0 && this.props.ifEmpty) this.props.ifEmpty()
    this.setState({initialVideos: {videos,hasMore}}, () => {
      this.replaceVideos(videos, hasMore)
    })
  }

  loadVideos(cb, props){
    if(!this.props.mediaType) console.error('No mediaType provided to Grid.')
    this.setState({loading: true})
    let data = {
      fields: mediaTypes[this.props.mediaType].fields.join(','),
      page: this.state.currentPage,
      thumbnail_ratio: 'widescreen',
      sort: props.sortSelection || props.sortBy,
      limit: props.limit,
      localization: 'en_ZH' //must pass a non-existent language in order to have sort working in current API (lol)
    }
    let endpoint = props.endpoint ? props.endpoint : '/videos'
    if(props.searchTerm) data.search = props.searchTerm
    if(props.flags && props.flags.length) data.flags = props.flags.join(',')

    get(this.props.apiURL + endpoint, {data})
    .then(res => this[cb](res.list, res.has_more))
    .catch(err => {
      console.error('Failed to fetch videos', query, err)
      this.setState({failed: this.state.currentPage === 1, hasMore: false, searching: false, loading: false})
    })
  }

  appendVideos(videos, hasMore){
    this.setState({hasMore, videos: this.state.videos.concat(videos), failed: false, loading: false, currentPage: this.state.currentPage + 1})
    this.refs.container.style.opacity = 1
  }

  replaceVideos(videos, hasMore){
    this.setState({hasMore, videos, loading: false, failed: false, currentPage: this.state.currentPage + 1})
    this.refs.container.style.opacity = 1
  }

  loadMore(){
    this.loadVideos('appendVideos', this.props)
  }

  render() {
    return (
      <div className="video-list" ref="container">
        {React.Children.map(this.props.children, (item, index) =>
          React.cloneElement(item, Object.assign({}, this.props, this.state, item.props, {loadMore: () => this.loadMore()}))
        )}
      </div>
    )
  }
}


// Example use:

// class GridArea extends React.Component{
//   render(){
//     return (
//       <Grid>
//         {this.props.videos.map((video,index)=><Preview key={`video.${index}`} type="grid" {...video}/>)}
//       </Grid>
//     )
//   }
// }
// class LoadMore extends React.Component{
//   render(){
//     return (
//       <Button onPress={()=>this.props.loadMore()}>
//         Load More
//       </Button>
//     )
//   }
// }
// class Page extends React.Component{
//   render(){
//     return (
//       <View style={{border: '2px solid'}}>
//         <VideoList>
//           <GridArea/>
//           <LoadMore/>
//         </VideoList>
//       </View>
//     )
//   }
// }
