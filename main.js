noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;
function preload(){

}

function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,550);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX"+leftwristX+"rightwristX"+rightwristX+"difference"+difference);

    }
}

function draw(){
background("purple");
document.getElementById("square_side").innerHTML="SIDE OF THE SQUARE IS:"+difference;
fill("black");
stroke("black");
square(noseX,noseY,difference);
}