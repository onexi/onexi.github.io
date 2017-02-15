var should = require('chai').should();
var ex01   = require('../solution.js');

describe('Array Exercise', function() {
	it('Change first element of an array', function() {
		var solution = ['Mango', 'Banana', 'Pear', 'Orange'];
	    ex01.change().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Return length of an array', function() {
	    ex01.length().should.equal(4);
	});
});

describe('Array Exercise', function() {
	it('Match text', function() {
	    ex01.concatenate().trim().should.equal(
	    	'It was the best of times, it was the worst of times'
	    );
	});
});

describe('Array Exercise', function() {
	it('Adding an element to the end of an array', function() {
		var solution = ['Banana', 'Pear', 'Orange', 'Mango'];
	    ex01.addToEnd().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Adding an element to the beginning of an array', function() {
		var solution = ['Mango', 'Banana', 'Pear', 'Orange'];
	    ex01.addToBegin().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Deleting the last element of an array', function() {
		var solution = ['Banana', 'Pear', 'Orange'];
	    ex01.deleteLast().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Deleting the first element of an array', function() {
		var solution = ['Pear', 'Orange', 'Mango'];
	    ex01.deleteFirst().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Adding an element after the first element in an array', function() {
		var solution = ['Banana', 'Pear', 'Orange', 'Mango'];
	    ex01.insert().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Concating two arrays', function() {
		var solution = ['Banana', 'Pear', 'Orange', 'Mango'];
	    ex01.concat().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Sorting an array alphabetically', function() {
		var solution = ['Banana', 'Mango', 'Orange', 'Pear'];
	    ex01.sortAlphabetically().should.eql(solution);
	});
});

describe('Array Exercise', function() {
	it('Sorting an array in a reversed alphabetical order', function() {
		var solution = ['Pear', 'Orange', 'Mango', 'Banana'];
	    ex01.reverseSort().should.eql(solution);
	});
});