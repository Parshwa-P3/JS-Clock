var ball;
// var gravity = 0.1;
var savedBalls = [];
var resetBtn;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // resetBtn = createButton("Reset","Reset");
    // resetBtn.position(800, 10);
    // resetBtn.mousePressed(reset);
    // strokeJoin(ROUND)
    reset();
}

function draw() {
    background(25);
    // for(i = 0; i < 5; i++) {

    ball.update();

    // if((frameCount%1) == 0){
        var arr = [];
        arr.push(ball.x);
        arr.push(ball.y);
        savedBalls.unshift(arr);
    // }

    stroke(255, 200);
    strokeWeight(2);
    noFill();// fill(255, 50);
    beginShape();
    for (state of savedBalls) {
        vertex(state[0], state[1]);
    }
    endShape();

    if(savedBalls.length > 500) {
        // for(var i = 0; i < 600; i++) {
            // savedBalls.splice(i, 1);
        // }
        savedBalls.pop();
    }
// }
    // textSize(20);
    // noStroke();
    // fill(255, 255, 0);
    // text("Ball X-Speed: " + (ball.x_speed - (ball.x_speed%1)), 5, 5, 400, 20);
    // text("Ball Y-Speed: " + (ball.y_speed - (ball.y_speed%1)), 400, 5, 400, 20);
    //
    // fill(255, 0, 255);
    // text("Ball X: " + (ball.x - (ball.x%1)), 5, 35, 400, 20);
    // text("Ball Y: " + (ball.y - (ball.y%1)), 400, 35, 400, 20);
    //
    // fill(0, 255, 255);
    // text("No. of Balls Saved: " + savedBalls.length, 5, 65, 1000, 20);

}

function reset() {
    ball = new Ball(width/2, height/4);
    savedBalls = [];
    frameCount = 0;
}
