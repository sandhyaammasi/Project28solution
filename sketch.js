
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var groundobj,boyimg,stoneobj,launcherObj;
function preload(){
  boyimg=loadImage("images/boy.png");
  treeimg = loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  groundobj = new ground(650,580,1300 ,20);
 // treeobj = new tree(1000,300,700,700);
  mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
  mango12=new mango(900,160,40);
  stoneobj = new stone(280,460,30,30);
//  265,475
  launcherObj = new launcher(stoneobj.body ,{x:240,y:450});
	Engine.run(engine);
}

function draw() {

  background(230);
  
  
  imageMode(CENTER);
  image(boyimg,280,500,200,200);
  image(treeimg,1000,300,700,700);
 // treeobj.display();
  groundobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneobj.display();
  stroke(50);
  text ("mouseX " +mouseX,1200,100);
  text ("mouseY "+mouseY,1200,120);
  detectcollision(stoneobj,mango1);
  detectcollision(stoneobj,mango2);
  detectcollision(stoneobj,mango3);
  detectcollision(stoneobj,mango4);
  detectcollision(stoneobj,mango5);
  detectcollision(stoneobj,mango6);
  detectcollision(stoneobj,mango7);
  detectcollision(stoneobj,mango8);
  detectcollision(stoneobj,mango9);
  detectcollision(stoneobj,mango10);
  detectcollision(stoneobj,mango11);
  detectcollision(stoneobj,mango12);
 
}
function mouseDragged(){
  Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  launcherObj.fly();
}
function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(stoneobj.body,{x:250,y:460});
    launcherObj.attach(stoneobj.body);
  }
}
function detectcollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }