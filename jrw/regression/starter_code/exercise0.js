var exercise = {};


function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
    exercise.index = 0;
    exercise.x  = [400];
    exercise.y  = [400];

    setInterval(makePoint, 100);

};
var makePoint = function(){

    var dx = exercise.x[exercise.index] + getRandomNumber();
    var dy = exercise.y[exercise.index] + getRandomNumber();

    drawPoint(dx,dy,'red');
    exercise.x.push(dx); exercise.y.push(dy);
    exercise.index++;

};

