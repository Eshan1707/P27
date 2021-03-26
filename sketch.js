
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new ground(800,200,200,20)
d=40  
x=800
y=500
ball1 = new Ball(x-2*d,y,d)
ball2 = new Ball(x-d,y,d)
ball3=new  Ball(x,y,d)
ball4 = new Ball(x+d,y,d)
ball5 = new Ball(x+2*d,y,d)
	Engine.run(engine);
 
	rope3=new Rope(roof.body,ball3.body,0,0)
	rope1=new Rope(roof.body,ball1.body,-2*d,0)
	rope2=new Rope(roof.body,ball2.body,-d,0)
	rope4=new Rope(roof.body,ball4.body,d,0)
	rope5=new Rope(roof.body,ball5.body,2*d,0)
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope3.display();
  rope1.display();
  rope2.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-55,y:-55})
	}
}

