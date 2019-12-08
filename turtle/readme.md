Scripts Written with implementation of import/export modules :

1. `turtle.js` (tutrtle class file)

2. `turtleImport.js` (script which require turtle.js and run the object with parameters)

3. `turtleStretch.js` (another script in which we pass parameters as per assignment)

## usage to run scripts

```
node turtleImport.js

**Stretch**

node turtleStretch.js

node turtleStretch.js t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5

node turtleStretch.js --output=drawing.txt t5,5-f10-r-f5-r-f10-r-f5-r-f2-r-f5-l-f2-l-f5

```

# shell command (to make this script executable)

```
chmod +x turtleImport.js
chmod +x turtleStretch.js
```

# npm commands (to register this script)

```
npm init //create package.json

npm link //register npm package

```
