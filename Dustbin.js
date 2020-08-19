class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            'isStatic' : true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        Matter.Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("black");
        rotate(angle);
        pop();
      }
}
