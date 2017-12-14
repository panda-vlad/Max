'use strict';

let EE = require('events').EventEmitter;

let server = new EE;

server.on('request', function (req) { // підписка на певну подію; function - функція оброблювач
  req.approved = true;
});

server.on('request', function (req) {
  console.log(req);
})

// emit генерує події і передає дані
server.emit('request',{from: "Home"});
