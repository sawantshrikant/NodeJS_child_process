//The execFile method in Node.js is similar to exec, 
//but it's specifically designed for running external executable files (programs) rather than shell commands.


const {execFile} = require ('child_process');



// // Specify the path to the Python script
// const scriptPath = 'my_script.py';

// // Specify command-line arguments for the script
// const scriptArgs = ['input.txt', 'json'];

// // Execute the Python script with arguments
// execFile('python', [scriptPath, ...scriptArgs], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   console.log(`stdout:\n${stdout}`);
//   console.error(`stderr:\n${stderr}`);
// });


// execFile.js

// execFile.js


const path = require('path');

// Specify the path to the Node.js executable and the file to run
const nodePath = 'node';
const scriptFilePath = 'D:\\cfp\\NodeJS_child_process\\NodeJS_child_process\\script1.js'; // Update with the correct absolute path to script1.js

// Execute script1.js
execFile(nodePath, [scriptFilePath], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
  console.error(`stderr:\n${stderr}`);
});


