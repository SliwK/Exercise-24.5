const assert = require('assert');
const calculateDistancePoints = require("./calculateDistancePoints.js");


describe("calculateDistancePoints", () => {
  describe("hillSize", () => {
    it('hillSize must be a string', () => {
      const actual = calculateDistancePoints(100, 100, 100);

      const expected = "wrong parameters";

      assert.equal(actual, expected);
    });

    it("hillSize must be 'normal', 'big' or 'mamut'", () => {
      const actual = calculateDistancePoints(100, 'normalny', 100);

      const expected = 'error';

      assert.equal(actual, expected);
    });
  });

  describe("distance", () => {
    it('distance must be a number', () => {
      const actual = calculateDistancePoints("eighty meters", "big", 100);

      const expected = 'wrong parameters';

      assert.equal(actual, expected);
    });
  });

  describe("kPoint", () =>{
    it('kPoint must be a number', () => {
      const actual = calculateDistancePoints(100, "mamut", "far far away");

      const expected = "wrong parameters";

      assert.equal(actual, expected);
    });
  });

  describe("general distace score calculation", () =>{
    it('normal sky jump calculation', () => {
      const actual = calculateDistancePoints(100, "normal", 80);

      const expected = 100;

      assert.equal(actual, expected);
    });

    it('big sky jump calculation', () => {
      const actual = calculateDistancePoints(120, "big", 100);

      const expected = 96;

      assert.equal(actual, expected);
    });

    it('mamut sky jump calculation', () => {
      const actual = calculateDistancePoints(130, "mamut", 120);

      const expected = 132;

      assert.equal(actual, expected);
    });
  });


});
