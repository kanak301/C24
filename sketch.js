
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render;

var ground;

var ball1;
var rect1;
var rect2;
var rect3;

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });

	ball1=new BallClass(185,100,50);

	rect1=new DustClass(500,640,200,20);
	rect2= new DustClass(400,600,20,100);
	rect3= new DustClass(600,600,20,100);
	ground= new DustClass(400,650,800,10);
	
	Engine.run(engine);
	Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rect1.display();
  rect2.display();
  rect3.display();
 ground.display();
  
drawSprites();

}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.1,y:-0.09})

	}
  }



	 
