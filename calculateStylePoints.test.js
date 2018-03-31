const assert = require('assert');
const calculateStylePoints = require("./calculateStylePoints.js");

describe('calculateStylePoints', () => {
  describe('style points', () => {
    it('number of scores cannot be lower then 5', () => {
      const actual = calculateStylePoints([1, 1, 1, 1,]);

      const expected = 'five juges should give their scores';

      assert.equal(actual, expected);
    });

    it('number of scores cannot be greater then 5', () => {
      const actual = calculateStylePoints([1, 1, 1, 1,]);

      const expected = 'five juges should give their scores';

      assert.equal(actual, expected);
    });

    it('scores must be numbers', () => {
      const actual = calculateStylePoints([15,'15.5',12, 18.9, 18]);

      const expected = "scores must be numbers";

      assert.equal(actual, expected);
    });

    it('equal scores should give a final score', () => {
      const actual = calculateStylePoints([18, 18, 18, 18, 18]);

      const expected = 54;

      assert.equal(actual, expected);
    });
  });
});
