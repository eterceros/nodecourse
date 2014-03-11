
function Shape(){

}

Shape.prototype.X=0;
Shape.prototype.Y=0;

Shape.prototype.move= function(x,y){
    this.X=x;
    this.Y=y;
}

Shape.prototype.distance_from_origin = function(){
    return Math.sqrt(this.X*this.X + this.Y* this.Y);
}

Shape.prototype.area = function(){
    throw new Error("Need a 2d form");
}

var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin());