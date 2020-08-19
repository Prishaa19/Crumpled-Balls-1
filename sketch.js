
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1 , box2 , box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,800,20);

	ball = new Paper (400,200,10);

	box1 = new Box(450,615,20,50);
    box2 = new Box(350,630,200,20);
	box3 = new Box(250,615,20,50);


	Engine.run(engine);
  
}


function draw() {
  ellipse(56,46,55,55);
  background(0);
  
  ball.display();

  rectMode (CENTER)
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

 function keyPressed (){
	 if (keyCode === UP_ARROW)
	 Matter.Body.applyForce(PaperObject.body,PaperObject.position,{x:85,y:-85})
 }



