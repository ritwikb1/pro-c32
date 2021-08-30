class Ball{
    constructor(x, y, r){
        var ball_options = {
            restitution: 0.3,
            friction: 0,
            density: 0.2
        }
        this.x = x
        this.y = y
        this.r = 40
        this.body = Bodies.circle(x, y, 20, ball_options)
        World.add(world, this.body)
        
    }
    show(){
        var pos = this.body.position;
        push();
        translate (pos.x, pos.y)
        ellipse(RADIUS)
        stroke(255);
        fill(127);
        ellipse(0,0,40,40);

        pop();
       
    }
}