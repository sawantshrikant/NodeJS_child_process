
process.on('message', (message) => {                                      // Listen for messages from the parent process
  if (message.numberToSquare !== undefined) {
    const result = message.numberToSquare ** 2;

    process.send({ result });                                             //    // Send the result back to the parent process

  }
});

  