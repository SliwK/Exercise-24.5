const calculateStylePoints = (styleNotes) => {

if(styleNotes.length !== 5) {
  return "five juges should give their scores";
} else if(styleNotes.filter( note => typeof note === 'number').length < 5) {
  return 'scores must be numbers';
}

var scoresSorted = styleNotes.sort(function(a, b){return a - b;});
//console.log(scoresSorted);
scoresSorted.pop();
//console.log(scoresSorted);
scoresSorted.shift();
//console.log(scoresSorted);
var finalScores = scoresSorted.reduce(function (a, b) { return a + b; }, 0);
//console.log(finalScores);

return finalScores;
};


module.exports = calculateStylePoints;
