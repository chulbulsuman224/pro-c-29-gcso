 
 
 var car1;
var wall1;

function setup() {
  createCanvas(800,400);

 car1= createSprite(70,70,50,40);
 car1.shapeColor="red";
 car1.velocityX = 5;
 car2=createSprite(70,160,50,40);
 car2.shapeColor="blue";
 car2.velocityX = 15;
 car3=createSprite(70,250,50,40);
 car3.shapeColor="yellow";
 car3.velocityX = 26;
 car4=createSprite(70,350,50,40)
 car4.shapeColor="green";
 car4.velocityX = 22;

 wall1=createSprite(745,70,40,60);
 wall2=createSprite(745,160,40,60);
 wall3=createSprite(745,250,40,60);
 wall4=createSprite(745,350,40,60);

 
 
 
 
}


function draw() {
  background(0);  
  
  car1.display();
  car2.display();
  car3.display();
  car4.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  
  
}