var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Kerpar3 extends LiveForm {
  constructor(x, y) {
    super(x, y);
    this.life = 40;
  }
  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],

      [this.x - 2, this.y - 2],
      [this.x, this.y - 2],
      [this.x + 2, this.y - 2],
      [this.x - 2, this.y],
      [this.x + 2, this.y],
      [this.x - 2, this.y + 2],
      [this.x, this.y + 2],
      [this.x + 2, this.y + 2],

      [this.x - 3, this.y - 3],
      [this.x, this.y - 3],
      [this.x + 3, this.y - 3],
      [this.x - 3, this.y],
      [this.x + 3, this.y],
      [this.x - 3, this.y + 3],
      [this.x, this.y + 3],
      [this.x + 3, this.y + 3],

      [this.x - 4, this.y - 4],
      [this.x, this.y - 4],
      [this.x + 4, this.y - 4],
      [this.x - 4, this.y],
      [this.x + 4, this.y],
      [this.x - 4, this.y + 4],
      [this.x, this.y + 4],
      [this.x + 4, this.y + 4],

      [this.x - 5, this.y - 5],
      [this.x, this.y - 5],
      [this.x + 5, this.y - 5],
      [this.x - 5, this.y],
      [this.x + 5, this.y],
      [this.x - 5, this.y + 5],
      [this.x, this.y + 5],
      [this.x + 5, this.y + 5]

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
      kerpar3Hashiv++;
      let x = newCell[0];
      let y = newCell[1];
      matrix[y][x] = 6;

      let norKerpar3 = new Kerpar3(x, y);
      kerpar3Arr.push(norKerpar3);

      this.multiply = 0;
      this.life = 20;
    }
  }

  eat() {
    let fund1 = this.chooseCell(4);
    let fund2 = this.chooseCell(5);

    let fund = fund1.concat(fund2);

    let cord = random(fund)

    if (cord) {
      let x = cord[0];
      let y = cord[1];

      matrix[y][x] = 6;
      matrix[this.y][this.x] = 0;

      this.x = x;
      this.y = y;

      this.multiply++;

      this.life += 2;



      for (let i in kerpar1Arr) {
        if (x == kerpar1Arr[i].x && y == kerpar1Arr[i].y) {
          kerpar1Arr.splice(i, 1);
        }
      }
      for (let i in kerpar2Arr) {
        if (x == kerpar2Arr[i].x && y == kerpar2Arr[i].y) {
          kerpar2Arr.splice(i, 1);
        }
      }


      if (this.life >= 20) {
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
    let cord = random(fundCords1);

    if (cord) {
      let x = cord[0];
      let y = cord[1];


      matrix[y][x] = 6;

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

    for (let i in kerpar3Arr) {
      if (this.x == kerpar3Arr[i].x && this.y == kerpar3Arr[i].y) {
        kerpar3Arr.splice(i, 1)
      }
    }
  }
}
