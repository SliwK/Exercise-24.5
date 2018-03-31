const assert = require('assert');
const calculateTotalPoints = require("./calculateTotalPoints.js");

describe('calculateTotalPoints', () => {
  describe('windFactor', () => {
      it("windFactor must ba a number", () => {
        const actual = calculateTotalPoints(100, 'big', 90, [15, 16, 17.5, 17, 12], 'big wind', 10);

        const expected = "wrong parameters";

        assert.equal(actual, expected);
      });
  });

  describe('gateFactor', () => {
      it("gateFactor must be a number", () => {
        const actual = calculateTotalPoints(100, 'big', 90, [15, 16, 17.5, 17, 12], 10, "last one");

        const expected = "wrong parameters";

        assert.equal(actual, expected);
      });
  });
});
