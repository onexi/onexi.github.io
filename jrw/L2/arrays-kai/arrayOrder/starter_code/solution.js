var exercise = {};

exercise.order = function(unordered){
	var ordered = [];

	// ---------- solution ----------
	var ordering = true;

	do{
		// find location of min value in unordered array
		var min   = Math.min.apply(Math, unordered);
		var index = unordered.indexOf(min);

		// add to ordered array
		ordered.push(unordered[index]);

		// remove from unordered array
		unordered.splice(index,1);

		// if unordered is emptly exit loop
		if (unordered.length === 0) ordering = false;

	} while(ordering);


	return ordered;
};

var unordered = [11,2,15,4,5,20,7,17,13,10,1,12,9,14,3,16,8,18,19,6];
exercise.order(unordered);

// share work
module.exports = exercise;