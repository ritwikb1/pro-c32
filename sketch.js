
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var blower
var button
var engine, world

function setup() {
	createCanvas(800,400)	
	//createSprite(400, 200, 50, 50)
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(400, 150, 40)
	blower = new Blower(340, 219, 100, 10)
	bigblower = new Blower(400, 200, 50, 50)
	button = createButton("Click to Blow")
	button.position(width/2, height-100)
    button.class("blowButton")

	
}


function draw() {
  background(0);
  Engine.update(engine)
  ball.show()
  blower.show()
  bigblower.show()
  
  button.mouseClicked(blow)
  drawSprites(); 
 
}
function blow(){
	Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:5})
}


