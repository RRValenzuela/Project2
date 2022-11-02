//red, green, and blue
let r, g, b;
let r1, g1, b1;

//circle size
let rad = 150;

// starting position of circle
let xpos, ypos;

// circle speed, higher number is faster
let xspeed = 3;
let yspeed = 3;

// L/R
let xdirection = 1;

// top/bottom
let ydirection = 1;

//browser window
var canvas;

//resizes canvas to fit in browser window, responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
//starts at absolute 0,0 position
  canvas.position(0,0);

//puts p5 animation behind html stuff
  canvas.style('z-index','-99');

//randomized colors
  r = random(255);
  g = random(255);
  b = random(255);

  r1 = random(255);
  g1 = random(255);
  b1 = random(255);

  frameRate(30);
  ellipseMode(RADIUS);
//set the starting position of the ellipse
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
//randomized background color
  background(r1, b1, g1, 255);

// circle
  noStroke();
  fill(r, g, b, 255);

//new position of ellipse
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

//test to see if circle exceeds screen
//if it does, reverse ellipse direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

//draw circle with 150 rad width
  ellipse(xpos, ypos, rad, rad);
}

//changes color of background and ellipse when mouse is pressed and is inside the circle
function mousePressed() {
//if mouse is inside the ellipse when mouse is pressed, change color
  let d = dist(mouseX, mouseY, xpos, ypos);
  if (d < 100) {

//random color values for background and ellipse
  r = random(255);
  g = random(255);
  b = random(255);

  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
  }
}
