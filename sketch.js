var r, g, b, w, h;

function setup() {
  createCanvas(800, 600);

  background(0, 192, 200);

  ellipseMode(CENTER);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

}

function draw() {

  if (mouseIsPressed) {
    var d = sqrt((pmouseX - mouseX) * (pmouseX - mouseX) + (pmouseY - mouseY) * (pmouseY - mouseY));
    d = d * 0.5;

    r = random(0, 130);
    g = random(34, 0);
    b = random(100, 29);

    w = random(0, 200);
    h = random(200, 0);


    fill(r, g, b, 100);
    stroke(255, 255, 255, 200);

    ellipse(mouseX, mouseY, w, h); // x, y, w, h

    var f = d * 100.;
    osc.freq(f);
    osc.amp(0.5, 0.05); // turn up sine wave
  } else {
    osc.amp(0., 0.05); // turn down sine wave
  }


}

function keyReleased() {
  if (key == ' ') background(0, 192, 200);

}