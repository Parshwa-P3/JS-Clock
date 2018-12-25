let rez = 20;
let snake;
let w, h;


function setup() {
    createCanvas(1800, 800);
    w = width / rez; h = height / rez;
    frameRate(10);

    scale(rez);
    snake = new Snake();
}

function draw() {
    background(200);

    snake.update();
    snake.show();
}
