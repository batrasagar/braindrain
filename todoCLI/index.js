const todoCLI = require("./todoCLI.js");
const readline = require("readline");
const colors = require("colors");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//--- default file name --------
let fileName = "myList.json";

if (process.argv.length === 3) {
  fileName = process.argv[2];
}
//----- Displaying Welcome Message ----
const objArr = new todoCLI(fileName);
let welcomeMessage = `\nWelcome to Todo CLI!
--------------------`;
console.log(welcomeMessage);

//---Showing Main Menu --------

showMain();

//--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#

function showMain() {
  let mainscreen = `
  (${"v".green}) View • (${"n".green}) New • (${"cX".green}) Complete • (${
    "dX".red
  }) Delete • (${"s".green}) Save • (${"q".yellow}) Quit \n`;

  rl.question(mainscreen, ans => {
    switch (ans.charAt(0)) {
      case "v": //------ for View -------
        showLIst();
        break;
      case "n": //------ for View -------
        rl.question("what ?\n".yellow, ans => {
          objArr.addItem(ans);
          rl.close;
          // showMain();
          showLIst();
        });
        break;
      case "c": //------ for Completing Task -------
        objArr.completeItem(ans.slice(1));
        rl.close;
        showLIst();
        break;
      case "d": //------ for Delete  -------
        objArr.deleteItem(ans.slice(1));
        rl.close;
        showLIst();
        break;
      case "s": //------ for Save -------
        objArr.saveAllItem();
        rl.close;
        showLIst();
        break;
      case "q":
        quit();
        break;
      default:
        rl.question("Invalid Input, press any key...\n".red, ans => {
          rl.close;
          showLIst();
          return;
        });
        break;
    }
    rl.close;
    return;
  });
}
//--- Quit Function -------
function quit() {
  console.log("Good Bye !!".green);
  process.stdin.pause();
}

//----------- Show Updated Task List ------------

function showLIst() {
  let arr = objArr.viewItem();
  str = "";
  for (i in arr) {
    let tick = " [ ] ";
    if (arr[i].completed) {
      tick = " " + "[✓]".inverse + " ";
    }
    str += i + tick + arr[i].title + "\n";
  }
  console.log(str.yellow);
  showMain();
}
