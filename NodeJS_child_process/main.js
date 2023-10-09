
const { spawn } = require('child_process');
const cp = require('child_process');

//1
//const childProcess = spawn('calc');

// Handle the child process exit event
// childProcess.on('close', (code) => {
//   console.log(`Child Process Exited with Code: ${code}`);
// });



//2
// const ouput = cp.execSync('node test.js')

// console.log(`My output : ${ouput}`);


//3

// Running an External Script (e.g., a Python script):
//to test different script in our main.js

// const { spawn } = require('child_process');


// const childProcess = spawn('python', ['example.py']);        // Create a child process to run a Python script


// childProcess.stdout.on('data', (data) => {
//   console.log(`Child Process Output:\n${data}`);                      // Listen for data from the child process (standard output)
// });


// childProcess.on('close', (code) => {
//   console.log(`Child Process Exited with Code: ${code}`);              // Handle the child process exit event
// });

//The spawn method in Node.js is used for creating child processes to run external programs or scripts. 
//It is a commonly used function in the child_process module for several important reasons

//4
// Running an External Command on Windows (e.g., "dir" on Windows):


// const childProcess = spawn('cmd.exe', ['/c', 'dir']);            // Create a child process to list files in the current directory (Windows)


// childProcess.stdout.on('data', (data) => {                       // Listen for data from the child process (standard output)
//   console.log(`Child Process Output:\n${data}`);
// });


// childProcess.on('close', (code) => {                                 // Handle the child process exit event
//   console.log(`Child Process Exited with Code: ${code}`);
// });




//const childProcess2 = spawn('pwd');
// const { spawn } = require('child_process');

// const childProcesslist = spawn('ls', ['-l']);                  // Create a child process to list files in the current directory


// childProcesslist.stdout.on('data', (data) => {                  // Listen for data from the child process (standard output)
//   console.log(`Child Process Output:\n${data}`);
// });


// childProcesslist.on('close', (code) => {                       // Handle the child process exit event
//   console.log(`Child Process Exited with Code: ${code}`);
// });


//exec

//it has a different use case and behavior.
//It is used for executing shell commands or running external programs asynchronously.


const {exec} = require('child_process');


// exec('echo Hello and welcome to Bridgelabz!', (error,stdout,stderr) => {
//     if(error) {
//         console.error(`Error : ${error.message}`);
//         return;
//     }
//     if(stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//     }

//     console.log(`stdout : ${stdout}`)
// })









// Specify the path to the git-bash.exe executable and its arguments
// const gitBashPath = 'C:\\Program Files\\Git\\git-bash.exe';

// // Execute Git Bash
// exec(`"${gitBashPath}"`, (error, stdout) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   console.log(`Git Bash Output:\n${stdout}`);
// });

//Execute External Programs

// exec('notepad',(error,stdout) => {
//     if (error) {
//         console.error(`Error: ${error.message}`);
//         return;
//       }
//       console.log(`Git Bash Output:\n${stdout}`);
// });

exec('notepad')




