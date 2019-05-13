class Kerpar1 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.multiply = 0;
      this.energy = 30;
      this.directions = [];
    }
    newDirections() {
      this.directions = [
        [this.x - 1, this.y - 1],
        [this.x + 1, this.y + 1],
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
  
  
        matrix[y][x] = 4;
        matrix[this.y][this.x] = 0;
  
  
        this.x = x;
        this.y = y;
  
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
  
        this.energy += 2;
  
  
        for (let i in cord) {
          if (x == cord[i].x && y == cord[i].y) {
            cord.splice(i, 1);
          }
        }
  
      }
  
      if (this.multiply == 20) {
        this.mul()
        this.multiply = 0;
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
  
  
        let norKerpar1 = new Kerpar1(x, y, this.index);
        kerpar1Arr.push(norKerpar1);
  
  
        matrix[y][x] = 4;
        this.multiply = 0;
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
  
  