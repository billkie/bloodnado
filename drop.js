function Drop() {
  var widthOffset = 0.25,
      xSpeedMin = 0.5,
      xSpeedMax = 0.7,
      ySpeedMin = 1.0,
      ySpeedMax = 10.0;

  this.x = random(width) - (width * widthOffset);
  this.y = random(-1000, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 5, 30);
  this.angle = map(this.z, 0, 20, 4, 5);
  this.xspeed = map(this.z, 0, 20, xSpeedMin, xSpeedMax);
  this.yspeed = map(this.z, 0, 20, ySpeedMin, ySpeedMin);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
    var grav = map(this.z, 0, 20, 0.05, 0.3);
    var wind = map(this.z, 0, 20, 0.025, 0.075);
    this.xspeed = this.xspeed + wind;
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.splash();
      this.x = random(width) - (width * widthOffset);
      this.y = random(-1000, -50);
      this.xspeed = map(this.z, 0, 20, xSpeedMin, xSpeedMax);
      this.yspeed = map(this.z, 0, 20, ySpeedMin, ySpeedMin);
    }
    if (this.x > width) {
      this.x = random(width) - (width * widthOffset);
      this.y = random(-1000, -50);
      this.xspeed = map(this.z, 0, 20, xSpeedMin, xSpeedMax);
      this.yspeed = map(this.z, 0, 20, ySpeedMin, ySpeedMin);
    }
  }

  this.splash = function(){
    fill(3, 74, 236);
    ellipse(this.x, this.y, 15, 35);
  }
  this.show = function() {
    var thick = map(this.z, 0, 20, 1.0, 2.5);
    strokeWeight(thick);
    stroke(3, 74, 236);
    line(this.x, this.y, this.x+this.angle, this.y+this.len);

  }
}
