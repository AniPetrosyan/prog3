/*module.exports = class Grass extends LiveFrom{
  constructor(x,y,ind){
    super(x,y,index);
  }
}
//mul
*/


class Grass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
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


  mul() {
    this.multiply++;
    if (this.multiply == 3) {
      let fundCords = this.chooseCell(0);
      let cord = random(fundCords);
      if (cord) {
        let x = cord[0];
        let y = cord[1];


        let norgrass = new Grass(x, y);
        grassArr.push(norgrass);


        matrix[y][x] = 1;
        this.multiply = 0;
      }
    }
  }

}

