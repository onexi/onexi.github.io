var exercise = {};

exercise.min = function(unordered){
	var min;

	// ---------- solution ----------
	var ordered = unordered.sort(function(a, b){return a-b});
	min= ordered[0];

	return min;
};

var unordered = [11,2,15,4,5,20,7,17,13,10,1,12,9,14,3,16,8,18,19,6];
exercise.min(unordered);

// share work
module.exports = exercise;