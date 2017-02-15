var should = require('chai').should();
var ex = require('../solution.js');

describe('Array Exercise', function() {
	it('Find minimum numbers', function() {
			// two copies of the same list
   			var list1 = [11,2,15,4,5,20,7,17,13,10,1,12,9,14,3,16,8,18,19,6];

			// compare result of 'order' function to sorted list2
	        ex.min(list1).should.equal(1);
	});
});