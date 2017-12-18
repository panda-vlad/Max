const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


(async () => {
  await(rl.question('Привіт,як тебе звати ? ', (answer) => {
    console.log(`Привіт, ${answer}. `);
    rl.close();
  }));
})();
