var capture;
var tracker;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(400, 400);
  capture.position(0, 0);

  var c = createCanvas(400, 400);
  c.position(0, 0);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);
}

function draw() {
  var p = tracker.getCurrentPosition();
  console.log(p);

  fill('#FFFF00');
  ellipse(p[62][0], p[62][1], 50, 50);
  //image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
}
