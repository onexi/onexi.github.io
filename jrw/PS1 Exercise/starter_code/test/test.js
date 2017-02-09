var should = require('chai').should();
var ex = require('../solution.js');


describe('PacMan Grader', function() {
    it('Correct update', function() {
        ex.pos = { x: 100 };
        ex.increment = 20;
        var before = 100;
        ex.img1 = { style: '100px' };
        ex.updatePosition();
        var answer = ex.pos.x;
        answer.should.equal(before + ex.increment);

    });

    it('Correct increment sign 1', function() {
        ex.pos = { x: 800 };
        ex.img1.width = 100;
        var before = ex.increment;
        ex.checkWallCollision();
        var answer = ex.increment;
        answer.should.equal(-before);

    });
    it('Correct increment sign 2', function() {
        ex.pos = { x: -10 };
        var before = ex.increment;
        ex.checkWallCollision();
        var answer = ex.increment;
        answer.should.equal(-before);

    });
    it('Correct image flip', function() {
        ex.flag = 1;
        ex.img1 = { src: 'PacMan2.png' };
        ex.chooseImage();
        var answer = ex.flag;
        answer.should.equal(0);
    });
});