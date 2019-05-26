weather = "summer";
let grasscolor = "#6ac433";
let grassEatercolor = "orange";
let gishatichcolor = "red";
let kerpar1color = "blue";
let kerpar2color = "yellow";
let kerpar3color = "#306768";

function setup() {
    frameRate(30);

    var side = 30;
    var matrix = [];
    //! Getting DOM objects (HTML elements)
    var socket = io();
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishatichCountElement = document.getElementById('gishatichCount');
    let kerpar1CountElement = document.getElementById('kerpar1Count');
    let kerpar2CountElement = document.getElementById('kerpar2Count');
    let kerpar3CountElement = document.getElementById('kerpar3Count');
    let sumbutton = document.getElementById('summer');
    let winbutton = document.getElementById('winter');


    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;

        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        gishatichCountElement.innerText = data.gishatichCounter;
        kerpar1CountElement.innerText = data.kerpar1Counter;
        kerpar2CountElement.innerText = data.kerpar2Counter;
        kerpar3CountElement.innerText = data.kerpar3Counter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color

        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)
        background('#acacac');

        sumbutton.onclick = function () {
            weather = "summer";
            grasscolor = "#6ac433";
            grassEatercolor = "orange";
            gishatichcolor = "red";
            kerpar1color = "blue";
            kerpar2color = "yellow";
            kerpar3color = "#306768";
        }

        winbutton.onclick = function () {
            weather = "winter";
            grasscolor = 'white';
            grassEatercolor = "#e0e2e5";
            gishatichcolor = "#0b61ea";
            kerpar1color = "#0a3d91";
            kerpar2color = "#e1e6ef";
            kerpar3color = "#94aace";

        }
        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill(grasscolor);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill(grassEatercolor);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 0) {
                    fill("#acacac");
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 3) {
                    fill(gishatichcolor);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill(kerpar1color);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill(kerpar2color);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill(kerpar3color);
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }

}


