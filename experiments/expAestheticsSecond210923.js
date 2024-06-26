// Lab 4
let ellipses = [];
let lines = [];

class Ellipse {
  constructor(x, y, w, h, filled) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.filled = filled;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(255, 200);
  }

  display() {
    noStroke();
    if (this.filled) {
      fill(this.r, this.g, this.b, this.alpha);
      ellipse(this.x, this.y, this.w, this.h);
    } else {
      stroke(255);
      noFill();
      ellipse(this.x, this.y, this.w, this.h);
    }
  }
}

class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
    this.r = 0;
    this.g = 0;
    this.b = 255;
  }

  display() {
    line(this.x1, this.y1, this.x2, this.y2);
    stroke(this.r, this.g, this.b);
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  stroke(255);

  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(20, 50);
    let h = 10;
    ellipses.push(new Ellipse(x, y, w, h, false));
  }

  for (let i = 0; i < 90; i++) {
    let x3 = random(width);
    let y3 = random(height);
    let w3 = 310;
    let h3 = 10;
    ellipses.push(new Ellipse(x3, y3, w3, h3, true));
  }

  for (let i = 0; i < 50; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    lines.push(new Line(x1, y1, x2, y2));
  }
}
function draw() {
  background(210);
  for (let ellipseObj of ellipses) {
    ellipseObj.display();
  }

  for (let lineObj of lines) {
    lineObj.display();
  }
}

function mouseClicked() {
  background(210);
  ellipses = [];
  lines = [];
  setup();
}
