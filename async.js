'use strict';

  const EventEmitter = require('events');

  const ee = new EventEmitter();

  ee.on('event1',(date)=>{
    console.log(date)
  });

  ee.emit('event1', ' Hello ');
