
song="";

function preload()
{
    song=loadSound("music.mp3");

}
scoreRightWrist=0;
scoreLeftWrist=0;

rightWristx=0;
rightWristy=0;

leftWristx=0;
leftWristy=0;


function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log("poseNet is initialized");



}


function play()
{
    song.play();
    song.setVolume(1);
    song.rate();

}

function draw()
{
    image(video,0,0,600,500);
}