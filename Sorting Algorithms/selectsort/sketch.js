let nums;
let ln;
let j = 0;
let temp;

let w, h;

function setup() {
    w = window.innerWidth;
    h = window.innerHeight;
    createCanvas(w, Math.min(800, h));
    colorMode(HSB);
    rectMode(CORNERS)
    frameRate(20);

    ln = floor(w / 2);
    nums = gen_arr(ln);
    console.log(nums);
}

function draw() {

    if (j <= ln - 1) {

        background(0);
        for (let a = 0; a < ln; a++) {
            let dx = floor(width / ln);
            let dy = height / 250;
            let x = a * dx;
            let y = nums[a] * dy;
            fill(nums[a], 255, 255);
            noStroke();
            rect(x, height - y, x + dx, height);
        }

        let minIndex = j;
        for (let i = j + 1; i < ln; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
        }

        if (minIndex != j) {
            temp = nums[j];
            nums[j] = nums[minIndex];
            nums[minIndex] = temp;
        }
        console.log(j);
        j++;
    } else {
        noLoop();
    }

}