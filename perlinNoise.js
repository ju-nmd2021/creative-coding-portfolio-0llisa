n = 190;
let dMin = 110;
let p = Array(n);
let noiseScale = 0.01;

function setup() {
  createCanvas(800, 800);
  background(94, 86, 90);
  angleMode(DEGREES);
  for (let i = 0; i < n; i = i + 1) {
    p[i] = new Particle(random(0, width), random(0, height));
  }
}

function draw() {
  noStroke();
  fill(247, 255, 88);

  for (let i = 0; i < n; i = i + 1) {
    p[i].update();
    p[i].draw();
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
    let n = noise(noiseScale * this.x, noiseScale * this.y);
    this.vx = cos(n * 360);
    this.vy = sin(n * 360);
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
