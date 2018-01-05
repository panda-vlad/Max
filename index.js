'use strict'

const fs = require('fs');
const promisify = require ('./promisify.js');
const readFile = promisify(fs.readFile);

// readFile('filename','utf8')
// .then(
//   data => console.log(data),
//   error => console.log(error.message)
// );

(async () => {
 try {
   console.log(await readFile('index.js','utf8'));
   console.log(await readFile('filename','utf8'));
 } catch (error) {
     console.log(error.message);
 }
})();
