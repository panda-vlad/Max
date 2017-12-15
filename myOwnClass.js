'use strict';
// не робить

class EventEmitter {
  construcor ()
  {
    this.events = {};
  }

  on(eventName, fn) {
    const event = this.events[eventName];
    this.events[eventName] = event;
    event.push(fn);
  }

  emit(eventName, date) {
    const event = this.event[eventName];
    if (event) {
      event.forEach(function (fn) {
        return(fn.calls(null,date));
      })
    }
  }

}

class MyEmitter extends EventEmitter {

};

let my = new MyEmitter ();

my.on('request', function (request) {
  console.log(request)
})

my.emit('request', {from:'Google'});
