var Game = function() {
  this.score = 0;
  this.rolls = [];
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins) {
  this.rolls = this.rolls;
  this.score += pins;
};

Game.prototype.rolls = function() {
  this.rolls;
}

Game.prototype.score = function() {
  for (i=0; i<this.rolls.length; i++) {
    this.score += this.rolls[i];
  }
  return this.score;
};

module.exports = {
  Game
};
