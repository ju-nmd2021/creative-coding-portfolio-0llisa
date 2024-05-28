n = 190;
let dMin = 110;
let p = Array(n);

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < n; i = i + 1) {
    p[i] = new Particle(random(0, width), random(0, height));
  }
}

function draw() {
  background(218, 247, 166);
  noStroke();
  fill(207, 159, 255);

  for (let i = 0; i < n; i = i + 1) {
    p[i].update();
    p[i].draw();
  }

  for (let i = 0; i < n; i = i + 1) {
    let pi = p[i];
    for (let j = i + 1; j < n; j = j + 1) {
      let pj = p[j];
      let d = dist(pi.x, pi.y, pj.x, pj.y);
      if (d < dMin) {
        stroke(207, 159, 255);
        line(pi.x, pi.y, pj.x, pj.y);
      }
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.friction = 0.99;
  }

  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(0, width);
      this.y = random(0, height);
      this.vx = random(-1, 1);
      this.vy = random(-1, 1);
    }
  }

  draw() {
    ellipse(this.x, this.y, 8);
  }
}
