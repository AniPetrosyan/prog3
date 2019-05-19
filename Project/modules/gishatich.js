var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Gishatich extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 10;
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
            [this.x + 1, this.y + 1]
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
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 3;

        let norGishatich = new Gishatich(x, y);
        gishatichArr.push(norGishatich);
  
        this.multiply = 0;
        this.life = 5;
    }
}

eat() {
    let emptyCells = this.chooseCell(2);
    let newCell = random(emptyCells);

    if (newCell) {

        this.life++;
        let x = newCell[0];
        let y = newCell[1];

        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;

        for (let i in grasseaterArr) {
            if (grasseaterArr[i].x == x && grasseaterArr[i].y == y) {
                grasseaterArr.splice(i, 1)
            }
        }
        this.x = x;
        this.y = y;

        if (this.life >= 13) {
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
        this.life--;
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 1;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in gishatichArr) {
            if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1)
            }
        }
    }
}






  
 
    
  
    
  