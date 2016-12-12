var drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 750; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(170, 170, 170);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
