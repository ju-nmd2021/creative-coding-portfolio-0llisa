let ellipses = [];
let lines = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  stroke(255);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let w = random(20, 50);
    let h = random(10, 10);
    ellipses.push(new Ellipse(x, y, w, h));
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

class Ellipse {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    ellipse(this.x, this.y, this.w, this.h);
    stroke(255);
  }
}

class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  display() {
    line(this.x1, this.y1, this.x2, this.y2);
    stroke(255);
  }
}

function mouseClicked() {
  background(210);
  ellipses = [];
  lines = [];
  setup();
}
