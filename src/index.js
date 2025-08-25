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
    const indexMax = rangeArr.indexOf(currentGuess);

    this.rangeArr = rangeArr.slice(indexMin, indexMax);

    console.log(this.rangeArr);
    return this.rangeArr;
  }

  pickGreater() {
    const { max, currentGuess, rangeArr } = this;

    const indexMin = rangeArr.indexOf(currentGuess) + 1;
    const indexMax = rangeArr.indexOf(max) + 1;

    this.rangeArr = rangeArr.slice(indexMin, indexMax);

    console.log(this.rangeArr);
    return this.rangeArr;
  }
}

const game = new GuessingGame();
game.setRange(1, 100);
game.currentGuess = 8;
console.log(game.currentGuess);
// game.initialGuess();

game.pickGreater();
// game.pickLower();

// game.initialGuess();
// console.log(game.currentGuess);
// game.pickLower();

// console.log(game.name);

module.exports = GuessingGame;
