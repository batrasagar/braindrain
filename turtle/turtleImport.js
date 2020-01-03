const Turtle = require("./turtle.js");

const flash = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();
console.log(flash.allPoints());

//---- Program ends here-----
