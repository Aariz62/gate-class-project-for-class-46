const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function preload(){
  gateImg1=loadImage("gate image 1.png")
  gateImg2=loadImage("gate image 2.png")
}

  function setup() {
  createCanvas(1200,800);
  

  
  
  engine= Engine.create();
  world=engine.world

  gate=new Gate()
  gate2=new Gate()
  Engine.run(engine);

}

function draw() {
  background(255,255,255);  
  drawSprites();

  gate.display()
  gate2.display()
}
