var thickness,wall;
var speed,weight;
var bullet;

function setup() {
  createCanvas(800,400);
  speed= random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX=speed
  bullet.shapeColor="white";

  wall = createSprite(600,200,thickness,200);
  wall.shapeColor= "grey";


}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation = 0.5*weight*speed*speed/(3*thickness)
    if(deformation > 10){
      wall.shapeColor="red";
    }

if(deformation < 10){
  wall.shapeColor="green";
}
  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge >= wallLeftEdge){
  return true
}
return false
}