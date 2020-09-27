
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  var monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=.1
  
  var ground = createSprite(400,350,900,10);
  ground.velocityX=-4
  
    
  
}

function draw(){
background("white");
drawSprites();
  //if(keyDown("space")){
    //  monkey.velocityY= -1;
   // }
      // if(ground.x<400){
     // ground.x = 300
   // }
    spawnobstacles() 
  spawnfood()
}
function spawnobstacles() {
   if (frameCount % 60 === 0) {
    var obstacles = createSprite(400,340); 
      obstacles.addImage(obstacleImage); 
     obstacles.scale=.1
     obstacles.velocityX=-4
   }
  
  



}
function spawnfood() {
   if (frameCount % 60 === 0) {
    var bananas = createSprite(400,250); 
      bananas.addImage(bananaImage); 
     bananas.scale=.1
     bananas.velocityX=-4
   }
  
  



}

