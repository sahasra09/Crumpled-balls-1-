
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bin1,bin2,bin3;
var ob1;
var ground;
function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(700,700,200,20);
	bin2 = new Bin(680,650,20,100);
	bin3= new Bin(720,650,20,100);
	ob1=new Ppaper(200,700,12);
	ground=new Ground(400,760,1600,20);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ob1.body,ob1.body.position,{x:85,y:-85})
}
  ob1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
 
}



