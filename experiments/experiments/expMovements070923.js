let position;
let velocity;
let acceleration;
let color1, color2;
let screenEnd=false;

function setup() {
  createCanvas(400, 400);
  position= createVector(0,200);
  velocity=createVector(20,0);
  acceleration=createVector(0.2);
  noStroke();

  
  ellipse1= new ellipseObj();
  rect1= new rectObj();
}

let ellipse1;
let rect1;


class ellipseObj{
  constructor(){
    
    this.color1 = color(248, 222, 126);
  this.color2 = color(255, 0, 0);
    this.position=createVector(80,80);
    this.velocity=createVector(0,2);
  }
    
  display() { let interColor = lerpColor(this.color1,this.color2, map(this.position.y, 0, height, 0, 1));
  fill(interColor);
      ellipse(this.position.x, this.position.y,60,60);
             
    }
  update(){
    if(this.position.x<0 || this.position.x>width){
      this.velocity.x*=-1;
      screenEnd = !screenEnd;
    }
    if(this.position.y<0 || this.position.y>height){
      this.velocity.y*=-1;
      
    }
    this.position.add(this.velocity);
  }
  }  

 class rectObj{
   constructor(){
     this.color1 = color(255, 0, 0);
this.position=createVector(ellipse1.position.x+200, ellipse1.position.y-25);
     this.velocity=createVector(0,5);
     this.color2 = color(0, 255, 0);
   }
   display(){
     let interColor = lerpColor(this.color1, this.color2, 0.5);
    
     
   rect(this.position.x, this.position.y, 50, 50);
     }
   update(){
    if(this.position.x<0 || this.position.x>width){
      this.velocity.x*=-1;
    }
    if(this.position.y<0 || this.position.y>height){
      this.velocity.y*=-1;
    }
    this.position.add(this.velocity);
  }
 }

function draw(){   
  screenEnd=false;
  if (ellipse1.position.y< 0 || ellipse1.position.y>width) { screenEnd=false;
  } else {
  screenEnd=true;}
  
if (screenEnd) {
  background(0,0,0);
} else{
  background(255,255,255)
}
  
  
  
  position.add(velocity);
  
  ellipse1.display();
 ellipse1.update()
  rect1.display();
  rect1.update();
  
}
