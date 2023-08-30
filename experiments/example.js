function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  background(34, 39, 46, 40);
  noStroke();
  fill(108, 182, 255);

  push();
  translate(width / 2, height / 2);

  push();
  rotate(frameCount / 8);
  ellipse(25, 0, 50);
  pop();

  push();
  rotate(-frameCount / 10);
  ellipse(75, 0, 50);
  pop();

  push();
  rotate(frameCount / 12);
  ellipse(125, 0, 50);
  pop();

  push();
  rotate(-frameCount / 14);
  ellipse(175, 0, 50);
  pop();

  pop();
}
