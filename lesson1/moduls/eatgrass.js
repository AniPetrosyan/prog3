/*var LiveForm = require("./LiveForm");
var arrays = require("./arrays.js");*/



/*function random(items){
  let item = item(Math.floor(Math.random()*item))
  return item;
}*/
/*module.exports = class Eatergrass extends LiveForm{
  constructor(x,y){
    super(x,y)
  }
} 
//move 
*/

class Eatergrass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.energy = 6;
    this.directions = [];
  }
  newDirections() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }

  chooseCell(t) {
    this.newDirections();
    let found = [];
    for (let i in this.directions) {
      let x = this.directions[i][0];
      let y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == t) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  move() {
    let fundCords = this.chooseCell(0);
    let cord = random(fundCords);

    if (cord) {
      let x = cord[0];
      let y = cord[1];


      matrix[y][x] = 2;
      matrix[this.y][this.x] = 0;


      this.x = x;
      this.y = y;

    }
  }


  eat() {
    let fundCords = this.chooseCell(1);
    let cord = random(fundCords);

    if (cord) {
      let x = cord[0];
      let y = cord[1];

      matrix[y][x] = 2;
      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;

      this.multiply++;
      this.energy++;


      for (let i in grassArr) {
        if (x == grassArr[i].x && y == grassArr[i].y) {
          grassArr.splice(i, 1);
        }
      }

      if (this.multiply == 10) {
        this.mul()
        this.multiply = 0;
      }
    }
    else {
      this.move();
      this.energy--;
      if (this.energy == 0) {
        this.die();
      }
    }
  }

  mul() {

    let fundCords = this.chooseCell(0);
    let cord = random(fundCords);


    if (cord) {
      let x = cord[0];
      let y = cord[1];
      this.multiply++;


      let norXotaker = new Eatergrass(x, y, this.index);
      eaterArr.push(norXotaker);


      matrix[y][x] = 2;
      this.multiply = 0;
    }
  }
  die() {

    matrix[this.y][this.x] = 0;

    for (let i in eaterArr) {
      if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
        eaterArr.splice(i, 1);
      }
    }
  }

}