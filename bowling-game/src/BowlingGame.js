var rolls = [];

var Game = function() {
  this.score = 0;
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins) {
  rolls[this.currentRoll] = pins;
  this.currentRoll += 1;
};

Game.prototype.score = function() {
  for (i=0; i<rolls.length; i++) {
    this.score += rolls[i];
  }
  return this.score;
};

module.exports = {
  Game
};
