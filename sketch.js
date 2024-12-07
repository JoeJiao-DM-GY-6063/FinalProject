let bg, audience1, audience2, tie, tow;
let offsetX = 0;
let winrange; //win
let tieshake = 0;

let mSerial;
let connectButton;

function preload() {
  bg = loadImage("background.png"); 
  audience1 = loadImage("aud1.gif");
  audience2 = loadImage("aud2.gif"); 
  tie = loadImage("tie.png");
  tow = loadImage("tow.gif");//mainplayer
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  winrange = width / 15; 

  
  mSerial = createSerial();
  connectButton = createButton("Connect");
  connectButton.position(width / 2 - 50, height / 2 - 20);
  connectButton.mousePressed(connectToSerial);
}

function draw() {

  background(255);
  image(bg, width / 2, height / 2, width, height);
  image(audience1, width / 4, height / 1.24, 600, 140);
  image(audience2, 3 * width / 4, height / 1.24, 600, 140);

  image(tow, width / 2 + offsetX, height / 1.25, 1000, 220);
  tieshake = sin(frameCount * 0.1) * 10; //tie
  image(tie, width / 2 + offsetX + tieshake, height / 1.2, 40, 80);

  //check win
  if (offsetX <= -winrange) {
    endGame("Red Wins!");
  } else if (offsetX >= winrange) {
    endGame("Yellow Wins!");
  }

  if (mSerial.opened() && mSerial.availableBytes() > 0) {
    receiveSerial();
  }
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    connectButton.hide();
  }
}

let lastLeftButton = 0;
let lastRightButton = 0;

function receiveSerial() {
  let line = mSerial.readUntil("\n").trim();
  if (!line) return;

  let buttons = line.split(",");
  if (buttons.length === 2) {
    let leftButton = int(buttons[0]);
    let rightButton = int(buttons[1]);

    //no hold
    if (leftButton === 1 && lastLeftButton === 0) {
      offsetX -= 10;
    } else if (rightButton === 1 && lastRightButton === 0) {
      offsetX += 10;
    }

    lastLeftButton = leftButton;
    lastRightButton = rightButton;
    }
  }


function endGame(message) {
  noLoop();
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text(message, width / 2, height / 4);
  setTimeout(resetGame, 3000); //3s restart
}

function resetGame() {
  offsetX = 0;
  loop();
}
