'use strict';

let EE = require('events').EventEmitter;

class MyEmitter extends EE {

};

let my = new MyEmitter ()

my.on('req', function (request) {
  console.log(request)
});

my.emit('req',{from: "Booka"});

my.emit('Any request',{from: 'any emit'})
