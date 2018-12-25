let ln;
let nums, nums2;
let i, j;
let begin, end, mid;
let a, b;

function setup() {
    createCanvas(window.innerWidth, Math.min(800, window.innerHeight));
    colorMode(HSB);
    rectMode(CORNERS)
    frameRate(20);

    nums = gen_arr(20);
    ln = nums.length;
    nums2 = copyArr(nums, 0, ln);
    begin = 0;
    end = ln;
    // console.log(nums, nums2);
}

function draw() {
    if (end - begin < 2) {
        noLoop();
    } else {
        drawArr(nusms);
    }

}

function splitMerge(b, begin, end, a) {
    let mid = floor((end - begin) / 2);
    splitMerge(a, begin, mid, b);
    splitMerge(a, mid, end, b)
    merge(b, begin, mid, end, a);
}

function merge(a, begin, mid, end, b) {
    i = begin;
    j = end;

    for (let k = begin; k < end; k++) {
        if (i < mid && (j >= end || a[i] <= a[j])) {
            b[k] = a[i];
            i = i + 1;
        } else {
            b[k] = a[j];
            j = j + 1;
        }
    }
}

function copyArr(a, begin, end) {
    let b = [];
    for (let k = 0; k < end; k++) {
        b.push(a[k]);
    }
    return b;
}

function drawArr(arr) {
    background(0);
    for (let a = 0; a < arr.length; a++) {
        let dx = floor(width / arr.length);
        let dy = height / 250;
        let x = a * dx;
        let y = arr[a] * dy;
        fill(arr[a], 255, 255);
        noStroke();
        rect(x, height - y, x + dx, height);
    }
}