'use strict'

const div = (x, y) => {
    return new Promise((resolve, reject) =>{
      if (y === 0)
      reject(new Error('Div for 0'));
      else
      resolve(x/y);
    });
};

(async () => {
  	try {
		console.log(await div(4,2));
	} catch (error) {
  		console.log(error.massege);
	}
})();

// div(4,2).then(
//  data => console.log(data),
//  error => console.log(error.message)
// );
//
// div(4,0).then(
//  data => console.log(data),
//  error => console.log(error.message)
// );
