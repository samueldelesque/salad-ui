import moment from 'moment'
import Q from 'q'
import {get} from 'js/lib/dm/fetch-methods'

const networkDelay = 500

const delay = function(){
  networkDelay * (0.9 + Math.random() / 2)
}

export default class MonetizationData {
  range = 31

  constructor(settings){
    this.settings = Object.assign({
      username: null,
      startDate: moment(),
      endDate: moment(),
      useFixtures: false,
      domain: 'http://dailymotion.com',
      maxPoints: 31,
      token: null
    }, settings)

    if(DM_Context && DM_Context.env.match(/stage/gi)) this.settings.domain = 'http://' + DM_Context.env + '.dailymotion.com'

    this.settings.startDate = moment(this.settings.startDate)
    this.settings.endDate = moment(this.settings.endDate)
  }

  getData(section, params = {}){
    params.start = this.settings.startDate.format('X')
    params.stop = this.settings.endDate.format('X')
    let videoFilter = this.settings.video ? '/video/' + this.settings.video : ''
    return get(this.settings.domain + '/stats/' + this.settings.username + videoFilter + '/data/' + section, params)
  }

  cleanRevenuePerDay(data = []){
    var results = []
    // Force each point ot have a time
    data.forEach((point, i)=>{if(!point.time)data[i].time = point.id || 0;results.push(point)})

    // Convert unix time to ms unix time
    results.forEach((point, i)=>{if(results[i].format !== 'x'){results[i].time = parseFloat(point.time) * 1000;results[i].format = 'x'}})

    // Remove data which is out of range
    let s = parseFloat(this.settings.startDate.format('x')),
        e = parseFloat(this.settings.endDate.format('x'))

    results = results.filter(point=>point.time >= s && point.time <= e)

    // Limit number of points for given data set
    if(results.length > this.settings.maxPoints){
      let zScale = results.length / this.settings.maxPoints, selectedRange = []
      results.forEach((point, i) => {
        let k = Math.floor(i / zScale),
            v = parseFloat(point.value)
        if(selectedRange[k]) selectedRange[k].value += v
        else selectedRange[k] = {value: v, label: point.label, time: point.time}
      })
      return selectedRange
    }
    else
      return results
  }

  getRevenue(type, dateStart, dateEnd, token){
    let date = encodeURIComponent(JSON.stringify({
      date: {
        $gte: dateStart.format('YYYY-MM-DD'),
        $lte: dateEnd.format('YYYY-MM-DD')
      }
    }))
    return get('https://report.dailymotion.com/'+type+'?where='+date+'&sort=-date&page=1&max_results=100&access_token='+token)
  }

  revenuePerDay(){
    if(this.settings.useFixtures){
      let res = Q.defer()
      setTimeout(()=>{
          res.resolve(this.cleanRevenuePerDay(revenuePerDayFixtures.data))
      }, delay())
      return res.promise
    }
    else
      return this.getData('chart').then(res=>this.cleanRevenuePerDay(res.data), ()=>console.error('viewsPerDay: Failed to fetch data.', arguments))
  }

  totals(){
    if(this.settings.useFixtures){
      let res = Q.defer()
      setTimeout(()=>{
          res.resolve(totalsFixtures.data)
      }, delay())
      return res.promise
    }
    return this.getData('total').then(res=>{
      let views = (res.data.filter(el=>el.id==='views'))[0].value,
        time = (res.data.filter(el=>el.id==='time'))[0].value,
        totals = res.data.filter(el=>el.id!=='time')

      totals.push({label: 'Time watched per view', value: this.calcTimePerView(time, views)})
      return totals
    }).catch(err=>console.error('totals: Failed to fetch data.', err))
  }
}
// data from /spi0n
var videoRevenueFixtures = {"currency": "USD", "total": 312658.5195092728, "_items": [{"impressions": 276657, "revenues": 2185.613211999995, "_id": "56f3dde6dfdca334b50d6e21", "channel_xid": "xgditw", "date": "2016-03-23T00:00:00Z", "parent_xid": "xgditw", "_updated": "2016-03-25T14:48:12Z", "_created": "2016-03-24T12:30:30Z"}, {"impressions": 23, "revenues": 0.119862, "_id": "56f3df16dfdca334b50e5c88", "channel_xid": "xgditw", "date": "2016-03-23T00:00:00Z", "parent_xid": null, "_updated": "2016-03-25T14:52:03Z", "_created": "2016-03-24T12:35:34Z"}, {"impressions": 102695, "revenues": 746.6005680000009, "_id": "56f3e039dfdca334b50f5e15", "channel_xid": "xgditw", "date": "2016-03-22T00:00:00Z", "parent_xid": "xgditw", "_updated": "2016-03-25T14:46:15Z", "_created": "2016-03-24T12:40:25Z"}, {"impressions": 21, "revenues": 0.11257600000000002, "_id": "56f3e01fdfdca334b50f442b", "channel_xid": "xgditw", "date": "2016-03-22T00:00:00Z", "parent_xid": null, "_updated": "2016-03-25T14:44:50Z", "_created": "2016-03-24T12:39:59Z"}, {"impressions": 22606, "_updated": "2016-03-24T21:06:35Z", "_id": "56f13ae364e3ed20be1a8a42", "date": "2016-03-21T00:00:00Z", "channel_xid": "xgditw", "revenues": 154.53058299999998, "parent_xid": "xgditw", "_created": "2016-03-22T12:30:27Z"}, {"impressions": 15, "_updated": "2016-03-24T21:05:26Z", "_id": "56f13b5664e3ed20be1aeb48", "date": "2016-03-21T00:00:00Z", "channel_xid": "xgditw", "revenues": 0.08017700000000001, "parent_xid": null, "_created": "2016-03-22T12:32:22Z"}, {"impressions": 7, "revenues": 0.023277999999999997, "_id": "56efe96c64e3ed0ab3757da4", "date": "2016-03-20T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-21T12:30:36Z", "parent_xid": "xgditw", "_updated": "2016-03-24T16:48:56Z"}, {"impressions": 60, "revenues": 0.34160399999999996, "_id": "56efea5a64e3ed0ab3764f35", "date": "2016-03-20T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-21T12:34:34Z", "parent_xid": null, "_updated": "2016-03-24T16:47:36Z"}, {"impressions": 9, "revenues": 0.029677999999999996, "_id": "56ee988ddfdca30ba7579ae4", "date": "2016-03-19T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-24T16:28:47Z", "parent_xid": "xgditw", "_created": "2016-03-20T12:33:17Z"}, {"impressions": 56, "revenues": 0.3051150000000001, "_id": "56ee9802dfdca30ba7572eb1", "date": "2016-03-19T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-24T16:27:01Z", "parent_xid": null, "_created": "2016-03-20T12:30:58Z"}, {"impressions": 24, "revenues": 0.08764399999999999, "_id": "56f3e17adfdca334b510809a", "channel_xid": "xgditw", "date": "2016-03-18T00:00:00Z", "parent_xid": "xgditw", "_updated": "2016-03-24T15:57:35Z", "_created": "2016-03-24T12:45:46Z"}, {"impressions": 209, "revenues": 1.5056629999999995, "_id": "56f3e0bedfdca334b50fc8ac", "channel_xid": "xgditw", "date": "2016-03-18T00:00:00Z", "parent_xid": null, "_updated": "2016-03-24T15:54:28Z", "_created": "2016-03-24T12:42:38Z"}, {"impressions": 143, "_updated": "2016-03-19T12:31:50Z", "_id": "56ed46b664e3ed2c2519ea66", "date": "2016-03-17T00:00:00Z", "channel_xid": "xgditw", "revenues": 0.30529800000000007, "parent_xid": "xgditw", "_created": "2016-03-19T12:31:50Z"}, {"impressions": 442, "_updated": "2016-03-19T12:30:35Z", "_id": "56ed466b64e3ed2c2519b03a", "date": "2016-03-17T00:00:00Z", "channel_xid": "xgditw", "revenues": 3.151982999999998, "parent_xid": null, "_created": "2016-03-19T12:30:35Z"}, {"impressions": 5, "_updated": "2016-03-17T12:33:05Z", "_id": "56eaa401dfdca34d321245be", "date": "2016-03-16T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:33:05Z", "parent_xid": "xgditw", "revenues": 0.036465}, {"impressions": 51, "_updated": "2016-03-17T12:31:37Z", "_id": "56eaa3a9dfdca34d3212016d", "date": "2016-03-16T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:31:37Z", "parent_xid": null, "revenues": 0.337478}, {"impressions": 20, "_updated": "2016-03-17T12:37:07Z", "_id": "56eaa4f3dfdca34d32130661", "date": "2016-03-15T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:37:07Z", "parent_xid": "xgditw", "revenues": 0.07618000000000001}, {"impressions": 55, "_updated": "2016-03-17T12:39:25Z", "_id": "56eaa57ddfdca34d32138d06", "date": "2016-03-15T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:39:25Z", "parent_xid": null, "revenues": 0.3798920000000001}, {"impressions": 19, "_updated": "2016-03-17T12:41:35Z", "_id": "56eaa5ffdfdca34d3213f9a5", "date": "2016-03-14T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:41:35Z", "parent_xid": "xgditw", "revenues": 0.08752700000000001}, {"impressions": 129, "_updated": "2016-03-17T12:44:28Z", "_id": "56eaa6acdfdca34d3214863e", "date": "2016-03-14T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-17T12:44:28Z", "parent_xid": null, "revenues": 0.8775769999999992}, {"impressions": 10, "revenues": 0.034536, "_id": "56e6ce549c15be319c561ec2", "date": "2016-03-13T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-14T14:44:36Z", "parent_xid": "xgditw", "_updated": "2016-03-14T14:44:36Z"}, {"impressions": 287, "revenues": 2.690075000000001, "_id": "56e6ce5b9c15be319c5626a5", "date": "2016-03-13T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-14T14:44:43Z", "parent_xid": null, "_updated": "2016-03-14T14:44:43Z"}, {"impressions": 20, "_updated": "2016-03-14T14:46:36Z", "_id": "56e6ceccdfdca318cf35d046", "date": "2016-03-12T00:00:00Z", "channel_xid": "xgditw", "revenues": 0.062451999999999994, "parent_xid": "xgditw", "_created": "2016-03-14T14:46:36Z"}, {"impressions": 447, "_updated": "2016-03-14T14:46:23Z", "_id": "56e6cebfdfdca318cf35c474", "date": "2016-03-12T00:00:00Z", "channel_xid": "xgditw", "revenues": 7.064973999999995, "parent_xid": null, "_created": "2016-03-14T14:46:23Z"}, {"impressions": 26, "revenues": 0.19631800000000005, "_id": "56e6afa09c15be319c556dac", "date": "2016-03-11T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-14T12:33:36Z", "parent_xid": "xgditw", "_updated": "2016-03-14T12:33:36Z"}, {"impressions": 753, "revenues": 9.873090999999995, "_id": "56e6af069c15be319c54d409", "date": "2016-03-11T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-14T12:31:02Z", "parent_xid": null, "_updated": "2016-03-14T12:31:02Z"}, {"impressions": 129168, "_updated": "2016-03-13T12:33:04Z", "_id": "56e55e009c15be120d59e78c", "date": "2016-03-10T00:00:00Z", "channel_xid": "xgditw", "revenues": 859.7997820000005, "parent_xid": "xgditw", "_created": "2016-03-13T12:33:04Z"}, {"impressions": 46, "_updated": "2016-03-13T12:34:02Z", "_id": "56e55e3a9c15be120d5a266a", "date": "2016-03-10T00:00:00Z", "channel_xid": "xgditw", "revenues": 0.26580500000000007, "parent_xid": null, "_created": "2016-03-13T12:34:02Z"}, {"impressions": 293747, "_updated": "2016-03-10T12:34:50Z", "_id": "56e169ea63cc887244c0c344", "date": "2016-03-09T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-10T12:34:50Z", "parent_xid": "xgditw", "revenues": 2138.830077000002}, {"impressions": 67, "_updated": "2016-03-10T12:35:22Z", "_id": "56e16a0a63cc887244c0e191", "date": "2016-03-09T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-10T12:35:22Z", "parent_xid": null, "revenues": 0.34117100000000006}, {"impressions": 99002, "_updated": "2016-03-24T15:40:58Z", "_id": "56e0180cdfdca34915177069", "date": "2016-03-08T00:00:00Z", "channel_xid": "xgditw", "revenues": 668.0288450000011, "parent_xid": "xgditw", "_created": "2016-03-09T12:33:16Z"}, {"impressions": 87, "_updated": "2016-03-24T15:43:34Z", "_id": "56e017f2dfdca34915175ce2", "date": "2016-03-08T00:00:00Z", "channel_xid": "xgditw", "revenues": 0.5563389999999998, "parent_xid": null, "_created": "2016-03-09T12:32:50Z"}, {"impressions": 168515, "revenues": 1111.9704580000011, "_id": "56df2323dfdca3349f31e157", "date": "2016-03-07T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-08T19:08:19Z", "parent_xid": "xgditw", "_updated": "2016-03-08T19:08:19Z"}, {"impressions": 162, "revenues": 1.1773719999999992, "_id": "56df2382dfdca3349f322951", "date": "2016-03-07T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-08T19:09:54Z", "parent_xid": null, "_updated": "2016-03-08T19:09:54Z"}, {"impressions": 285638, "revenues": 2030.316551999993, "_id": "56dda2b5afbdf27abca61bc8", "date": "2016-03-06T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:48:05Z", "parent_xid": "xgditw", "_created": "2016-03-07T15:48:05Z"}, {"impressions": 519, "revenues": 3.2708879999999994, "_id": "56dda306afbdf27abca66401", "date": "2016-03-06T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:49:26Z", "parent_xid": null, "_created": "2016-03-07T15:49:26Z"}, {"impressions": 374607, "revenues": 2472.181553999999, "_id": "56dda3fcafbdf27abca7609f", "date": "2016-03-05T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:53:32Z", "parent_xid": "xgditw", "_created": "2016-03-07T15:53:32Z"}, {"impressions": 2668, "revenues": 16.286032000000013, "_id": "56dda465afbdf27abca7df4e", "date": "2016-03-05T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:55:17Z", "parent_xid": null, "_created": "2016-03-07T15:55:17Z"}, {"impressions": 94015, "revenues": 663.3254030000006, "_id": "56dda4f1afbdf27abca877ea", "date": "2016-03-04T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:57:37Z", "parent_xid": "xgditw", "_created": "2016-03-07T15:57:37Z"}, {"impressions": 6555, "revenues": 49.457963, "_id": "56dda570afbdf27abca9171a", "date": "2016-03-04T00:00:00Z", "channel_xid": "xgditw", "_updated": "2016-03-07T15:59:44Z", "parent_xid": null, "_created": "2016-03-07T15:59:44Z"}, {"impressions": 161015, "_updated": "2016-03-07T17:48:28Z", "_id": "56ddbeecdfdca3325442db9d", "date": "2016-03-03T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-07T17:48:28Z", "parent_xid": "xgditw", "revenues": 1007.4372789999978}, {"impressions": 494, "_updated": "2016-03-07T17:47:59Z", "_id": "56ddbecfdfdca3325442b8cb", "date": "2016-03-03T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-07T17:47:59Z", "parent_xid": null, "revenues": 2.777364999999999}, {"impressions": 300443, "_updated": "2016-03-07T17:45:22Z", "_id": "56ddbe32dfdca33254422b21", "date": "2016-03-02T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-07T17:45:22Z", "parent_xid": "xgditw", "revenues": 1754.038993999995}, {"impressions": 3594, "_updated": "2016-03-07T17:47:46Z", "_id": "56ddbec2dfdca3325442a349", "date": "2016-03-02T00:00:00Z", "channel_xid": "xgditw", "_created": "2016-03-07T17:47:46Z", "parent_xid": null, "revenues": 20.18017099999996}, {"impressions": 162208, "_updated": "2016-03-07T17:46:22Z", "_id": "56ddbe6eafbdf23ed7239a83", "date": "2016-03-01T00:00:00Z", "channel_xid": "xgditw", "revenues": 854.421724926902, "parent_xid": "xgditw", "_created": "2016-03-07T17:46:22Z"}, {"impressions": 13955, "_updated": "2016-03-07T17:49:25Z", "_id": "56ddbf25afbdf23ed7243472", "date": "2016-03-01T00:00:00Z", "channel_xid": "xgditw", "revenues": 66.83330098806032, "parent_xid": null, "_created": "2016-03-07T17:49:25Z"}], "last_month_total": 28209.12458501411, "current_month_total": 16836.020881914945, "_meta": {"total": 46, "page": 1, "max_results": 50}}
