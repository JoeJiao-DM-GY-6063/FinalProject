let bg, red1, yellow2, rope, tie, audience1, audience2;
let tieX;

function preload() {
  bg = loadImage("background.png");
  red1 = loadImage("red1.gif");
  yellow2 = loadImage("yellow2.gif");
  rope = loadImage("rope.png");
  tie = loadImage("tie.png");
  audience1 = loadImage("aud1.gif");
  audience2 = loadImage("aud2.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tieX = width / 2;
  imageMode(CENTER);
}

function draw() {
  background(255);
  image(bg, width / 2, height / 2, width, height);

  image(audience1, width / 4, height / 1.24, 600, 140);
  image(audience2, 3 * width / 4, height / 1.24, 600, 140);
//rope
  image(rope, width / 2, height / 1.24, width / 2, rope.height);
//red
  image(red1, width / 4, height / 1.32);
//yellow
  image(yellow2, 3 * width / 4, height / 1.32);
//tid
  image(tie, tieX, height / 1.18);

  tieX = width / 2 + sin(frameCount * 0.1) * 5;
}
