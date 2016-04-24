var capture;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(400, 400);
  capture.position(0, 0);

  var c = createCanvas(400, 400);
  c.position(0, 0);
}

function draw() {
  image(capture, 0, 0, width, width* capture.height / capture.width);
  filter(INVERT);
}
