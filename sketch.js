const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies//namespacing
var myWorld,myEngine;
var ground;
var ball;
var ball1;
var box1;
var box2;
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  box1=new Box (190,200,100,50);
  ground=new Ground();
  box2=new Box(150,300,70,80);
}

function draw() {
 
  background(0); 
  Engine.update(myEngine)
  box1.display();
  ground.display();
  box2.display();
}