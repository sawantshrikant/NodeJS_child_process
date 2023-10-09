
//The fork method in Node.js is used to create a new child process that runs a JavaScript module as a separate Node.js process. It's particularly useful for running separate Node.
//js scripts or modules in parallel, and it provides a way for these processes to communicate with each other.

const { fork } = require('child_process');
const path = require('path');

const childScriptPath = path.join(__dirname, 'child.js');


const childProcess = fork(childScriptPath);


childProcess.on('message', (message) => {
  console.log(`Received message from child: ${message.result}`);       //// Listen for messages from the child process
});


const numberToSquare = 7;
childProcess.send({ numberToSquare });


childProcess.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});


