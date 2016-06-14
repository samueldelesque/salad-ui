'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var eventsCache = {};
var debug = false;

var services = [{
  name: 'ga',
  trackEvent: function trackEvent(event, data) {
    if (typeof ga === 'undefined' || ga === false) throw new Error('GA is not available at this time.');else if (!data.category || !data.action) throw new Error('SaladUI.Tracking: data object is missing category (' + category + ') or action (' + action + ') property.');else ga('send', 'event', data.category, data.action, data.label, data.value);
  },
  trackPage: function trackPage(pageName) {
    if (typeof ga === 'undefined' || ga === false) throw new Error('GA is not available at this time.');else if (!pageName) {
      throw new Error('SaladUI.Tracking: data object is missing pageName (' + pageName + ').');
    } else ga('send', {
      hitType: 'pageview',
      page: pageName
    });
  }
}];

var enableDebug = exports.enableDebug = function enableDebug() {
  var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
  return debug = enabled;
};

var initialize = exports.initialize = function initialize(events) {
  if (debug) console.log('tracking.initialize events: ' + events, eventsCache);
  eventsCache = Object.assign({}, eventsCache, events);
};

var trigger = exports.trigger = function trigger(event) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (debug) console.log('tracking.trigger Event: ' + event, 'options: ', options, 'eventsCache: ', eventsCache);
  if (typeof event !== 'string') {
    throw new Error('Event passed to SaladUI.tracking must be a string!');
    return;
  }
  services.forEach(function (service) {
    if (typeof eventsCache[event] !== 'undefined' && typeof eventsCache[event][service.name] !== 'undefined') {
      var eventData = Object.assign({}, eventsCache[event][service.name], options[service.name] || null);
      service.trackEvent(event, eventData);
    } else {
      throw new Error('Trying to track an event that hasn\'t been configured to be tracking: ' + event);
    }
  });
};

var trackPage = exports.trackPage = function trackPage(pageName) {
  services.forEach(function (service) {
    service.trackPage(pageName);
  });
};