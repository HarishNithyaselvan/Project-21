 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,leftside,rightside,groundobject
var world
var radius=40
var engine 

function setup() {
	createCanvas(1600, 700);
   
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
        
	}
	ball = Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)
	
	groundobject = new Ground(width/2,670,width,20)
	leftside = new Ground(1100,600,20,120)
	rightside = new Ground(1350,600,20,120)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundobject.display()
  leftside.display()
  rightside.display()
}



