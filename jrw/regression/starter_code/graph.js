var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var width = 800;
var height = 600;

function getMin(arr) { return Math.floor(Math.min.apply(Math, arr)); }
function getMax(arr) { return Math.ceil(Math.max.apply(Math, arr)); }

function dotProduct(a,b,length){
	var result = 0;
    for (var i=0; i<length; i++)
        result += a[i]*b[i];
    return result;	
}

function graph(x,y,lr){
    // range, the min and max for each coordinate
    var range = {xMin : 0, yMin : 0, xMax : 0, yMax : 0};
    range.xMin  = getMin(x);
    range.xMax  = getMax(x);
    range.xSpan = range.xMax - range.xMin;
    range.yMin  = getMin(y);
    range.yMax  = getMax(y);	
    range.ySpan = range.yMax - range.yMin;
    var length = x.length;

    // choose a max span
    var span = 0;
    if (range.xSpan > range.ySpan){
    	span = range.xSpan;
    }
    else{
		span = range.ySpan;
    }

    // scale matrix "a"
    var k = Math.floor((height)/(2*span));
    //var k = 100;
    var a = [[k, 0], 
    		 [0, k]];

    for (var i=0; i<length;i++){
        x[i] = dotProduct(a[0] ,[x[i], y[i]], a.length);
        y[i] = dotProduct(a[1] ,[x[i], y[i]], a.length);        
    }

    // draw data points
    ctx.clearRect(0,0,width, height);
    for (i=0; i<length;i++){
        drawPoint(x[i],y[i], 'blue');
    }

    // draw linear regression
    var x1 = range.xMin;
    var y1 = lr(range.xMin);
    var x2 = range.xMax;
    var y2 = lr(range.xMax);
    x1 = dotProduct(a[0] ,[x1, y1], a.length);
    y1 = dotProduct(a[1] ,[x1, y1], a.length);        
    x2 = dotProduct(a[0] ,[x2, y2], a.length);
    y2 = dotProduct(a[1] ,[x2, y2], a.length);        
    drawLine(x1,y1,x2,y2);
    drawAxes(range);
}

function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    y = Math.abs(y - height);
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2, true);
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    y1 = Math.abs(y1 - height);    
    ctx.moveTo(x1, y1);
    y2 = Math.abs(y2 - height);        
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawAxes(range){
    // x axis
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(width, height);
    ctx.stroke();

    // labels
    // ctx.font = "48px serif";
    // ctx.fillText("Hello world", 10, 50);

    // y axis
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.stroke();
}
