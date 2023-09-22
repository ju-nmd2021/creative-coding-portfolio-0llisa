let t =0;
let noiseScale=0.02;
let radiusNoise=0.1;

function setup(){
  createCanvas(600,600);
  noFill();
  stroke(255);
}

function draw(){
  t+=0.01;
  background(0,100,230);
  for(let x=0; x<width; x+=30){
    for(let y=0; y<height; y+=30){
      let noiseValue=noise(x*noiseScale,y*noiseScale,t);
      let radiusNoiseValue=noise(x*radiusNoise, y*radiusNoise,t);
      let radius=map(noiseValue,0,1,10,40);
      radius+=map(radiusNoiseValue,0,1,-5,5);
    ellipse(x,y,radius*2,radius*2);
    }
  }
}
