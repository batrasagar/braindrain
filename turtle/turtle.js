const fs = require("fs");

module.exports = class Turtle {
  constructor(x, y) {
    this.sx = x || 0;
    this.sy = y || 0;
    this.x = x || 0;
    this.y = y || 0;
    this.minusX = 0;
    this.plusX = x + 1 || 1; // for orgin 0, Diffrential will be 1
    this.minusY = 0;
    this.plusY = y + 1 || 1;
    this.rotation = 0;
    this.arr = [];
    this.blockChar = "*";
    this.diffX = 0;
    this.diffY = 0;
    this.initArr(y + 1, x + 1); // for index =0 , lenght gonna 1
    this.moves = [];
    this.moves.push([this.y, this.x]);
  }

  /// initialising array as per given origin ---------
  initArr = function(rows, cols) {
    for (var i = 0; i < rows; i++) {
      this.arr.push([]);
      this.arr[i].push(new Array(cols));
      for (var j = 0; j < cols; j++) {
        this.arr[i][j] = " ";
      }
    }
    this.arr[rows - 1][cols - 1] = this.blockChar;
  };

  //-- Calculating Differential Length of array --------
  calcDiffrential() {
    this.diffX = this.plusX + this.minusX;
    this.diffX >= 1 ? this.diffX : this.diffX * -1;

    this.diffY = this.plusY + this.minusY;
    this.diffY >= 1 ? this.diffY : this.diffY * -1;

    this.diffX;
    this.diffY;
  }

  //---Push element in X (Row) Array---------------------
  pushArrX = function(n, direction) {
    this.calcDiffrential();
    //-------Appending Diffrential X array ------
    let oldRowLen = this.arr[0].length;
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i].push();
      for (var j = 0; j < this.diffX - oldRowLen; j++) {
        this.arr[i][oldRowLen + j] = " ";
      }
    }

    // ------  Filling Bolcks X(Rows)--------
    if (direction == 1) {
      for (var j = 1; j <= n; j++) {
        this.moves.push([this.x - n + j, this.y]);
        this.arr[this.y][this.x - n + j] = this.blockChar;
      }
    } else {
      for (var j = 1; j <= n; j++) {
        this.moves.push([this.x + j - 1, this.y]);
        this.arr[this.y][this.x + j - 1] = this.blockChar;
      }
    }
  };

  //---Push element in Y (Row) Array---------------------
  pushArrY = function(n, direction) {
    this.calcDiffrential();

    let oldColLen = this.arr.length;
    //-------Appending Diffrential Y (Cols)-array ------
    for (var i = 0; i < this.diffY - oldColLen; i++) {
      this.arr.push([]);
      for (var j = 0; j < this.arr[0].length; j++) {
        this.arr[oldColLen + i][j] = " ";
      }
    }

    // ------  Filling Bolcks Y(Cols)--------
    if (direction == 1) {
      for (var j = 1; j <= n; j++) {
        this.moves.push([this.x, this.y - n + j]);
        this.arr[this.y - n + j][this.x] = this.blockChar;
      }
    } else {
      for (var j = 1; j <= n; j++) {
        this.moves.push([this.x, this.y + n - 1]);
        this.arr[this.y + n - j][this.x] = this.blockChar;
      }
    }
  };

  //--- taking action according to rotation ---
  calcN = function(n) {
    switch (this.rotation) {
      case 0:
        this.x += n;
        this.plusX += n;
        this.pushArrX(n, 1);
        break;
      case 180:
        this.x -= n;
        this.minusX -= n;
        this.pushArrX(n, -1);
        break;
      case 90:
        this.y += n;
        this.plusY += n;
        this.pushArrY(n, 1);
        break;
      case 270:
        this.y -= n;
        this.minusY -= n;
        this.pushArrY(n, -1);
        break;
      default:
        break;
    }
  };

  // forward function ---
  forward = function(n) {
    n = parseInt(n);
    this.calcN(n);
    return this;
  };

  // right function ---
  right = function() {
    this.rotation += 90;
    this.rotation = this.rotation == 360 ? 0 : this.rotation;
    return this;
  };

  // left function ---
  left = function() {
    this.rotation -= 90;
    this.rotation = this.rotation < 0 ? 270 : this.rotation;
    return this;
  };

  // Print function displaying / saving output ---
  print = function(fName = "") {
    let fileData = "";
    for (var i = 0; i < this.arr.length; i++) {
      fileData = fileData.concat(this.arr[i].join(""), "\n");
    }
    if (fName == "") {
      // display on screen
      console.log(fileData);
    } else {
      // write file to disk !!
      fs.writeFile(fName, fileData, function(err) {
        if (err) {
          console.log("Could not write to file");
          console.error(err);
          return;
        } else {
          console.log("Drawing written to " + fName);
        }
      });
    }

    return this;
  };
  //  allPoints function  ---
  allPoints = function() {
    return this.moves;
  };
};

//---- Class ends here-----
