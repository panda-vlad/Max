'use strict';

let i = 0;

const p = new Promise((resolve, reject)=>{
  setTimeout(() => {
    i++;
    resolve(i);
  },1000);
});

p.then(
  data => console.log(data),
  error => console.log(error.message)
);

//console.log(i);
