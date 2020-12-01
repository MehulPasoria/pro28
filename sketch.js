
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,mango,tree,stone;

function preload()
{
	this.image=loadImage("tree-removebg-preview.png");
	this.image=loadImage("boy-removebg-preview.png");
}

function setup() {
	createCanvas(1200, 900);

	 boy = new Boy (600,200,1200,20);
    tree = new Tree(150, 305, 300, 170);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  tree.display();

  drawSprites();
 
}



