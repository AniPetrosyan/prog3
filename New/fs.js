/*var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();*/


/* var fs = require('fs');

function main(){
   fs.writeFile("hello.txt", "Hello world\n", function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main(); */

var fs = require('fs');
var dummyText = "Apple yep";

function main() {
   fs.writeFileSync("dummytext.txt", dummyText);
   var text = fs.readFileSync("dummytext.txt").toString();
   console.log(dummyText == text);
   console.log(text);
   fs.writeFileSync("undummytext.txt",
       text.replace("Apple", "Microsoft")
   );
}
main();

