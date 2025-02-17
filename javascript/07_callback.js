/*

//ex 1
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);




//ex 2
  function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  fetchData((data) => {
    console.log("Data received:", data);
  });

  */

  //ex 3
  function readFile(filePath, callback) {
    const fs = require('fs');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }
  
  readFile('ex.txt', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File content:", data);
    }
  });