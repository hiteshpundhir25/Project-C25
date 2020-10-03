const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rect1,rect2,rect3;

function preload()
{
	img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,680,1200,20);
  paper = new Paper(100,300);
	rect1 = new Dustbin(1050,650,180,15);
  rect2 = new Dustbin(970,565,20,180);
  rect3 = new Dustbin(1130,565,20,180);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  fill("red");
  textSize(18);
  text("=> Press UP arrow to make ball move up",600,50);

  fill("red");
  textSize(18);
  text("=> Press DOWN arrow to make ball move down",600,75);

  fill("blue");
  textSize(22);
  text("'Make the ball get into the dustbin'",400,200)

  drawSprites();
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  image(img, 950, 470, 200, 200);
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:83,y:-84});

	}

}


