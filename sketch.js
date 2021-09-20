var iss, spacecraft;
var bg, issImg, scImg, scImg1, scImg2, scImg3;
var hasDocked = false;

function preload(){
  bg = loadImage("space.jpg");
  issImg = loadImage("iss.png");
  scImg = loadImage("spacecraft1.png");
  scImg1 = loadImage("spacecraft2.png");
  scImg2= loadImage("spacecraft3.png");
  scImg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);

  //creating the spacecraft
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scImg);
  spacecraft.scale = 0.15;
  
  //creating the iss
  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);

  //making the spacecraft 'hover'
  if(hasDocked === false){
    spacecraft.x = spacecraft.x + random(-1,1);

    //controls of the spacecraft
    // going up
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(scImg1);
    spacecraft.y = spacecraft.y -2;
  }
   //going left
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scImg3);
    spacecraft.x = spacecraft.x - 1;
  }
   //going right
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scImg2);
    spacecraft.x = spacecraft.x + 1;
  }
   //going down
  if(keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y + 2;
  }
}

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    var visibility = 255;

    textSize(25);
    fill("white")
   text("Docking Successful!", 200, 300)
  }

  drawSprites();
}

