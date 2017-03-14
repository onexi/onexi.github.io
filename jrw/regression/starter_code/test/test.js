var should = require('chai').should();
var ex = require('./ex.js').load('./exercise.js');
var x = [1,1,1,5];
var y = [0,4,3,2];

// var m_solution = -0.08333333333333333;
// var b_solution = 2.4166666666666665;

describe('Linear Regression Grader', function() {
	it('Correct m value', function() {

		var m_solution = -0.08333333333333333;
		ex.linearRegression(x,y);
		var m_answer = ex.linearRegression.m(); 
	    m_answer.should.equal(m_solution);

	});
	it('Correct b value', function() {

		var b_solution = 2.4166666666666665;		
		var b_answer = ex.linearRegression.b(); 
	    b_answer.should.equal(b_solution);

	});



	it('Correct y value, given an x', function() {

		var y_solution = 2;
		var x_given = 5;
		var lr_function = ex.linearRegression(x,y);
		var y_answer = lr_function(5);

	    y_answer.should.equal(y_solution);

	});
});
