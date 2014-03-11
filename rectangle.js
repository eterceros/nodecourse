
function Shape(){
    this.X=0;
    this.Y=0;

    this.move= function(x,y){
        this.X=x;
        this.Y=y;
    }

    this.distance_from_origin = function(){
        return Math.sqrt(this.X*this.X + this.Y* this.Y);
    }

}

var s = new Shape();
s.move(10,10);
console.log(s.distance_from_origin());



function Square(){

}

// this tells inherit all from Shape
Square.prototype= new Shape();
// __proto__ is now supported by many browsers
Square.prototype.__proto__=Shape.prototype;

Square.prototype.Width=0;


Square.prototype.area= function(){
    return this.Width*this.Width;
}

var sq = new Square();
sq.move(5,5);
sq.Width=15;
console.log(sq.distance_from_origin());
console.log(sq.area());





function Rectangle(){

}

// this tells inherit all from Square
Rectangle.prototype= new Square();
// __proto__ is now supported by many browsers
Rectangle.prototype.__proto__=Square.prototype;


Rectangle.Heigth=0;


Rectangle.prototype.area= function(){
    return this.Width*this.Heigth;
}

var re = new Rectangle();
re.move(-5,-5);
re.Width=15;
re.Heigth=2;
console.log(re.distance_from_origin());
console.log(re.area());

console.log(sq instanceof Square);
console.log(sq instanceof Shape);
console.log(sq instanceof Rectangle);
console.log(re instanceof Square);
console.log(re instanceof Shape);
