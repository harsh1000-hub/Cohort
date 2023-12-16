// Using Promises 
const fs = require('fs')   
  // this is fs = file system library that is inbuilt library in node.js to read and write the file
// // This is without promises
// // Below is my async task
function harshReadFile(cb){
  fs.readFile("a.txt","utf-8",function(err,data){
    cb(data);
  })
}

function onDone(data){
  console.log(data);
}
harshReadFile(onDone);  // callbacks call 

// ======================================================================================================

// Written a code using Promises 

function harshReadFile(){
  return new Promise(function(resolve){
    fs.readFile("loginMessage.txt","utf-8",function(err,data){
      resolve(data);
    })
    fs.readFile("a.txt","utf-8",function(err,data){
      console.log("hey")
      resolve(data)
    })
  })
}

function onDone(data){
  console.log(data);
}

function loginMessage(data){
  console.log(data)
}

harshReadFile().then(onDone);
harshReadFile().then(loginMessage);




// Promise Chaining = If you want that after one file read then second file read


function harshReadFile() {
  return new Promise(function(resolve, reject) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  }).then(function(data) {
    console.log(data); // Do something with the data from the first file
    return new Promise(function(resolve, reject) {
      fs.readFile("loginMessage.txt", "utf-8", function(err, data) 
    {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }).then(function(data) {
    console.log(data); // Do something with the data from the second file
  });
}

harshReadFile();
