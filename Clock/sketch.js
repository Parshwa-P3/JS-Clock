let day, mon, yr, hr, min, sec;
let hr_a, min_a, sec_a;
let hr_x, hr_y, min_x, min_y, sec_x, sec_y;

function setup() {
	createCanvas(600, 600);
	frameRate(1);
	angleMode(DEGREES);
}

function draw() {
	background(20);
	translate(width / 2, height / 2);
	rotate(-90);

	hr = hour();
	hr = hr > 12 ? (hr - 12) : hr;
	min = minute();
	sec = second();

	hr_a = floor(hr * 360 / 12);
	min_a = floor(min * 360 / 60);
	sec_a = floor(sec * 360 / 60);

	hr_x = cos(hr_a) * (width / 2) * 0.5;
	hr_y = sin(hr_a) * (height / 2) * 0.5;
	min_x = cos(min_a) * (width / 2) * 0.8;
	min_y = sin(min_a) * (height / 2) * 0.8;
	sec_x = cos(sec_a) * (width / 2) * 0.9;
	sec_y = sin(sec_a) * (height / 2) * 0.9;

	strokeWeight(4);
	stroke(0, 0, 255, 200);
	line(0, 0, sec_x, sec_y);

	strokeWeight(6);
	stroke(0, 255, 0, 200);
	line(0, 0, min_x, min_y);

	strokeWeight(8);
	stroke(255, 0, 0, 200);
	line(0, 0, hr_x, hr_y);

	stroke(255);
	noFill();
	ellipse(0, 0, width, width);
	strokeWeight(12);
	point(0, 0);
}