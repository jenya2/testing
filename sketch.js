
var ball;

function setup() {
  createCanvas(400,400);
  ball =  createSprite(200,120,50,50);
}

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
  ball.shapeColor = "purple";
}

if(keyIsDown(DOWN_ARROW)){
  ball.shapeColor = "blue";
}

if(keyIsDown(RIGHT_ARROW)){
  ball.shapeColor = "pink";
}

if(keyIsDown(LEFT_ARROW)){
  ball.shapeColor = "yellow";
}




drawSprites();
}




