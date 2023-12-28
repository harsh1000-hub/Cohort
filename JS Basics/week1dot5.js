// // week 1 - week 1.5 video
const fs = require('fs')
fs.readFile("a.txt","utf-8",function(err,data){
  console.log(data)
})
console.log("Hello world 1 there")
let a = 0
for(let i =0;i<1000000000;i++){
  a++;
}
console.log("hello 2 there")

// In above example delegate task that is readFile only execute when below sync task will over their execution state.

// Promises in JS

function harshReadFile(){
  // here we return new instance of Promise class
  return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
      // You can make resolve with something else also
      resolve(data); // this resolve is equivalent to onDone() function
    })
  })
}

function onDone(data){
  console.log(data)
}
harshReadFile().then(onDone); 

let temp = harshReadFile();  // O/P = promise pending because till right now you not get the promise using .then()
console.log(temp)


// ================================================================

// Promise have three state = pending,resolved,restate
// You can use Promise outside function like below and also inside in the function like above
var d = new Promise(function(resolve){
  setTimeout(function(){
    resolve("foo")
  },1000)
})
function callback(){
  console.log(d);
}
console.log(d)  // here Promise pending due to setTimeout 
d.then(callback) // here O/P = Promise {'foo'}


// ==========================================================


// Create a async function using Promise rather than using callback
function harhsAsycnFun(){
  let p = new Promise(function(resolve){
      resolve("Hi there");
  })
  return p; // return a Promise
}

const value = harhsAsycnFun();
value.then(function(data){
  console.log(data)
})


// ===========================================================

// Async and Await = It is just a better way to write the promisified function
function vaibhavAsyncFun(){
    let p = new Promise(function(resolve){
      resolve("Hi there async and await")
    })
    return p;
  }
  
  
  async function main(){  // using async() make this function as async function
    const value = await vaibhavAsyncFun(); 
    // here await() method stop the thread inside this main() method means after executing the line 79 than other line inside this main() execute
    console.log(value);
  }
  main();
  // but if you do other coding stuff outside the main method it work first after than async and await task execute like callback queue event loop concept
  console.log("Before asycn and await")



