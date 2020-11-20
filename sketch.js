
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup
var score
var gameState = "play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  ground = createSprite(200,380,400,10);
  monkey = createSprite(50,340,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  FoodGroup = new Group();
  ObstacleGroup = new Group();
  
  
}


function draw() {
 background(200);
  
  monkey.collide(ground);
  if(gameState==="play"){
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  if(monkey.isTouching(FoodGroup)){
    
    FoodGroup.destroyEach();
  }
   if(monkey.isTouching(ObstacleGroup)){
    
     gameState = "end";
  }
  
  spawnObstacle();
  spawnFood();
  drawSprites();
  }
  if(gameState==="end"){
    textSize(20);
    text("game over",160,200)
  }
  
}

function spawnFood(){
  
  if(frameCount%200===0){
    
    banana = createSprite(400,Math.round(random(80,200)))
    banana.addImage(bananaImage);
    banana.velocityX= -2;
    banana.scale = 0.1;
    FoodGroup.add(banana);
  }
}
function spawnObstacle(){
  
  if(frameCount%100===0){
    
    obstacle = createSprite(400,350);
    obstacle.addImage(obstaceImage);
   obstacle.velocityX= -2;
    obstacle.scale = 0.1;
    ObstacleGroup.add(obstacle);
  }
}




