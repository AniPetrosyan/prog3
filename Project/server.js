/*var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is runninng")

}); */




//! Setting global arrays  --  START
grassArr = [];
grassEaterArr = [];
gishatichArr = [];
kerpar1Arr = [];
kerpar2Arr = [];
kerpar3Arr = [];
matrix = [];
//! Setting global arrays  -- END


//! Creating MATRIX -- START
let random = require('./modules/random');
function matrixGenerator(matrixSize, grass, grassEater, gishatichArr, kerpar1Arr, kerpar2Arr, kerpar3Arr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize)); // 0 - 39
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gishatichArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < kerpar1Arr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < kerpar2Arr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
    for (let i = 0; i < kerpar3Arr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(10, 5, 1, 2, 1, 1, 1);
//! Creating MATRIX -- END



//! Requiring modules  --  START
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich  = require("./modules/gishatich.js");
var Kerpar1 = require("./modules/kerpar1.js");
var Kerpar2  = require("./modules/kerpar2.js");
var Kerpar3  = require("./modules/kerpar3.js");

//! Requiring modules  --  END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
           if(matrix[y][x] == 6) {
                var kerpar3 = new Kerpar3(x, y);
                kerpar3Arr.push(kerpar3);
            } 
            else  if(matrix[y][x] == 5) {
                var kerpar2 = new Kerpar2(x, y);
                kerpar2Arr.push(kerpar2);
            } 
            else  if(matrix[y][x] == 4) {
                var kerpar1 = new Kerpar1(x, y);
                kerpar1Arr.push(kerpar1);
            } 
            else  if(matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            } 
           else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
        }
    }
}
creatingObjects();



function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (grassEaterArr[0] !== undefined) {
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    }
     if (gishatichArr[0] !== undefined) {
            for (var i in gishatichArr) {
                gishatichArr[i].eat();
            }
    }
    if (kerpar1Arr[0] !== undefined) {
        for (var i in kerpar1Arr) {
            kerpar1Arr[i].eat();
        }
}
 if (kerpar2Arr[0] !== undefined) {
    for (var i in kerpar2Arr) {
        kerpar2Arr[i].eat();
    }
}
if (kerpar3Arr[0] !== undefined) {
    for (var i in kerpar3Arr) {
        kerpar3Arr[i].eat();
    }
}
    //! Object to send
    let sendData = {
        matrix: matrix
    }
    
    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}

setInterval(game, 1000)
