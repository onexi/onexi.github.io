var exercise = {};

function getRandomNumber()  { return (Math.random()*20-10);}

exercise.run =  function (){
	var colors = ['red','green','blue','yellow'];
    exercise.atoms  = [];
    for(var i = 0;i<4;i++)
    	exercise.atoms.push(atom(colors[i]));
    drawPoint(400, 410, 'blue');
    setInterval(makePoint, 100);
};
// this is a factory function that makes atoms
var atom = function(color){
	return {x:400,y:400,color:color};
}
var makePoint = function(){
	exercise.atoms.forEach(function(atom){
		var vx = getRandomNumber();
		var vy = getRandomNumber(); 
    	drawLine(atom.x, atom.y, atom.x+vx,atom.y+vy);
    	atom.x += vx;
    	atom.y += vy;
    	drawPoint(atom.x,atom.y,atom.color);
 	});
	
};

