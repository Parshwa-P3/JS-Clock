class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 20;
        this.x_speed = floor(random(-30, 30));
        this.y_speed = floor(random(-30, 30));
    }

    update() {
        if(this.x < 0 || this.x > width) {
            this.x_speed *= -1;// random(-1.2,-0.8);
        }

        if(this.y < 0 || this.y > height){
            this.y_speed *= -1;// random(-1.2,-0.8);
        }

        this.x += this.x_speed;
        this.y += this.y_speed;
        // this.y_speed += gravity;

        // fill(0);
        // strokeWeight(2);
        // stroke(0);
        // ellipse(this.x,this.y,this.r);
    }
}
