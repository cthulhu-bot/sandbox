var bowling = require("../src/BowlingGame.js");

describe("Bowling Game Tests", function() {
  var rollMany = function(game, n, pins) {
    for (i=0; i<n; i++) {
      game.roll(pins);
    }
  };

  it("Test Gutter Game", function() {
    var game = new bowling.Game();
    rollMany(game, 20, 0);
    expect(game.score).toEqual(0);
  });

  it("test all ones", function() {
    var game = new bowling.Game();
    rollMany(game, 20, 1);
    expect(game.score).toEqual(20);
  });

  it("test one spare", function() {
    var game = new bowling.Game();
    game.roll(5);
    game.roll(5); // spare
    game.roll(3);
    rollMany(17, 0);
    expect(game.score).toEqual(16);
  });
});
