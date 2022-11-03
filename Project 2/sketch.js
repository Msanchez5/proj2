//
// let x, y, radiusx, radiusy, speedx, speedy, start_time;
//
// function start() {
//   var x = 100;
//   var y = 650;
//   var radiusx = 25;
//   var radiusy = 50;
//   // var num= [1,2,3,4];
//   var speedx = 3;
//   var speedy = 3;
//   start_time = millis()
// }
var x = 100;
var y = 650;
var radiusx = 25;
var radiusy = 50;
// var num= [1,2,3,4];
//tried to make speed x and y random, but it would not run
var speedx = 3;
var speedy = 3;



function setup() {

  bad = loadSound('sound/Fail.mp3');
  good = loadSound('sound/good.mp3');
  // start();
  createCanvas(1000, 750);
  ellipseMode(RADIUS);
  bg = loadImage('image/back.jpg');

}
// function keyPressed() {
//     if (keyCode == RETURN) {
//         start();
//     }
// }
// background(bg);
function draw() {
  background(155);
  clear();

  if (mouseIsPressed) {
    if (y < random(0, 350)) {
      // speedx= -speed;
      speedy = -speedy;
    }
    x += speedx;
    y -= speedy;


    // rotate(angle);

  }

  strokeWeight(2);
  fill(251, 79, 20);
  // translate(ellipse(mouseX, mouseY, radiusx, radiusy));
  // rotate(cos(angle));
  ellipse(x, y, radiusx, radiusy);
  line(x-20,y-25,x+20,y-25);
  line(x-20,y+25,x+20,y+25);
  line(x,y-17,x,y+17);
  line(x-5,y-17,x+5,y-17);
  line(x-5,y+17,x+5,y+17);
  line(x-5,y,x+5,y);
  line(x-5,y-8.5,x+5,y-8.5);
  line(x-5,y+8.5,x+5,y+8.5);
  beginShape();
  strokeWeight(4);
  stroke(255, 255, 0);
  line(825, 75, 825, 550);
  line(825, 550, 745, 550);
  line(745, 550, 745, 75);
  stroke(0);
  strokeWeight(12);
  line(785, 550, 785, 750);
  endShape();


  // let score =0;
  if ((x > 785) & (y < 550)) {
    good.play();
    good.noloop();
    good.setVolume(0.3);
    speedx=0;
    speedy=0;
    // score+=3;
  } else if((x > 785) & (y > 550)){
    bad.play();
    good.stop();
    good.noloop();
    bad.noloop();
    bad.setVolume(0.3);
    speedx=0;
    speedy=0;
    // score=score;
  }
  //Score would only display during and not after it scored or not
  // fill(155);
  // textSize(30);
  // text('Score ', 50, 50);
  // text(score, 150, 50);

}
