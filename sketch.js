
var bg;
var rSlider, gSlider, bSlider;
var x = 1;
var y = 1;
var r = 0;
var a = 0;
var z = 0;
var song;
var sliderVolume;
var sliderRate;


function setup() {
    bg = loadImage("assets/background.png");
    background(bg);
      song = loadSound('assets/music.mp3');
      
  createCanvas(1366, 800);
    // create sliders
  rSlider = createSlider(0, 255, 0);
  rSlider.position(450, 140);
  gSlider = createSlider(0, 255, 255);
  gSlider.position(450, 180);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(450, 220);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position (20,20);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderRate.position (20,60);


}


function draw() {


rectMode(CORNER);

fill(0);

rect(0,0,1366,800);
image(bg, 0, 0);
text('click to play/pause and slide for volume', sliderVolume.x * 2 + sliderVolume.width, 35);
text('click to play/pause and slide for speed', sliderRate.x * 2 + sliderRate.width, 75);

function mousePressed() { getAudioContext().resume() }



  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill (r, g, b);
  rect(500,270,43,200,10);
  
  stroke(7,4,22);
  strokeWeight(35);
  if (mouseIsPressed === false) {
    line(mouseX, mouseY, pmouseX, pmouseY);
 //I    
  }

  
  // N1
 noStroke()
  if (mouseX > 260 && mouseX < 300 && 
       mouseY > 270 && mouseY < 470) {
  fill(255);
  rect(260,270, 40, 200,0,0,10,10);}
   else {
  fill(102);
    rect(260,270, 40, 200,0,0,10,10);
  }

  if (mouseIsPressed){
    fill(255);
  }
  else {
    fill(237,34,93);
  }
   quad(260, 270, 300, 270, 440, 468, 400, 470);
  


  
  fill(102);
  
  if (keyIsPressed === true){
    fill(25);
  } else {
    fill(255);
  }
 
  rect(400,270,43,200,10,10,10,0);
if (keyIsPressed === true){
    fill(237,34,93);
  } else {
    fill(25);
  }


   
rectMode(CENTER);
  translate(width/1.5, height/2.2);
  rotate(a);
  rect(0, 0, 170, 170,40);
  
  
  a = a + 0.03

fill(237,34,93);
    
  rotate(z);
  rect(0, 0, 80, 80,20);
  
  
  z = z + -0.05
}


{


function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause();
 
  } else {
    song.play();
     song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());

  }
}



  
}


 
 
 


