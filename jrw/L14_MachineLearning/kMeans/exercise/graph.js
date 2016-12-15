var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.globalAlpha = 0.5;
var width = 640;
var height = 480;

function clearCanvas(){
    ctx.clearRect(0,0,width, height);    
}

function graphData(color) {
    var length = data.length;

    for (var i=0; i<length;i++){
        drawPoint(data[i].x, data[i].y, 5, color);
    }
}

var colors = ['red','blue','green'];

function graphClusters(clusters){

    for(var i=0; i<clusters.length; i++){

        for(var j=0; j<clusters[i].length; j++){
            drawPoint(clusters[i][j].x, clusters[i][j].y, 5, colors[i]);
        }
    }
}

function graphMeans(means, color, oldMeans){

    for(var i=0; i<means.length; i++){
        drawPoint(means[i].x, means[i].y, 10, color);

        if (oldMeans){
            drawDashedLine(oldMeans[i].x, oldMeans[i].y, 
                        means[i].x, means[i].y, 
                        'gray');
        }
    }
}

function drawDashedLine(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.setLineDash([3]);   // dashed line
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // length of arrow head in pixels
    var headlen = 7;   
    var angle = Math.atan2(y2-y1,x2-x1);
    ctx.setLineDash([0]);   // stop dashed line

    // draw arrow head
    ctx.beginPath();
    ctx.lineTo(x2, y2);             
    ctx.lineTo(x2-headlen*Math.cos(angle-Math.PI/6),
                y2-headlen*Math.sin(angle-Math.PI/6));
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2-headlen*Math.cos(angle+Math.PI/6),
                y2-headlen*Math.sin(angle+Math.PI/6));
    ctx.stroke();
}


function drawPoint(x, y, r, color) {

    ctx.strokeStyle = color;
    //y = Math.abs(y - height);

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.stroke();
}
