#! /usr/bin/env node
const arrNames = [];
let maxlen = 0;

const arrMaxColLen = [];

const arrCells = [];

if (process.argv[2].includes(".csv")) {
  ProcessCSV(process.argv[2]);
} else {
  fetchArrayM(process.argv.slice(2));
  topborder(maxlen);
  printNames(arrNames);
  bottomborder(maxlen);
}

/////////////////////////////////////////

function ProcessCSV(fName) {
  var fs = require("fs");
  fs.readFile(fName, "utf8", function(err, data) {
    const arrRows = data.split("\n");
    fetchArrayM(arrRows);
    topborder(maxlen);
    printNames(arrNames);
    bottomborder(maxlen);
  });
}

function printNames(arr) {
  let j = 0;
  for (let elm of arr) {
    j++;
    str = elm;
    console.log(str);
    if (j !== arr.length) middleborder(maxlen);
  }
}

function fetchArrayM(arr) {
  let cellStr = "";
  let rowStr = "";
  let j = 0;

  //---- Putting up all in 2D array of rows & cols ------
  for (i = 0; i < arr.length; i++) {
    arrCells.push([]);
    for (col of arr[i].split(",")) {
      arrCells[i].push(col);
    }
  }

  /* initializing maxColLen Array to 0  (should be equal to Total Cols)---
     Iterating First Ror containg CSV Values 
  */
  for (col in arrCells[0]) {
    arrMaxColLen.push("0");
  }
  // Finding up max length in each columng ------
  for (rows of arrCells) {
    i = 0;
    for (cell of rows) {
      if (cell.length > arrMaxColLen[i]) arrMaxColLen[i] = cell.length;
      i++;
    }
  }
  //console.log(arrMaxColLen);
  //---- Calculating ot Tatal of max columns-----
  maxlen = 0;
  for (let c in arrMaxColLen) {
    maxlen += arrMaxColLen[c] + 1; // +1 -> for column separator
    // console.log("arrMaxColLen : " + arrMaxColLen[c]);
  }

  for (i = 0; i < arrCells.length; i++) {
    cellStr = arr[i]; // CSV Row of Array
    rowStr = "";
    j = 0;
    for (col of arrCells[i]) {
      rowStr += "│" + col.padEnd(arrMaxColLen[j], " ");
      j++;
    }
    rowStr += " |";
    //console.log(rowStr);
    arrNames.push(rowStr);
  }
}

// Writing re-usable border for Top/Bottom/Middle ------
function border(schar, echar, n) {
  let str = schar;
  if (n == 0) {
    n = 1;
  }
  for (i = 1; i <= n; i++) {
    str += "━";
  }
  str += echar;
  console.log(str);
}

// Top Border ----
function topborder(n) {
  border("┏", "┓", n);
}
// Bottom Border ---
function bottomborder(n) {
  border("┗", "┛", n);
}
// Middle Border ---
function middleborder(n) {
  border("┣", "┫", n);
}
