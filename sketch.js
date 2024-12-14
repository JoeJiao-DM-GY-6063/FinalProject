let bg, audience1, audience2, tie, tow;
let offsetX = 0;
let winrange; //win
let tieshake = 0;

let mSerial;
let connectButton;

let bgm; // 背景音乐

function preload() {
  bg = loadImage("background.png"); 
  audience1 = loadImage("aud1.gif");
  audience2 = loadImage("aud2.gif"); 
  tie = loadImage("tie.png");
  tow = loadImage("tow.gif"); //mainplayer
  bgm = loadSound("bgm.mp3");
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

    //no hold button
    if (leftButton === 1 && lastLeftButton === 0) {
      offsetX -= 10;
      playBgm();
    } else if (rightButton === 1 && lastRightButton === 0) {
      offsetX += 10;
      playBgm();
    }

    lastLeftButton = leftButton;
    lastRightButton = rightButton;
  }
}

function playBgm() {
  if (!bgm.isPlaying()) {
    bgm.loop();
  }
}

function endGame(message) {
  noLoop();
  textSize(64);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text(message, width / 2, height / 4);
  setTimeout(resetGame, 7000); //7s restart
}

function resetGame() {
  offsetX = 0;
  if (bgm.isPlaying()) {
    bgm.stop();
  }
  playBgm(); //restart bgm
  loop();
}
