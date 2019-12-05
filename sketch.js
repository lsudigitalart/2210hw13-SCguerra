var maestro;
var threshold = 170;
var fft;
var notes = [];

function preload() {
  maestro = loadFont('MaestroP.ttf');
}

function setup() {
  createCanvas(windowWidth, 400);


  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  frameRate(30);
 
}

function draw() {
  clear();

  //top staff
  line(0, 70, windowWidth, 70);
  line(0, 85, windowWidth, 85);
  line(0, 100, windowWidth, 100);
  line(0, 115, windowWidth, 115);
  line(0, 130, windowWidth, 130);
  //bottom staff
  line(0, 170, windowWidth, 170);
  line(0, 185, windowWidth, 185);
  line(0, 200, windowWidth, 200);
  line(0, 215, windowWidth, 215);
  line(0, 230, windowWidth, 230);
  
  var spectrum = fft.analyze();
  console.log(threshold);

  textFont(maestro);
  textSize(50);

  

  if(fft.getEnergy(27.50) > threshold){
    name = "w"
    let a0 = new Note(name, windowWidth, 275)
    notes.push(a0);
  }
  else if(fft.getEnergy(29.14) > threshold){
    name = "mw"
    let as0 = new Note(name, windowWidth, 275)
    notes.push(as0);
  }
  else if(fft.getEnergy(30.87) > threshold){
    name = "w"
    let b0 = new Note(name, windowWidth, 267)
    notes.push(b0);
  }
  else if(fft.getEnergy(32.70) > threshold){
    name = "w"
    let c1 = new Note(name, windowWidth, 260)
    notes.push(c1);
  }
  else if(fft.getEnergy(34.65) > threshold){
    name = "mw"
    let cs1 = new Note(name, windowWidth, 260)
    notes.push(cs1);
  }
  else if(fft.getEnergy(36.71) > threshold){
    name = "w"
    let d1 = new Note(name, windowWidth, 252)
    notes.push(d1);
  }
  else if(fft.getEnergy(38.89) > threshold){
    name = "mw"
    let ds1 = new Note(name, windowWidth, 252)
    notes.push(ds1);
  }
  else if(fft.getEnergy(41.20) > threshold){
    name = "w"
    let e1 = new Note(name, windowWidth, 245)
    notes.push(e1);
  }
  else if(fft.getEnergy(43.65) > threshold){
    name = "w"
    let f1 = new Note(name, windowWidth, 237)
    notes.push(f1);
  }
  else if(fft.getEnergy(46.25) > threshold){
    name = "mw"
    let fs1 = new Note(name, windowWidth, 237)
    notes.push(fs1);
  }
  else if(fft.getEnergy(49.00) > threshold){
    name = "w"
    let g1 = new Note(name, windowWidth, 282)
    notes.push(g1);
  }
  else if(fft.getEnergy(51.91) > threshold){
    name = "mw"
    let gs1 = new Note(name, windowWidth, 282)
    notes.push(gs1);
  }
  else if(fft.getEnergy(55.00) > threshold){
    name = "w"
    let a1 = new Note(name, windowWidth, 275)
    notes.push(a1);
  }
  else if(fft.getEnergy(58.27) > threshold){
    name = "mw"
    let as1 = new Note(name, windowWidth, 275)
    notes.push(as1);
  }
  else if(fft.getEnergy(61.74) > threshold){
    name = "w"
    let b1 = new Note(name, windowWidth, 267)
    notes.push(b1);
  }
  else if(fft.getEnergy(65.41) > threshold){
    name = "w"
    let c2 = new Note(name, windowWidth, 260)
    notes.push(c2);
  }
  else if(fft.getEnergy(69.30) > threshold){
    name = "mw"
    let cs2 = new Note(name, windowWidth, 260)
    notes.push(cs2);
  }
  else if(fft.getEnergy(73.42) > threshold){
    name = "w"
    let d2 = new Note(name, windowWidth, 252)
    notes.push(d2);
  }
  else if(fft.getEnergy(77.78) > threshold){
    name = "mw"
    let ds2 = new Note(name, windowWidth, 252)
    notes.push(ds2);
  }
  else if(fft.getEnergy(82.41) > threshold){
    name = "w"
    let e2 = new Note(name, windowWidth, 245)
    notes.push(e2);
  }
  else if(fft.getEnergy(87.31) > threshold){
    name = "w"
    let f2 = new Note(name, windowWidth, 237)
    notes.push(f2);
  }
  else if(fft.getEnergy(92.50) > threshold){
    name = "mw"
    let fs2 = new Note(name, windowWidth, 237)
    notes.push(fs2);
  }
  else if(fft.getEnergy(98.00) > threshold){
    name = "w"
    let g2 = new Note(name, windowWidth, 230)
    notes.push(g2);
  }
  else if(fft.getEnergy(103.83) > threshold){
    name = "mw"
    let gs2 = new Note(name, windowWidth, 230)
    notes.push(gs2);
  }
  else if(fft.getEnergy(110.00) > threshold){
    name = "w"
    let a2 = new Note(name, windowWidth, 222)
    notes.push(a2);
  }
  else if(fft.getEnergy(116.54) > threshold){
    name = "mw"
    let as2 = new Note(name, windowWidth, 222)
    notes.push(as2);
  }
  else if(fft.getEnergy(123.47) > threshold){
    name = "w"
    let b2 = new Note(name, windowWidth, 215)
    notes.push(b2);
  }
  else if(fft.getEnergy(130.81) > threshold){
    name = "w"
    let c3 = new Note(name, windowWidth, 207)
    notes.push(c3);
  }
  else if(fft.getEnergy(138.59) > threshold){
    name = "mw"
    let cs3 = new Note(name, windowWidth, 207)
    notes.push(cs3);
  }
  else if(fft.getEnergy(146.83) > threshold){
    name = "w"
    let d3 = new Note(name, windowWidth, 200)
    notes.push(d3);
  }
  else if(fft.getEnergy(155.56) > threshold){
    name = "mw"
    let ds3 = new Note(name, windowWidth, 200)
    notes.push(ds3);
  }
  else if(fft.getEnergy(164.81) > threshold){
    name = "w"
    let e3 = new Note(name, windowWidth, 192)
    notes.push(e3);
  }
  else if(fft.getEnergy(174.61) > threshold){
    name = "w"
    let f3 = new Note(name, windowWidth, 185)
    notes.push(f3);
  }
  else if(fft.getEnergy(185.00) > threshold){
    name = "mw"
    let fs3 = new Note(name, windowWidth, 185)
    notes.push(fs3);
  }
  else if(fft.getEnergy(196.00) > threshold){
    name = "w"
    let g3 = new Note(name, windowWidth, 177)
    notes.push(g3);
  }
  else if(fft.getEnergy(207.65) > threshold){
    name = "mw"
    let gs3 = new Note(name, windowWidth, 177)
    notes.push(gs3);
  }
  else if(fft.getEnergy(220.00) > threshold){
    name = "w"
    let a3 = new Note(name, windowWidth, 170)
    notes.push(a3);
  }
  else if(fft.getEnergy(233.08) > threshold){
    name = "mw"
    let as3 = new Note(name, windowWidth, 170)
    notes.push(as3);
  }
  else if(fft.getEnergy(246.94) > threshold){
    name = "w"
    let b3 = new Note(name, windowWidth, 162)
    notes.push(b3);
  }
  else if(fft.getEnergy(261.63) > threshold){
    name = "w"
    let c4 = new Note(name, windowWidth, 155)
    notes.push(c4);
  }
  else if(fft.getEnergy(277.18) > threshold){
    name = "mw"
    let cs4 = new Note(name, windowWidth, 155)
    notes.push(cs4);
  }
  else if(fft.getEnergy(293.66) > threshold){
    name = "w"
    let d4 = new Note(name, windowWidth, 137)
    notes.push(d4);
  }
  else if(fft.getEnergy(311.13) > threshold){
    name = "mw"
    let ds4 = new Note(name, windowWidth, 137)
    notes.push(ds4);
  }
  else if(fft.getEnergy(329.63) > threshold){
    name = "w"
    let e4 = new Note(name, windowWidth, 130)
    notes.push(e4);
  }
  else if(fft.getEnergy(349.23) > threshold){
    name = "w"
    let f4 = new Note(name, windowWidth, 122)
    notes.push(f4);
  }
  else if(fft.getEnergy(369.99) > threshold){
    name = "mw"
    let fs4 = new Note(name, windowWidth, 122)
    notes.push(fs4);
  }
  else if(fft.getEnergy(392.00) > threshold){
    name = "w"
    let g4 = new Note(name, windowWidth, 115)
    notes.push(g4);
  }
  else if(fft.getEnergy(415.30) > threshold){
    name = "mw"
    let gs4 = new Note(name, windowWidth, 115)
    notes.push(gs4);
  }
  else if(fft.getEnergy(440.00) > threshold){
    name = "w"
    let a4 = new Note(name, windowWidth, 107)
    notes.push(a4);
  }
  else if(fft.getEnergy(466.16) > threshold){
    name = "mw"
    let as4 = new Note(name, windowWidth, 107)
    notes.push(as4);
  }
  else if(fft.getEnergy(493.88) > threshold){
    name = "w"
    let b4 = new Note(name, windowWidth, 100)
    notes.push(b4);
  }
  else if(fft.getEnergy(523.25) > threshold){
    name = "w"
    let c5 = new Note(name, windowWidth, 92)
    notes.push(c5);
  }
  else if(fft.getEnergy(554.37) > threshold){
    name = "mw"
    let cs5 = new Note(name, windowWidth, 92)
    notes.push(cs5);
  }
  else if(fft.getEnergy(587.33) > threshold){
    name = "w"
    let d5 = new Note(name, windowWidth, 85)
    notes.push(d5);
  }
  else if(fft.getEnergy(622.25) > threshold){
    name = "mw"
    let ds5 = new Note(name, windowWidth, 85)
    notes.push(ds5);
  }
  else if(fft.getEnergy(659.25) > threshold){
    name = "w"
    let e5 = new Note(name, windowWidth, 77)
    notes.push(e5);
  }
  else if(fft.getEnergy(698.46) > threshold){
    name = "w"
    let f5 = new Note(name, windowWidth, 70)
    notes.push(f5);
  }
  else if(fft.getEnergy(739.99) > threshold){
    name = "mw"
    let fs5 = new Note(name, windowWidth, 70)
    notes.push(fs5);
  }
  else if(fft.getEnergy(783.99) > threshold){
    name = "w"
    let g5 = new Note(name, windowWidth, 62)
    notes.push(g5);
  }
  else if(fft.getEnergy(830.61) > threshold){
    name = "mw"
    let gs5 = new Note(name, windowWidth, 62)
    notes.push(gs5);
  }
  else if(fft.getEnergy(880.00) > threshold){
    name = "w"
    let a5 = new Note(name, windowWidth, 55)
    notes.push(a5);
  }
  else if(fft.getEnergy(932.33) > threshold){
    name = "mw"
    let as5 = new Note(name, windowWidth, 55)
    notes.push(as5);
  }
  else if(fft.getEnergy(987.77) > threshold){
    name = "w"
    let b5 = new Note(name, windowWidth, 47)
    notes.push(b5);
  }
  else if(fft.getEnergy(1046.50) > threshold){
    name = "w"
    let c6 = new Note(name, windowWidth, 40)
    notes.push(c6);
  }
  else if(fft.getEnergy(1108.73) > threshold){
    name = "mw"
    let cs6 = new Note(name, windowWidth, 40)
    notes.push(cs6);
  }
  else if(fft.getEnergy(1174.66) > threshold){
    name = "w"
    let d6 = new Note(name, windowWidth, 32)
    notes.push(d6);
  }
  else if(fft.getEnergy(1244.51) > threshold){
    name = "mw"
    let ds6 = new Note(name, windowWidth, 32)
    notes.push(ds6);
  }
  else if(fft.getEnergy(1174.66) > threshold){
    name = "w"
    let e6 = new Note(name, windowWidth, 25)
    notes.push(e6);
  }

  for (let i = 0; i < notes.length; i++){
    notes[i].scroll();
    notes[i].show();
  }
}

class Note {
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
  }

  scroll(){
    this.x = this.x - 1;
  }

  show(){
    textFont(maestro);
    textSize(50);
    text(this.name, this.x, this.y);
    // else if (this.y > 230){
    //   for (var i = this.y; i > 230; i - 15)
    //   line(this.x - 5, i, this.x + 5, i)
    // }

  }

}


// function keyPressed() {
//     if (key == 1) {
//       threshold = 0;
//     } 
//     else if (key == 2){
//       threshold = 51;
//     }
//     else if (key == 3){
//       threshold = 102;
//     }
//     else if (key == 4){
//       threshold = 153;
//     }
//     else if (key == 5){
//       threshold = 204;
//     }
// }
