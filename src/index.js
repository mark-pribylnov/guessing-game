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
      return index + min + 1;
    });

    // console.log(this.rangeArr);
    return this.rangeArr;
  }

  guess() {
    this.currentGuess =
      this.rangeArr[Math.round((this.max - this.min) / 2) + this.min];
    // TUTORIAL
    // https://www.youtube.com/watch?v=9EmO9_MK1gQ&t=34s&ab_channel=Front-endScience%D1%96%D0%B7%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D1%94%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%BC

    // console.log(this.currentGuess);
    return this.currentGuess;
  }

  lower() {
    // console.log('-------------\n');

    this.max = this.currentGuess - 1;

    // const { currentGuess, rangeArr } = this;
    // const indexMin = 0;

    // if (!this.firstGuessHappened) {
    //   const indexMax = rangeArr.indexOf(currentGuess);

    //   this.rangeArr = rangeArr.slice(indexMin, indexMax);

    //   this.firstGuessHappened = true;

    //   // console.log(this.rangeArr);
    //   return this.rangeArr;
    // }
    // const indexMax = (this.rangeLeft ?? rangeArr).length - 1;
    // const indexMiddle = Math.round((indexMax - indexMin) / 2);
    // // console.log(indexMiddle);
    // this.rangeRight = (this.rangeLeft ?? rangeArr).slice(indexMiddle);
    // this.rangeLeft = (this.rangeLeft ?? rangeArr).slice(indexMin, indexMiddle);
    // if (this.rangeRight.length) [this.currentGuess] = this.rangeRight;
    // // console.log(
    // //   this.rangeLeft,
    // //   this.rangeRight,
    // //   this.currentGuess
    // //   // '1312321412441414123'
    // // );

    return this.currentGuess;
  }

  greater() {
    // console.log('-------------\n');

    this.min = this.currentGuess + 1;

    // const { currentGuess, rangeArr } = this;
    // const indexMax = (this.rangeRight ?? rangeArr).length - 1;

    // if (!this.firstGuessHappened) {
    //   const indexMin = rangeArr.indexOf(currentGuess) + 1;

    //   this.rangeArr = rangeArr.slice(indexMin, indexMax + 1);

    //   this.firstGuessHappened = true;
    //   // console.log(this.rangeArr);
    //   return this.rangeArr;
    // }
    // // const indexMin = (this.rangeRight ?? rangeArr)[0];
    // const indexMin = 0;
    // const indexMiddle = Math.round((indexMax - indexMin) / 2);
    // // console.log(indexMiddle);
    // this.rangeLeft = (this.rangeRight ?? rangeArr).slice(indexMin, indexMiddle);
    // this.rangeRight = (this.rangeRight ?? rangeArr).slice(indexMiddle);
    // [this.currentGuess] = this.rangeRight;

    // // console.log(
    // //   // this.rangeLeft,
    // //   // this.rangeRight,
    // //   this.currentGuess
    // //   // '1312321412441414123'
    // // );

    return this.currentGuess;
  }
}

// // const number = 359;
// const game = new GuessingGame();
// game.setRange(0, 385);

// let result = game.guess();
// // console.log(result);
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();

// const game = new GuessingGame();
// game.setRange(0, 385);
// game.currentGuess = 174;
// game.userNumer = 359;
// console.log(game.currentGuess);
// // game.initialGuess();
// game.greater();
// game.greater();
// game.greater();
// game.greater();
// game.greater();
// game.lower();
// game.lower();
// game.lower();
// game.greater();
// game.greater();
// game.lower();
// game.lower();
// console.log(game.currentGuess);
// console.log(game.guess());

// game.initialGuess();
// console.log(game.currentGuess);
// game.lower();

// console.log(game.name);

module.exports = GuessingGame;
