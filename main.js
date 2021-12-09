leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(600, 580);
    canvas.position(700, 120);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(75, 150);
    poseNet = ml5.poseNet(video, poseLoad);
    poseNet.on('pose', gotPoints);
}

function poseLoad() {
    console.log("PoseNet is operating");
}

function draw() {
    background("#9ca09c");
    fill("#e31c1e");
    stroke("#e31c1e");
    textSize(difference);
    text('Jeevesh', 720, 140);
}

function gotPoints(outcomes) {
    if(outcomes.length > 0) {
        console.log(outcomes);
        leftWristX = outcomes[0].pose.leftWrist.x;
        rightWristX = outcomes[0].pose.rightWrist.x;
        console.log("Left wrist x = " + leftWristX);
        console.log("Right wrist x = " + rightWristX);
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Difference = " + difference);
    }
}