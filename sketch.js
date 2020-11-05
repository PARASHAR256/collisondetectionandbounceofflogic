var movingRect,fixedRect;
var topRect,bottomRect;

function setup() {
  createCanvas(1200,1200);
  fixedRect = createSprite(400,200,80,50);
  fixedRect.shapeColor = "orange";

  movingRect = createSprite(600,200,50,80);
  movingRect.shapeColor = "yellow";

  topRect = createSprite(700,100,50,80);
  topRect.shapeColor = "Red";

  bottomRect = createSprite(700,700,50,80);
  bottomRect.shapeColor = "white";

  topRect.velocityY = 5;
  bottomRect.velocityY = -5;
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // -------------- isTouching Logic---------------

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && // detecting touch from right
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && // detecting touch from left
    fixedRect.y-movingRect.y< movingRect.height/2 +fixedRect.height/2 &&// detecting touch from bottom
    movingRect.y-fixedRect.y< fixedRect.height/2 +movingRect.height/2)// detecting touch from top
    {

  
      fixedRect.shapeColor = "teal";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "orange";
    movingRect.shapeColor = "yellow";
  }

  // -------------- Bounce Off Logic--------------

// detecting touch from top & bottom
  if(topRect.y - bottomRect.y < topRect.height/2 + bottomRect.height/2 &&
    bottomRect.y - topRect.y < topRect.height/2 + bottomRect.height/2){
      // topRect => down speed of 5 => +5 ..... up =>-5 * -1 = +5
      // bottomRect = > up -5 => ....... down  => +5 * -1 = -5
      topRect.velocityY = topRect.velocityY * (-1); // moving topRect in opposite top/bottom direction
      bottomRect.velocityY = bottomRect.velocityY * (-1);// moving bottomRect in opposite top/bottom direction
 }
 // detecting touch from left & right
if(topRect.x - bottomRect.x < topRect.width/2+bottomRect.width/2 &&
  bottomRect.x-topRect.x < topRect.width/2+bottomRect.width/2){
    topRect.velocityX =topRect.velocityX*(-1) ;// moving topRect in opposite left/rigth direction
    bottomRect.velocityX =bottomRect.velocityX *(-1);// moving bottomRect in opposite left/right direction
  }
  
  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}