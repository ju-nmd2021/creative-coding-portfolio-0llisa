let rects = [];
let cols = 10;
let rows = 60;
let spacing;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  stroke(0);
  spacing = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let n = 0; n < rows; n++) {
      let w = random(1, 7);
      let x1 = i * spacing;
      let y1 = n * spacing;
      let x2 = x1 + random(spacing / 2, -spacing / 2);
      let y2 = y1 + random(spacing / 2, -spacing / 2);
      rects.push(new lineA(x1, y1, x2, y2, w));
    }
  }
}

function draw() {
  background(255, 0, 0);
  stroke(0);

  for (let rectObj of rects) {
    rectObj.display();
  }
}

class lineA {
  constructor(x1, y1, x2, y2, w) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.w = w;
  }

  display() {
    line(this.x1, this.y1, this.x2, this.y2);
    strokeWeight(this.w);
  }
}

function mouseClicked() {
  background(255, 0, 0);
  rects = [];
  setup();
}
