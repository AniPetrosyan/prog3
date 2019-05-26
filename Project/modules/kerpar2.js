var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Kerpar2 extends LiveForm {
  constructor(x, y) {
    super(x, y);
    this.life = 40;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x + 1, this.y + 1],

      [this.x, this.y + 1],
      [this.x, this.y + 2],
      [this.x, this.y + 3],
      [this.x, this.y + 4],
      [this.x, this.y + 5],
      [this.x, this.y + 6],
      [this.x, this.y + 7],
      [this.x, this.y + 8],
      [this.x, this.y + 9],
      [this.x, this.y + 10],


      [this.x, this.y - 1],
      [this.x, this.y - 2],
      [this.x, this.y - 3],
      [this.x, this.y - 4],
      [this.x, this.y - 5],
      [this.x, this.y - 6],
      [this.x, this.y - 7],
      [this.x, this.y - 8],
      [this.x, this.y - 9],
      [this.x, this.y - 10],
    ];
  }
  chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
  }

  mul() {
    let emptyCells = this.chooseCell(0);
    let newCell = random(emptyCells);

    if (newCell) {
      kerpar2Hashiv++;
      let x = newCell[0];
      let y = newCell[1];
      matrix[y][x] = 5;

      let norKerpar2 = new Kerpar2(x, y);
      kerpar2Arr.push(norKerpar2);

      this.multiply = 0;
      this.life = 15;
    }
  }

  eat() {
    let fund1 = this.chooseCell(3);
    let fund2 = this.chooseCell(4);

    let fund = fund1.concat(fund2);

    let cord = random(fund)

    if (cord) {
      let x = cord[0];
      let y = cord[1];

      matrix[y][x] = 5;
      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;

      this.multiply++;

      this.life += 2;


      for (let i in gishatichArr) {
        if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
          gishatichArr.splice(i, 1);
        }
      }
      for (let i in kerpar1Arr) {
        if (x == kerpar1Arr[i].x && y == kerpar1Arr[i].y) {
          kerpar1Arr.splice(i, 1);
        }
      }


      if (this.life >= 17) {
        this.mul();
      }
    }
    else {
      this.move();
      this.energy -= 2;
      if (this.energy == 0) {
        this.die();
      }
    }
  }






  move() {
    let fundCords1 = this.chooseCell(0);
    let fundCords2 = this.chooseCell(1);
    let fundCords = fundCords1.concat(fundCords2);
    let cord = random(fundCords);

    if (cord) {
      let x = cord[0];
      let y = cord[1];


      matrix[y][x] = 5;

      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;

    }
    if (this.life < 0) {
      this.die();
    }
  }



  die() {

    matrix[this.y][this.x] = 0;

    for (let i in kerpar2Arr) {
      if (this.x == kerpar2Arr[i].x && this.y == kerpar2Arr[i].y) {
        kerpar2Arr.splice(i, 1)
      }
    }
  }
}



