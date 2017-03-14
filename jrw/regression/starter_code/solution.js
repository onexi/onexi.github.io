var exercise = {};

exercise.linearRegression = function (x,y){

    // YOUR CODE
    // least squares method
    
    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_xx = 0;
    var count = 0;

    /*
     * We'll use those variables for read/write access.
     */
    var temp_x = 0;
    var temp_y = 0;
    var values_length = x.length;

    if (values_length === 0) {
        return [ [], [] ];
    }

    /*
     * Calculate the sum for each of the parts necessary.
     */
    for (var v = 0; v < values_length; v++){
        temp_x = x[v];
        temp_y = y[v];
        sum_x += temp_x;
        sum_y += temp_y;
        sum_xx += temp_x*temp_x;
        sum_xy += temp_x*temp_y;
        count++;
    }

    /*
     * Calculate m and b for the formular:
     * y = x * m + b
     */
    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
    // console.log('m');
    // console.log(m);
    exercise.linearRegression.m = function(){
        return m;
    };
    // console.log(exercise.linearRegression.m());
    var b = (sum_y/count) - (m*sum_x)/count;
    // console.log('b');
    // console.log(b);
    exercise.linearRegression.b = function(){
        return b;
    };
    // console.log(exercise.linearRegression.b())


    //result should be a function
    var lr = function(data_x){
        var y = m*data_x + b;
        return y;
    };   
    return  lr;


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


