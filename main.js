noseX=0;
noseY=0;
difference = 0;
left_wristX = 0;
right_wristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("PoseNet is Initialised!");
}

function gotposes(results){
if(results > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+noseX + "noseY ="+noseY);
    
    left_wristX = results[0].pose.left_wrist.x;
    right_wristX = results[0].pose.right_wrist.x;

    difference = floor (left_wristX - right_wristX);
}
}
function draw(){
    background('#808080');
    fill('#880808');
    stroke('#0000FF');
    square(noseX, noseY, 100);
}