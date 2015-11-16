var Game = function() {
  this.score = 0;
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins) {
  this.score += pins;
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function() {
  return this.score;
};

module.exports = {
  Game
};
