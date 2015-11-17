var Game = function() {
  this.score = 0;
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins) {
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function() {
  this.score = 0;
  i = 0;
  for (frame=0; frame<10; frame++) {
    console.log("Hi There");
    if (this.rolls[i] + this.rolls[i+1] === 10) {
      this.score += this.rolls[i+2];
      i += 2;
    } else {
      this.score += this.rolls[i] + this.rolls[i+1];
      i += 2;
    }
  }
  return this.score;
};

module.exports = {
  Game
};
