function setup() {
  createCanvas(480,800);
  ground = new Ground(400, 200, 50, 50);
}



function draw() {
  background(255,255,255);  
  drawSprites();
}