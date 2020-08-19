class Paper {
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        Matter.Bodies.circle(x, y, radius);
        this.width = width;
        this.height = height;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("pink");
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}