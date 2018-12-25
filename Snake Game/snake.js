class Snake {
    constructor() {
        this.body = [];
        this.body.push(createVector(floor(w / 2), floor(h / 2)));
        this.xspd = 1;
        this.yspd = 0;
    }

    update() {
        this.body[this.body.length - 1].x += this.xspd;
        this.body[this.body.length - 1].y += this.yspd;

        if(this.body[this.body.length - 1].x >= w || this.body[this.body.length - 1].x <= 0) {
            this.xspd *= -1;
        }

        console.log(this.body[this.body.length - 1].x, this.body[this.body.length - 1].y);
    }

    show() {
        noStroke();
        fill(0, 0, 255);
        for(let i = 0; i < this.body.length; i++) {
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    }


}
