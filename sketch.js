var cat, mouse;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2;
var garden, gardenImg;

function preload() {
    
    tomImg1 = loadImage("tomOne.png");
    tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
    tomImg3 = loadImage("tomFour.png");
    jerryImg1 = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg2 = loadImage("jerryOne.png");
    jerryImg3 = loadImage("jerryFour.png");
    gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 800, 70, 70);    
    cat.addImage("catSitting", tomImg1);
    mouse = createSprite(200, 800, 70, 70);
    mouse.addImage(jerryImg1);
    garden = createSprite(500, 400);
    garden.addImage(gardenImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed(); 
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocity = -5;
    cat.addAnimation("catRunning", tomImg2);    
    mouse.addAnimation("jerryTeasing", jerryImg1);
  }

}