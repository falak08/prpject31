const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];


 for(var i=0;i<=width;i=i+80){
  divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
}  
  
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
  });
  
  ground1=new Ground(5,780,980,10);

 

  
}
var divisionHeight=300;


function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();

  for(var i=0; i<divisions.length;i++){
    divisions[i].display();
  }
  
}

 

  

