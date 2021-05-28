// defining sprites
var car,wall;
var speed, weight; 

function setup() {

  // creating canavas
  createCanvas(1600, 400);

  // random values
	speed=random(55,90)
	weight=random(400,1500)

  // creating car
	car=createSprite(50, 200, 50,50);   
	car.velocityX = speed;
	car.shapeColor=color(255);

  // creating wall
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {

  // giving background color
  background(0);

  // deformation
  if(wall.x-car.x < (car.width+wall.width)/2){

    car.velocityX=0;

    var deformation=0.5 * weight * speed* speed/22500;
    
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }
  
  // displaying sprites
  drawSprites();
}
