const calculateDistancePoints = (distance, hillSize, kPoint) => {

if(typeof distance !== 'number' || typeof hillSize !== "string" || typeof kPoint !== "number") {
  return "wrong parameters";
} else if(hillSize == 'normal') {
  return 60 + (distance - kPoint) * 2;
} else if(hillSize == 'big') {
  return 60 + (distance - kPoint) * 1.8;
} else if(hillSize == "mamut") {
  return 120 + (distance - kPoint) * 1.2;
} else {
  return 'error';
}
};

module.exports = calculateDistancePoints;
