'use strict';

const https = require('https');

https.get('https://github.com/CITCourses', res => {
  console.log(res.statusCode);

  let body = '';

  res.on('data', data => {
    // console.log(data.toString('utf8'));
    // process.stdout.write(data);
    // console.log(res.headers);
    console.log(data.length);
    body += data.toString('utf8');
  });

  res
}).on('error', err => {
  console.error(err.message);
});
