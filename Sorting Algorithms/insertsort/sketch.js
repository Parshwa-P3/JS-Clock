let nums;
let ln;
let i = 1;

function setup() {
    createCanvas(window.innerWidth, Math.min(800, window.innerHeight));
    colorMode(HSB);
    rectMode(CORNERS)
    frameRate(20);

    nums = gen_arr(200);
    console.log(nums);
    ln = nums.length;
}

function draw() {
    if (i <= ln) {
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

        let p = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > p) {
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = p;
        i = i + 1;
    } else {
        noLoop();
    }
}