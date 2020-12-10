class Ball {
    constructor(x, y) {
      var options = {
         restitution:0.8,
         friction:0.3,
         density:1.0
      }
      this.body = Bodies.circle(x, y, 60, options);
      this.r=60;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("pink");
      ellipse(0, 0,60,60);
      pop()
    }
  };
  