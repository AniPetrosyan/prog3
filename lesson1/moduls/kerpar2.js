class Kerpar2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.multiply = 0;
      this.energy = 40;
      this.directions = [];
    }
    newDirections() {
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
      let fundCords1 = this.chooseCell(0);
      let fundCords2 = this.chooseCell(1);
      // let fundCords = fundCords1.concat(fundCords2);
      let cord = random(fundCords1);
  
      if (cord) {
        let x = cord[0];
        let y = cord[1];
  
  
        matrix[y][x] = 5;
  
        matrix[this.y][this.x] = 0;
  
        this.x = x;
        this.y = y;
  
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
  
        this.energy += 2;
  
  
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
  
      }
  
      if (this.multiply == 25) {
        this.mul()
        this.multiply = 0;
      }
  
  
      else {
        this.move();
        this.energy -= 2;
        if (this.energy <= 0) {
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
  
  
        let norKerpar2 = new Kerpar2(x, y, this.index);
        kerpar2Arr.push(norKerpar2);
  
  
        matrix[y][x] = 5;
        this.multiply = 0;
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
  