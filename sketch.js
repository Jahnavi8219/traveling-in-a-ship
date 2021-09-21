var seaImg, shipImg1;
var sea,ship;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup() {
  createCanvas(400, 400);
  
  sea = createSprite(200, 200, 400, 400);
  sea.addImage("sea", seaImg);
  sea.scale = 0.75;
  sea.velocityX = -2;

  
  ship = createSprite(200, 200, 400, 400);
  ship.addAnimation("ship", shipImg1);
  ship.scale = 0.4;
}

function draw() {
  background("blue");

  if(sea.x < 100){
    sea.x = 200;
  }

  drawSprites();
}