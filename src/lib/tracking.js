let eventsCache = {}
let debug = false

const services = [
  {
    name: 'ga',
    trackEvent: (event, data) => {
      if (typeof(ga) === 'undefined' || ga === false)
        console.error('GA is not available at this time.')
      else if (!data.category || !data.action)
        console.error('SaladUI.Tracking: data object is missing category (' + category + ') or action (' + action + ') property.')
      else
        ga('send', 'event', data.category, data.action, data.label, data.value)
    },
    trackPage: (pageName) => {
      if (typeof(ga) === 'undefined' || ga === false)
        console.error('GA is not available at this time.')
      else if (!pageName){
        console.error('SaladUI.Tracking: data object is missing pageName (' + pageName + ').')
      }
      else
        ga('send', {
          hitType: 'pageview',
          page: pageName
        })
    },
  },
]

export const enableDebug = (enabled = true) => debug = enabled

export const initialize = (events) => {
  if(debug) console.log('tracking.initialize events: ' + events, eventsCache)
  eventsCache = Object.assign({}, eventsCache, events)
}

export const trigger = (event, options = {}) => {
  if(debug) console.log('tracking.trigger Event: ' + event, 'options: ', options, 'eventsCache: ', eventsCache)
  if(typeof(event) !== 'string'){
    throw new Error('Event passed to SaladUI.tracking must be a string!')
    return
  }
  services.forEach(service => {
    if(typeof(eventsCache[event]) !== 'undefined' && typeof(eventsCache[event][service.name]) !== 'undefined'){
      let eventData = Object.assign({}, eventsCache[event][service.name], options[service.name] || null)
      service.trackEvent(event, eventData)
    }
    else{
      throw new Error('Trying to track an event that hasn\'t been configured to be tracking: '+ event)
    }
  })
}

export const trackPage = (pageName) => {
  services.forEach(service => {
    service.trackPage(pageName)
  })
}
