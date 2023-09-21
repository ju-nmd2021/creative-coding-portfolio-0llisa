let position;
let velocity;
let acceleration;
let ellipse1;
let rect1;
let bckg = 255;

function setup(){
    createCanvas(innerWidth,innerHeight);
    position = createVector(0,200);
    velocity= createVector (60,0);
    acceleration = createVector(0.6);
    noStroke();

    ellipse1 = new ellipseObj();
    rect1 = new rectObj();
}

class ellipseObj{
    constructor(){
        this.position = createVector(80,80);
        this.velocity = createVector(0,5);
        this.color1 = color(248, 272, 0);
        this.color2 = color(255, 0, 0);
    }
//here I asked for gradient GPT chat
    display(){
let interColor = lerpColor(
    this.color1,
    this.color2,
    map(this.position.y,0, height, 0,1));
    fill(interColor);
    ellipse(this.position.x, this.position.y,90,90);

    }

    update(){
        if(this.position.x<0 || this.position>width){
            this.velocity.x *=-1;
        }
        if(this.position.y<0 || this.position.y>height){
            this.velocity.y *= -1;
        }
        this.position.add(this.velocity);
    }
}

class rectObj{
constructor(){
    this.position=createVector(ellipse1.position.x+200, ellipse1.position.y-25);
    this.velocity=createVector(2,7);
    this.color1=color(255,0,0);
    this.color2=color(0,255,0);
}
display(){
    let interColor=lerpColor(this.color1, this.color2,
                          map(this.position.x,0, width, 0, 1));
    fill(interColor);
    rect(this.position.x, this.position.y,90,130);
}
update() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
    this.position.add(this.velocity);
  }
}
function draw(){
    background(bckg);
    position.add(velocity);

    ellipse1.display();
    ellipse1.update();
    rect1.display();
    rect1.update();

    if (ellipse1.position.y - 5 <= 0) {
        bckg = 0; 
      } else if (ellipse1.position.y + 5 >= height) {
        bckg = 255; 
      }
}
