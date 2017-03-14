var exercise = {};

exercise.linearRegression = function (x,y){

    // YOUR CODE
    // least squares method
    


    /*
     * Calculate m and b for the formular:
     * y = x * m + b
     */


    // YOUR CODE
    // var m = 
    
    exercise.linearRegression.m = function(){
        return m;
    };

    // YOUR CODE
    //var b = 

    exercise.linearRegression.b = function(){
        return b;
    };


    //should return a function 
    return;


};

function getRandomNumber()  { return Math.floor(Math.random()*100);}

exercise.run =  function (){
    var x  = [];
    var y  = [];
    var lr = [];
    var length = 10;

    // get random points
    for (var i=0; i<length; i++){
        x[i] = getRandomNumber();
        y[i] = getRandomNumber();
    }

    // get linear regression equation
    lr = exercise.linearRegression(x, y);
    graph(x,y,lr);
};

