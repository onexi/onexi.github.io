
function Vector(x,y){
	var dot = function(v1){
		return this.x*v1.x + this.y*v1.y;
	};
	var abs = function(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	};
	var plus = function(v1){
		return Vector(this.x+v1.x, this.y+v1.y);
	};
	var minus = function(v1){
		return Vector(this.x-v1.x, this.y-v1.y);
	};
	var unit = function(){
		var mag = this.abs(); 
		return Vector(this.x/mag, this.y/mag);
	};
	var scale = function(mag){
		return Vector(this.x*mag,this.y*mag);
	};
	var distance = function(v1){
		return this.minus(v1).abs();
	};
	return {x:x, y:y, dot:dot, abs:abs, plus:plus, minus:minus, 
		unit:unit, scale:scale, distance:distance
	};
}
