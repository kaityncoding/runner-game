var runner, runnerimage, path, pathimage, power, powerimage, bomb, bombimage, coin, coinimage, energyDrink, energyDrinkimage
function preload(){
  //pre-load images
  runnerimage = loadAnimation("Runner-1.png", "Runner-2.png")
  pathimage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200)
path.addImage("path", pathimage)
path.velocityY = 4;
runner = createSprite(100,100)
runner.addAnimation("runner", runnerimage)
runner.scale = 0.2
}

function draw() {
  background(0);
drawSprites()
if (path.y > 400){
  path.y = height/2;
}
}