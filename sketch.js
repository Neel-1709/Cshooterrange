var score =0;
var gun,bluebubble,redbubble, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 700);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueB = createGroup();   
  redB = createGroup();   
  
  score = 0;
 life = 5;
}



function draw() {
  background("#BDA297");

  //display Score and number of lifes

  if(gameState===1){
    gun.y=mouseY  

    if (keyDown("space")) {
      createBullet();
    }
    if (bulletGroup.isTouching(redB)) {
      redB.destroyEach();
      bulletGroup.destroyEach();
      score=score+1;
    }
    if (bulletGroup.isTouching(blueB)) {
      blueB.destroyEach();
      bulletGroup.destroyEach();
      score=score+1;
    }
    
    if (redB.isTouching(backBoard)) {
      red.destroyEach();
      
      life=life -1;
    }
    if (blueB.isTouching(backBoard)) {
      blueB.destroyEach();
      
      life=life-1;
    }
    if (life = 0) {
      Gameover();
      
    }
  } 
      createRedBubble()
      createBlueBubble()
    drawSprites();
    textSize(20);
  fill(255);
  text("Score: "+ score,150,30)
  
  }
  



function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = 150;
  bullet.y=gun.y -20;
  bullet.velocityX = 16;
  bullet.lifetime = 100;
  bullet.scale = 0.1
  bulletGroup.add(bullet);
}


function createRedBubble() {
  if (World.frameCount % 200 == 0) {
  var red = createSprite(800,Math.round(random(50,6500), 10, 10));
  red.addImage(redBubbleImg);
  red.scale=0.12;
  red.velocityX = -4;
  red.lifetime = 300;
  redB.add(red);
  }
}
function createBlueBubble() {
  if (World.frameCount % 150 == 0) {
  var blue = createSprite(800,Math.round(random(50,650), 10, 10));
  blue.addImage(blueBubbleImg);
  blue.scale=0.1;
  blue.velocityX = -4;
  blue.lifetime = 300;
  blueB.add(blue);
  }
}



function destroy(){
  if(bulletGroup.isTouching(redB)){
    redB.destroyEach();
    bulletGroup.destroyEach();
   
  }
 
  if(arrowsGroup.isTouching(blueB)){
    blueB.destroyEach();
    bulletGroup.destroyEach();
   
 
  }
  
}

function Gameover(){
swal({
  title: `Game Over`,
  text: "Oops you lost....!!!",
  imageUrl:
    "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
  imageSize: "100x100",
  confirmButtonText: "Thanks For Playing"
});
}

