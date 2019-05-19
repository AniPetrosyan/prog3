var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Kerpar2 extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 50;
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

getDirections(i1, i2) {
    this.newDirections();
    var found = [];
    for (var m in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == i1 || matrix[y][x] == i2 ) {
                found.push(this.directions[m]);
            }
        }
    }
    return found;
}

    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
    
        if (newCell) {
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
        //let fundCords2 = this.chooseCell(1);
        // let fundCords = fundCords1.concat(fundCords2);
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
    