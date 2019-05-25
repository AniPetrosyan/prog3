var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

grassArr = [];
grassEaterArr = [];
gishatichArr = [];
kerpar1Arr = [];
kerpar2Arr = [];
kerpar3Arr = [];
//fireArr: [],
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
gishatichHashiv = 0;
kerpar1Hashiv = 0;
kerpar2Hashiv = 0;
kerpar3Hashiv = 0;


/*seasons = ["winter", "spring", "summer", "autumn"];
weather = "winter";*/
var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich = require("./modules/gishatich.js");
var Kerpar1 = require("./modules/kerpar1.js");
var Kerpar2 = require("./modules/kerpar2.js");
var Kerpar3 = require("./modules/kerpar3.js");
var Fire = require("./modules/fire.js");
//seasons = ["spring", "summer", "autumn", "winter"];



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
        matrix[customY][customX] = 6;
    }
}
//matrixGenerator(60, 60, 40, 40, 60, 40, 40);
matrixGenerator(20, 8, 8, 8, 8, 8, 8);


//! Creating MATRIX -- END







//! SERVER STUFF  --  START

//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 6) {
                var kerpar3 = new Kerpar3(x, y);
                kerpar3Arr.push(kerpar3);
                kerpar3Hashiv++;
            }
            else if (matrix[y][x] == 5) {
                var kerpar2 = new Kerpar2(x, y);
                kerpar2Arr.push(kerpar2);
                kerpar2Hashiv++;
            }
            else if (matrix[y][x] == 4) {
                var kerpar1 = new Kerpar1(x, y);
                kerpar1Arr.push(kerpar1);
                kerpar1Hashiv++;
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
                gishatichHashiv++;
            }
            else if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
        }
    }
}
creatingObjects();


function burn() {
    grassArr = [];
    grassEaterArr = [];
    gishatichArr = [];
    kerpar1Arr = [];
    kerpar2Arr = [];
    kerpar3Arr = [];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            matrix[y][x] = 0;
            fill("red");
        }
    }
}

io.on('connection', function (socket) {
    io.sockets.emit("send matrix", matrix);
    socket.on("fire", burn);
});


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

        io.sockets.emit("send matrix", matrix);

    }


    /*function fire() {
        grassArr = [];
        grassEaterArr = [];
        gishatichArr = [];
        kerpar1Arr = [];
        kerpar2Arr = [];
        kerpar3Arr = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[0].length; x++) {
                matrix[x][y] = 0;
            }
        }
    }*/



    /*function cold() {
        seasons = "winter";
        weather();
    }*/

    /*seasons = "winter"
    
    io.on('connection', function (socket) {
        io.sockets.emit("send matrix", matrix);
        socket.on("fire", burn);
        //socket.on("start", cold);
       
    });
    
    function season() {
        if (seasons == "winter") {
            weather = "winter"
        }
        else if (seasons == "spring") {
            seasons = "spring"
        }
        else if (seasons == "summer") {
            seasons = "summer"
        }
        else if (seasons == "autumn") {
            seasons = "autumn"
        }
        io.sockets.emit('season', seasons)
    }
    setInterval(season, 1000);*/


    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEaterCounter: grassEaterHashiv,
        gishatichCounter: gishatichHashiv,
        kerpar1Counter: kerpar1Hashiv,
        kerpar2Counter: kerpar2Hashiv,
        kerpar3Counter: kerpar3Hashiv,

    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
}



setInterval(game, 1000);

