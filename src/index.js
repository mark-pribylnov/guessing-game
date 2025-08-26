// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Gues ', (answer) => {
//   console.log(`Hello, ${answer}!`);
//   rl.close();
// });

class GuessingGame {
  // constructor() {
  //   // throw new Error('Not implemented');
  // }

  setRange(min, max) {
    this.min = min;
    this.max = max;
    this.rangeArr = Array.from({ length: max }, (_, index) => {
      return index + min;
    });

    console.log(this.rangeArr);
    return this.rangeArr;
  }

  static getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  initialGuess() {
    this.currentGuess = GuessingGame.getRandom(this.min, this.max);

    console.log(this.currentGuess);
    return this.currentGuess;
  }

  pickLower() {
    const { min, currentGuess, rangeArr } = this;
    const indexMin = rangeArr.indexOf(min);

    if (!this.firstGuessHappened) {
      const indexMax = rangeArr.indexOf(currentGuess);

      this.rangeArr = rangeArr.slice(indexMin, indexMax);

      this.firstGuessHappened = true;

      console.log(this.rangeArr);
      return this.rangeArr;
    }
    const indexMax = (this.rangeLeft ?? rangeArr).length - 1;
    const indexMiddle = Math.round((indexMax - indexMin) / 2);
    // console.log(indexMiddle);
    this.rangeRight = (this.rangeLeft ?? rangeArr).slice(indexMiddle);
    this.rangeLeft = (this.rangeLeft ?? rangeArr).slice(indexMin, indexMiddle);
    [this.currentGuess] = this.rangeRight;

    console.log(this.rangeLeft, this.rangeRight, this.currentGuess);

    return this.currentGuess;
  }

  pickGreater() {
    const { currentGuess, rangeArr } = this;
    const indexMax = (this.rangeRight ?? rangeArr).length - 1;

    if (!this.firstGuessHappened) {
      const indexMin = rangeArr.indexOf(currentGuess) + 1;

      this.rangeArr = rangeArr.slice(indexMin, indexMax + 1);

      this.firstGuessHappened = true;
      console.log(this.rangeArr);
      return this.rangeArr;
    }
    // const indexMin = (this.rangeRight ?? rangeArr)[0];
    const indexMin = 0;
    const indexMiddle = Math.round((indexMax - indexMin) / 2);
    // console.log(indexMiddle);
    this.rangeLeft = (this.rangeRight ?? rangeArr).slice(indexMin, indexMiddle);
    this.rangeRight = (this.rangeRight ?? rangeArr).slice(indexMiddle);
    [this.currentGuess] = this.rangeRight;

    console.log(this.rangeLeft, this.rangeRight, this.currentGuess);

    return this.currentGuess;
  }
}

const game = new GuessingGame();
game.setRange(1, 10);
game.currentGuess = 2;
game.userNumer = 8;
console.log(game.currentGuess);
// game.initialGuess();

game.pickGreater();
game.pickGreater();
game.pickGreater();
// game.pickGreater();
// game.pickLower();
// game.pickLower();
// game.pickLower();

// game.initialGuess();
// console.log(game.currentGuess);
// game.pickLower();

// console.log(game.name);

module.exports = GuessingGame;
