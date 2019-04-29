let side = 120;
let grassArr = [];
let eaterArr = [];
let gishatichArr = [];
let kerpar1Arr = [];
let kerpar2Arr = [];

let matrix = [
  [5, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 5],
  [0, 4, 1, 0, 4, 2, 0, 0, 1, 0, 0, 3, 2, 1, 1, 2, 2],
  [3, 1, 4, 2, 0, 1, 0, 0, 1, 0, 1, 1, 1, 4, 2, 1, 2],
  [2, 2, 0, 3, 0, 1, 0, 2, 1, 0, 1, 1, 1, 1, 3, 1, 1],
  [0, 4, 2, 0, 3, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 2],
  [0, 1, 3, 5, 0, 2, 2, 5, 1, 0, 0, 1, 1, 1, 1, 3, 1],
  [0, 0, 0, 3, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 3, 1, 0, 0, 1, 0, 0, 1, 1, 2, 1, 2, 1],
  [0, 1, 0, 0, 0, 1, 0, 4, 1, 0, 2, 1, 1, 1, 1, 2, 1],
  [0, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 4, 1, 1, 1],
  [2, 0, 2, 0, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1],
  [1, 2, 1, 4, 2, 1, 0, 1, 5, 2, 2, 4, 2, 1, 1, 1, 3],
]



function setup() {
  frameRate(1);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');


  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 5) {
        let kerpar2 = new Kerpar2(x, y);
        kerpar2Arr.push(kerpar2);
      }
      else if (matrix[y][x] == 4) {
        let kerpar1 = new Kerpar1(x, y);
        kerpar1Arr.push(kerpar1);
      }
      else if (matrix[y][x] == 3) {
        let gishatich = new Gishatich(x, y);
        gishatichArr.push(gishatich);
      }

      else if (matrix[y][x] == 2) {
        let eatergrass = new Eatergrass(x, y);
        eaterArr.push(eatergrass);
      }
      else if (matrix[y][x] == 1) {
        let grass = new Grass(x, y);
        grassArr.push(grass);
      }
    }

  }
}


function draw() {

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {


      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
        rect(x * side, y * side, side, side);
      }

      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("red");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill("blue");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill("purple");
        rect(x * side, y * side, side, side);
      }
    }
  }


  for (let i in grassArr) {
    grassArr[i].mul();

  }

  for (let i in eaterArr) {
    eaterArr[i].eat();
  }

  for (let i in gishatichArr) {
    gishatichArr[i].eat();
  }
  for (let i in kerpar1Arr) {
    kerpar1Arr[i].eat();
  }
  for (let i in kerpar2Arr) {
    kerpar2Arr[i].eat();
  }
}












