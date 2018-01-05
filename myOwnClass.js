'use strict';
// не робить

class EventEmitter {
  constructor () {
    this.events = {};
  }

  on(eventName, fn) {
    const event = this.events[eventName] || [];
    this.events[eventName] = event;
    event.push(fn);
  }

  emit(eventName, ...data) {
    const event = this.events[eventName];
    if (event) event.forEach(fn => fn.apply(null, data));
  }

}

class MyEmitter extends EventEmitter {

};

let my = new MyEmitter ();

my.on('request', function (request) {
  console.log(request)
})

my.emit('request', {from:'Google'});
