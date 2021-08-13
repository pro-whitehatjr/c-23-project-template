class PlayerArrow {
  constructor(x, y, width, height) 
  {
    
  }

  shoot(archerAngle) 
  {
   
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
