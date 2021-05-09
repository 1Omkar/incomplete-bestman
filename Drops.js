class Drops{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.rain=Bodies.circle(x,y,5,options);
        this.x=x;
        this.y=y;
        World.add(world,this.rain);
    }
    display(){
        var pos=this.rain.position;
        var angle=this.rain.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        ellipse(0,0,5,5);
        pop()
    }
}