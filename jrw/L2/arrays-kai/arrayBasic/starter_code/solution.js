var exercise = {};

exercise.change = function(){

	var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];

	// solution
	fruits[0] = "Mango";
	return fruits;

};

exercise.length = function(){

	var fruits = ['Apple', 'Banana', 'Pear', 'Orange'];
	var length = 0;

	// solution
	length = fruits.length;

	return length;
};

exercise.concatenate = function(){
	var list = ['It','was','the','best','of','times,','it','was','the','worst','of','times'];
	var text = '';

	// solution
	for (var i = 0; i < list.length; i++) {
		text += list[i] + ' ';
	}

	return text;
};

exercise.addToEnd = function(){

	var fruits = ['Banana', 'Pear', 'Orange'];

	// solution
	fruits.push('Mango');

	return fruits;
};

exercise.addToBegin = function(){

	var fruits = ['Banana', 'Pear', 'Orange'];

	// solution
	fruits.unshift('Mango');

	return fruits;
};

exercise.deleteLast = function(){

	var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

	// solution
	fruits.pop();

	return fruits;
};

exercise.deleteFirst = function(){

	var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];

	// solution
	fruits.shift();

	return fruits;
};

exercise.insert = function(){

	var fruits = ['Banana','Orange','Mango'];

	// solution
	fruits.splice(1, 0, 'Pear');

	return fruits;
};

exercise.concat = function(){

	var fruit1 = ['Banana', 'Pear'];
    var fruit2 = ['Orange', 'Mango'];
	
	// solution
	var fruits = fruit1.concat(fruit2);

	return fruits;
};

exercise.sortAlphabetically = function(){

	var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];
	
	// solution
	fruits.sort();

	return fruits;
};

exercise.reverseSort = function(){

	var fruits = ['Banana', 'Pear', 'Orange', 'Mango'];
	
	// solution
	fruits.sort();
	fruits.reverse();

	return fruits;
};

// package API
module.exports = exercise;