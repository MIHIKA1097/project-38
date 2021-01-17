

var bow , arrow,arrowGroup,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redBGroup,blueBGroup,greenBGroup,pinkBGroup;
 var score=0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 redBGroup=new Group();
greenBGroup=new Group();
  blueBGroup=new Group();
  pinkBGroup=new Group();
  arrowGroup=new Group();
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  
  //moving bow
bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  if(arrowGroup.isTouching(redBGroup)){
     arrowGroup.destroyEach();
     redBGroup.destroyEach();
     score=score+2
     }
  if(arrowGroup.isTouching(blueBGroup)){
     arrowGroup.destroyEach();
     blueBGroup.destroyEach();
     score=score+4
     }
  if(arrowGroup.isTouching(greenBGroup)){
     arrowGroup.destroyEach();
     greenBGroup.destroyEach();
     score=score+3
     }
  if(arrowGroup.isTouching(pinkBGroup)){
     arrowGroup.destroyEach();
     pinkBGroup.destroyEach();
     score=score+1
     }
  
  
  
  
  
  drawSprites();
  text("SCORE: "+score,270,30);
}
for(var plr in allPlayers){
  //add 1 to the index for every loop
  index = index + 1 ;
  //use data form the database to display the cars in y direction
  y = displayHeight - allPlayers[plr].distance;
  arrow[index-1].x = x;
  arrow[index-1].y = y;

  if (index === player.index){
  ///  arrow[index - 1].shapeColor = "red";
    camera.position.x = displayWidth/2;
    camera.position.y = arrow[index-1].y
  }
 
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  redBGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkBGroup.add(pink);
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
  return arrow;
}

