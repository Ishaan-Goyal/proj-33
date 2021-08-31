var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var bg;

  var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 500);

bg = loadImage("snow3.jpg");
  engine = Engine.create();
  world = engine.world;
  

    

    
}
 


function draw() {
  background(bg);
  textSize(20)

  Engine.update(engine);
  
  
   if(frameCount%40===0){
     particles.push(new Particle(random(100,700), 10,10));
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
}