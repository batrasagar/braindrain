const Turtle = require("./turtle.js");

let str = "";
let fileName = "";
let blSave = false;

// node turtleStretch.js
// node turtleStretch.js t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5
// node turtleStretch.js --output=drawing.txt t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5

str = "t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5"; // taking default in case of no parameter.

if (process.argv.length == 3) {
  str = process.argv[2];
  blSave = false;
}

if (process.argv.length == 4) {
  let fileStr = process.argv[2];
  fileName = fileStr.split("=")[1];
  str = process.argv[3];
  blSave = true;
}

drawTurtle(str, fileName);

function drawTurtle(str, fName) {
  let arr = str.split("-");
  const flash = new Turtle(5, 5);
  for (a of arr) {
    switch (a.charAt(0)) {
      case "r":
        flash.right();
        break;
      case "l":
        flash.left();
        break;
      case "f":
        flash.forward(a.slice(1));
        break;
      default:
        break;
    }
  }
  if (blSave) {
    flash.print(fName);
  } else {
    flash.print();
  }
}
//---- Program ends here-----
