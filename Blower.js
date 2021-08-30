class Blower {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
        World.add(world, this.body)
    }
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }
    
  }