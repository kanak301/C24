class BallClass{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.1,
            'friction':2.5,
            'density':2.0,
            'isStatic':false,
            'mass':3.0
        }
        this.body = Bodies.circle(x, y,radius/2, options);
        this.radius=radius;

        World.add(world, this.body);
      }
      display(){
        ellipseMode(CENTER);

        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
      }
}

