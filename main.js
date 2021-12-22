function preload(){

}
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video, 100, 50, 300,300);
    tint(tint_color);
    fill(200,2,175);
    rect(100,50,10,300);
    rect(400,50,10,300);
    rect(100,50,300,10);
    rect(100,350,310,10);
    fill(255,0,255);
    circle(100,50,50);
    circle(400,50,50);
    circle(100,350,50);
    circle(400,350,50);
}
function take_snapshot(){
    save('tintselfie.png');
}
function applytint(){
    tint_color = document.getElementById("color_input").value;
    
}
