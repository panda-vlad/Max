'use strict'

const EE = require('events').EventEmitter;

const myEE = new EE;

myEE.on('hom9chok', function (request) {
  console.log(request);
})

myEE.on('error', function () {
  console.log('There is an arror')
});

myEE.emit('hom9chok', {from: 'Meal'});
myEE.emit('error');
