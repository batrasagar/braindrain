Scripts Written with implementation of import/export modules :

It has View/New/Completed/Delete/Save/Quit menu links

It can create new task file in json format, load existing file json format.

Prompt Output are colorful and interactive.

## Following are the main script/data files.

1. `todoCLI.js` (todoCLI class file)

2. `index.js` (script which require todoCLI.js and run with/without filename as parameter)

3. `myList.json` (default file will be created, incase of script used without parameter)

## Usage to run scripts

```
** Stretch Part **

node index.js

node index.js myTodos.json

```

## Colors :
 
A new NPM package [colors](https://www.npmjs.com/package/colors) is used for making menu items colorful .
```
npm i colors

```
