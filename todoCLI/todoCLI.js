//----Query Line No 47 --> this inside fsWrite/Read

const fs = require("fs");
const readline = require("readline");
const colors = require("colors");

module.exports = class todolist {
  //---Default Constructor ;
  constructor(fName) {
    this.fName = fName;
    this.arr = [];
    try {
      if (fs.existsSync(this.fName)) {
        let data = fs.readFileSync(this.fName, "utf8");
        this.arr = JSON.parse(data);
      }
    } catch (err) {
      console.error(err);
    }
  }

  //-----adding item into array ;
  addItem = function(item) {
    this.arr.push({ completed: false, title: item });
  };

  //----view the element -----
  viewItem = function() {
    return this.arr;
  };

  //---- deleting the array element -------
  deleteItem = function(i) {
    this.arr.splice(i, 1);
    console.log("Deleted");
    return;
  };

  //----function to Save list -----
  saveAllItem = function() {
    let data = JSON.stringify(this.arr);
    fs.writeFile(this.fName, data, function(err) {
      if (err) {
        console.log("Could not write to file");
        console.error(err);
        return;
      }
      // console.log(`List saved to ${this.fName}`);
      console.log(`List saved to file`);
      return;
    });
    return;
  };

  //---- function to complete task ----
  completeItem = function(i) {
    this.arr[i].completed = true;
    return;
  };
};
