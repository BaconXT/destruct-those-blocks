const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function preload() {




}


function setup() {
createCanvas(600,600);
engine = Engine.create();
world = engine.world;

}



function draw() 
{
  background(100);
  Engine.update(engine);
  

  rope.show();


  ellipse(ball.position.x,ball.position.y,20); 

}
