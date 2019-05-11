/*var clickCount = 0;
function clickHandler(evt){
   clickCount++;
   console.log(evt);
   var str = "Thanks for clicking " + clickCount;
   this.innerText = str;
}

var p = document.getElementById("pElement");
p.addEventListener("click", clickHandler); 



function bodyClick(evt){
    console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
 }
 window.onclick = bodyClick; */
 //Սա նույնն է, ինչ որ window.addEventListener("click", bodyClick);
 

 /*function bodyClick(evt) {
    console.log(evt.pageX, evt.pageY);
 }
 window.onclick = bodyClick;*/





/*function setup(){}
 function mouseClicked() {
    console.log(mouseX, mouseY);
 }


 function windowLoad() {
    console.log("Window is loaded");
 }
 window.onload = windowLoad;
 // .addEventListener("onload",windowLoad)
 
 function setup(){}
 function preload() {
    console.log("Window is loaded");
 }
 

 function click(evt) {
    console.log(evt.pageX, evt.pageY);
 }
 window.onclick = click;
 // .addEventListener("click", click);
 
 function setup(){}
 function mousePressed() {
    console.log(mouseX, mouseY);
 }
 

 function keydown(evt) {
    console.log("You printed " + evt.key);
 }
 window.onkeydown = keydown;
 // .addEventListener('keydown', keydown);
 
 function setup(){}
 function keyPressed() {
    console.log(key);
 }
 
 // setup(), draw() ...*/



 /*function keydown(evt) {
    console.log("You printed " + evt.key);
 }
 window.onkeydown = keydown;
 // .addEventListener('keydown', keydown);
 
 function setup(){}
 function keyPressed() {
    console.log(key);
 }*/
 




 function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   
