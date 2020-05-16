var fixed;
var moving;
function setup() {
  createCanvas(1200,400);
  moving=createSprite(1000, 200, 50, 50);
  fixed=createSprite(200,200,50,50);
  moving.shapeColor="green";
  fixed.shapeColor="green";
  moving.velocityX=-5;
  fixed.velocityX=5;
}

function draw() {
  background(0);  
  if(moving.x-fixed.x===moving.width/2+fixed.width/2) {
    moving.velocityX= moving.velocityX*(-2);
    fixed.velocityX=fixed.velocityX*(-2);
  }
  drawSprites();
}