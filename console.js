const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (q) => {
  return new Promise((resolve, reject) => {
    rl.question(q, (answer) => {
      if (answer)
        resolve(answer);
      else
        reject(new Error('Answer is empty!'));
    });
  });
};

(async () => {
  try {
    console.log(await question('Привіт,як тебе звати ? '));
    console.log(await question('Скільки тобі років? '));
    console.log(await question('Коли тебе відрахують? '));
  } catch (err) {
    console.error(err.message);
  }

  rl.close();
})();
