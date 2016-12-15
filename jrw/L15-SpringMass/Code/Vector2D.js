
function Vector(x,y){
	this.dot = function(vec){
		return this.x*vec.x + this.y*vec.y;
	};
	this.squared = function(){ 
		return (this.x*this.x + this.y*this.y);
	};
	this.abs = function(){
		return Math.sqrt(this.x *this.x +this.y*this.y);
	};
	this.add = function(v1){
		return Vector(this.x+v1.x, this.y+v1.y);
	};
	this.minus = function(v1){
		return Vector(this.x-v1.x, this.y-v1.y);
	};
	this.unit = function(){
		var mag = this.abs(); 
		return Vector(this.x/mag,this.y/mag);
	};
	this.scale = function(mag){
		return Vector(this.x*mag,this.y*mag);
	};
	this.distance2 = function(v1){
		return (this.x-v1.x)*(this.x-v1.x) + (this.y-v1.y)*(this.y-v1.y);
	};
	return {x:x, y:y, dot:this.dot, abs:this.abs, squared:this.squared,
		add:this.add, minus:this.minus, unit:this.unit, scale:this.scale, distance2:this.distance2
	};
}
