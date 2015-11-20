describe("a Promises represents an operation that hasn't completed yet, but is expected in the future", function() {
  it('`Promise` is a global function', function() {
    const expectedType = new Promise(function(resolve,reject){resolve();});
    expect(expectedType).toEqual(typeof Promise);
  });
});
