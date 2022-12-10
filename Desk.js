img ="";
status ="";

function back(){
    window.location ="index.html";
}

function preload(){
    img = loadImage('Desk.webp');
}

function setup(){
    canvas =createCanvas(640, 375); 
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects..."; 
}

function draw(){
    image(img,0,0,640,420);
}

function modelLoaded(){
    console.log("Model loaded!");
    status = true; 
    objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results); 
    }
}