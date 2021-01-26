var bullet,wall,thickness;
var speed,weight;
var damage,rating;
var state="play";

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor="red";
}

function draw() {
  background(0);

  if(state==="play") {
    textSize(18);
    fill("brown");

    text("Press SPACE BAR.",570,50);

    if(keyDown("space")) {
      state="run";
    }
  }

  if(state==="run") {
    weight = Math.round(random(30,60));
    speed = Math.round(random(225,250));
    thickness = random(20,80);
    bullet.velocityX = speed;

  if(isTouching(bullet,wall)) {
    wall.width=thickness;

  //  bullet.velocityX=0;
    damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
     
    if(damage>10) {
    wall.shapeColor="blue";
 
    }

    if(damage<10) {
      wall.shapeColor="green";
    
    }

   
  }
  state="end";
}


    
     
    }
    if(state=="end"){
      textSize(20);
      text("Speed: "+speed+"km/h",200,50);
      text("Weight: "+weight+"kg",400,50);
      text("Thickness: "+Math.round(thickness),600,50);
    
      textSize(25);
      text("Rating: "+rating,1000,50);
      text("Damage: "+damage,800,50);
    
      text("Press 'R' to reset",1200,50);
      if(keyDown("r")) {
        reset();
    }
    
  

  drawSprites();
}


function isTouching(a,b){
  if (a.x-b.x < a.width/2+b.width/2
    && b.x-a.x <a.width/2+b.width/2){
      return true
    }
    else 
      return false;
}