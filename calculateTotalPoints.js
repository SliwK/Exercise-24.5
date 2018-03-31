const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  if(typeof windFactor !== "number" || typeof gateFactor !== "number") {
    return "wrong parameters";
  }

  return distancePoints + stylePoints + windFactor + gateFactor;
};

module.exports = calculateTotalPoints;
