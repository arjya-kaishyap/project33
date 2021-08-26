var engine, world;
var backgroundImg;
var bg, snow = []

    const Engine = Matter.Engine;
    const World= Matter.World;  
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
  



    
     function preload(){
      bg = loadImage("snow1.jpg");

}
    function setup() {
      var canvas = createCanvas(1200,400);

      engine = Engine.create();
      world = engine.world;

      for(var i = 0; i<200; i++){
        snow.push(new Snow4(random(0,1200),random(0,100)));
      }
    }

    function draw() {
      background(bg);
      
      
      Engine.update(engine);  
      drawSprites();
      for(var j = 0; j<snow.length; j++){
        snow[j].display();
      }
    }



