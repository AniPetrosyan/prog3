//! Setup function fires automatically
function setup() {
    frameRate(30);

    var side = 30;
    var matrix = [];

    /* var seasons = "winter";
     var weather = "winter";*/
    //! Getting DOM objects (HTML elements)
    var socket = io();
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let kerpar1CountElement = document.getElementById('kerpar1Count');
    let kerpar2CountElement = document.getElementById('kerpar2Count');
    let kerpar3CountElement = document.getElementById('kerpar3Count');


    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        /* weather = obj.s
         console.log(weather)*/

        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        kerpar1CountElement.innerText = data.kerpar1Counter;
        kerpar2CountElement.innerText = data.kerpar2Counter;
        kerpar3CountElement.innerText = data.kerpar3Counter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 0) {
                    fill("gray");
                    rect(j * side, i * side, side, side);
                }/*else if (matrix[i][j] == 0 && seasons == "spring") {
                    fill('#92f70e');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 0 && seasons == "summer") {
                    fill('#f9f972');
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 0 && seasons == "autumn") {
                    fill('#960c0c');
                    rect(j * side, i * side, side, side);
                } 
                else if (matrix[i][j] == 0 && seasons == "winter") {
                    fill('white');
                    rect(j * side, i * side, side, side);
                } */
                else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('yellow');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('purple');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
    //console.log(seasons);
}

socket.on("send data", drawCreatures)
function Fire() {
    socket.emit("fire")
}





