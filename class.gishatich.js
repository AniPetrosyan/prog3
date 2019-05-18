class Gishatich {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.multiply = 0;
      this.energy = 20;
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
      let fundCords = this.chooseCell(1);
      let cord = random(fundCords);
  
      if (cord) {
        let x = cord[0];
        let y = cord[1];
  
  
        matrix[y][x] = 3;
        matrix[this.y][this.x] = 1;
  
  
        this.x = x;
        this.y = y;
  
      }
    }
  
    eat() {
      let fundCords = this.chooseCell(2);
      let cord = random(fundCords);
  
  
      if (cord) {
        let x = cord[0];
        let y = cord[1];
  
  
        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;
  
  
        this.x = x;
        this.y = y;
  
  
        this.multiply++;
  
        this.energy += 2;
  
  
        for (let i in grassEaterArr) {
          if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
            grassEaterArr.splice(i, 1);
          }
        }
  
        if (this.multiply == 15) {
          this.mul()
          this.multiply = 0;
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
  
    mul() {
  
      let fundCords = this.chooseCell(0);
      let cord = random(fundCords);
  
  
      if (cord) {
        let x = cord[0];
        let y = cord[1];
        this.multiply++;
  
        let norGishatich = new Gishatich(x, y, this.index);
        gishatichArr.push(norGishatich);
  
        matrix[y][x] = 3;
        this.multiply = 0;
      }
    }
    die() {
  
      matrix[this.y][this.x] = 0;
  
      for (let i in gishatichArr) {
        if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
          gishatichArr.splice(i, 1);
        }
      }
    }
  
  
  }
  
  