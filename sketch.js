// setup() is called once at page-load
function setup() {
    width = 1000;
    height = 790;
    createCanvas(width, height); // make an HTML canvas element width x height pixels

    radius = 15;
    bucketHeight = 150;
    tubeHeight = 400;
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(255);
    fill(156, 211, 219);

    hour_height = map(hr, 0, 23, 0, bucketHeight);
    min_height = map(min, 0, 59, 0, tubeHeight);

    // hour
    line(50, height, 50, height - bucketHeight);
    line(width - 50, height, width - 50, height - bucketHeight);
    rect(50, height - hour_height, width - 100, hour_height);
    line(50, height - 1, width - 50, height - 1);

    // second
    circle(width / 2, map(sec, 0, 59, radius, height - min_height - 200 - radius), radius * 2);

    // animation
    if (sec == 0 && min == 0) {
        translate(width, 0);
        rotate(HALF_PI);
    }

    // minute
    line(width / 2 - 50, height - 200, width / 2 - 50, height - 200 - tubeHeight);
    line(width / 2 + 50, height - 200, width / 2 + 50, height - 200 - tubeHeight);
    rect(width / 2 - 50, height - 200 - min_height, 100, min_height);
    line(width / 2 - 50, height - 200, width / 2 + 50, height - 200);
}
