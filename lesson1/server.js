let arrays = require('./modules/arrays');
let LiveForm = require("./modules/LiveForm.js");
let Grass = require("./modules/Grass.js");
let EatGrass = require("./modules/eatGrass.js");


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


function creatingObjcets(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
    
          if (matrix[y][x] == 5) {
            let kerpar2 = new Kerpar2(x, y);
            kerpar2Arr.push(kerpar2);
          }
          else if (matrix[y][x] == 4) {
            let kerpar1 = new Kerpar1(x, y);
            kerpar1Arr.push(kerpar1);
          }
          else if (matrix[y][x] == 3) {
            let gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);
          }
    
          else if (matrix[y][x] == 2) {
            let eatergrass = new Eatergrass(x, y);
            eaterArr.push(eatergrass);
          }
          else if (matrix[y][x] == 1) {
            let grass = new Grass(x, y);
            grassArr.push(grass);
          }
        }
    
      }
    }

creatngObjects();

/*function game(){
for(var i in arrays.xotArr){
    arrays.xotArr[i].mul();
}
for(var i in arrays.eatArr){
    arrays.eatArr[i].eat();
}
io.sockets.emit('inch vor anun', matrix);
}

io.on("connection"), function(socket){
    setInterval(game,10)
});*/



    for (let i in grassArr) {
        grassArr[i].mul();
      }

      for (let i in eaterArr) {
        eaterArr[i].eat();
      }
    
      for (let i in gishatichArr) {
        gishatichArr[i].eat();
      }
      for (let i in kerpar1Arr) {
        kerpar1Arr[i].eat();
      }
      for (let i in kerpar2Arr) {
        kerpar2Arr[i].eat();
      }
    
    
io.sockets.emit("inch vor anun", matrix)

/*io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", messages[i]);
    }
    console.log(socket);
    
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
 });*/
