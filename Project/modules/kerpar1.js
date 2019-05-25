var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Kerpar1 extends LiveForm {
  constructor(x, y) {
    super(x, y);
    this.life = 30;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x + 1, this.y + 1],
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
      kerpar1Hashiv++;
      let x = newCell[0];
      let y = newCell[1];
      matrix[y][x] = 4;

      let norKerpar1 = new Kerpar1(x, y);
      kerpar1Arr.push(norKerpar1);

      this.multiply = 0;
      this.life = 10;
    }
  }

  eat() {
    let fund1 = this.chooseCell(2);
    let fund2 = this.chooseCell(3);

    let fund = fund1.concat(fund2);

    let cord = random(fund)

    if (cord) {
      let x = cord[0];
      let y = cord[1];

      matrix[y][x] = 4;
      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;

      this.multiply++;

      this.life += 2;


      for (let i in cord) {
        if (x == cord[i].x && y == cord[i].y) {
          cord.splice(i, 1);
        }
      }


      if (this.life >= 16) {
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
    let fundCords = this.chooseCell(0);
    let cord = random(fundCords);

    if (cord) {
      let x = cord[0];
      let y = cord[1];


      matrix[y][x] = 4;
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

    for (let i in kerpar1Arr) {
      if (this.x == kerpar1Arr[i].x && this.y == kerpar1Arr[i].y) {
        kerpar1Arr.splice(i, 1)
      }
    }
  }
}



