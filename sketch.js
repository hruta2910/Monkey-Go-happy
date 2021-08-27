
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, ObstaclesGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -3;
  
   FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  
}


function draw() {
  background("white");
  
  if(ground.x < 0){
     ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  obstacles();
  food();
  drawSprites();
  
  textSize(20);
  score = Math.ceil(frameCount/frameRate());
  fill("black");
  text("Survival Time " + score, 100,50);
  

}


function food(){
  
  if(frameCount % 80 === 0){
     banana = createSprite(600,250,40,10);
     banana.addImage("banana", bananaImage);
     banana.y = random(120,200);
     banana.velocityX = -3;
     banana.lifetime = 300;
     banana.scale = 0.1;
     monkey.depth = banana.depth + 1;
     FoodGroup.add(banana);
     
  }
  
  
  
  
  
}

function obstacles(){
  
  if(frameCount % 300 === 0){
      obstacle = createSprite(800,320,40,10);
      obstacle.addImage("obstacle", obstacleImage);
      obstacle.velocityX = -3;
      obstacle.lifetime = 300;
      obstacle.scale = 0.1;
      ObstaclesGroup.add(obstacle);
  }
  
}




