const { spawn } = require('child_process');
const cp = require('child_process');


//const childProcess = spawn('calc');

// Handle the child process exit event
// childProcess.on('close', (code) => {
//   console.log(`Child Process Exited with Code: ${code}`);
// });


//const childProcess2 = spawn('pwd');

// const ouput = cp.execSync('node test.js')

// console.log(`My output : ${ouput}`);

//to test different script in our main.js

// const { spawn } = require('child_process');


// const childProcess = spawn('python', ['example.py']);        // Create a child process to run a Python script


// childProcess.stdout.on('data', (data) => {
//   console.log(`Child Process Output:\n${data}`);                      // Listen for data from the child process (standard output)
// });


// childProcess.on('close', (code) => {
//   console.log(`Child Process Exited with Code: ${code}`);              // Handle the child process exit event
// });




// const { spawn } = require('child_process');

// const childProcesslist = spawn('ls', ['-l']);                  // Create a child process to list files in the current directory


// childProcesslist.stdout.on('data', (data) => {                  // Listen for data from the child process (standard output)
//   console.log(`Child Process Output:\n${data}`);
// });


// childProcesslist.on('close', (code) => {                       // Handle the child process exit event
//   console.log(`Child Process Exited with Code: ${code}`);
// });


//The spawn method in Node.js is used for creating child processes to run external programs or scripts. 
//It is a commonly used function in the child_process module for several important reasons




// Create a child process to list files in the current directory (Windows)
const childProcess = spawn('cmd.exe', ['/c', 'dir']);

// Listen for data from the child process (standard output)
childProcess.stdout.on('data', (data) => {
  console.log(`Child Process Output:\n${data}`);
});

// Handle the child process exit event
childProcess.on('close', (code) => {
  console.log(`Child Process Exited with Code: ${code}`);
});


