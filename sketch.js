var numbers = [15, 22, 48, 37];
var habits = ["choice", "voice", "hustle", "grit", "growth"]
var j = 0;
function setup() {
  createCanvas(640, 480);
};

function draw() {
      background(0);
      
      for(var i = 0; i < 4; i++){
         stroke(255);
         fill(175);
         ellipse((i+1)*100,200,numbers[i],numbers[i]);
      }
    filll(255);
    textsize(50);
    text(habits[j], 230, 150);
}

function mousePressed(){
    j++;
    if(j==habits.length){
        j=0
    }
}