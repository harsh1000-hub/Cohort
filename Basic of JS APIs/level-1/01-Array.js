// Useful Array methods
const userAge = [21, 23, 23, 54];
// push() = push element in the end of the array
userAge.push(51);
console.log(userAge);
// unshift() = push element in the front of the array
userAge.unshift(11);
console.log(userAge);

// pop() = remove element from the end of the array
userAge.pop();
console.log(userAge);
// shift() = remove element from the front of the array
userAge.shift();
console.log(userAge);

// concat() = merge two array

const userHomeId = [1,2,5];
const userOfficeId = [3,4,6];
const finalArray = userHomeId.concat(userOfficeId);
console.log(finalArray);

// diff b/w push() and concat() is push take number as argument and concat take whole array as argument


// -------------------------------------------------------


// iterate over the array using for loop is just straight forward and bulky code
// So instead of use for loop -> use forEach() method = it use the concept of callbacks

const exampleArray = [1,2,3]
// simple for loop
for(let i =0;i<exampleArray.length;i++){
  console.log(exampleArray[i]);
}

// using for each loop 
function logThing(str){
  console.log(str);
}
exampleArray.forEach(logThing); // This line hit for every for each element of the exampleArray  
// Here in forEach argument you pass function name as a argument


// ---------------------------------------------------------------
// Merge print function for the array with forEach() and here in forEach we pass whole function as argument with logic 
function forEachExample(arr){
  console.log("Original array: ",arr);
  exampleArray.forEach(function(item,index){
    console.log(item,index);
  });
}    

// In forEach() = there is a default parameter inside it like item == specific array element you can use any name instead of iem

forEachExample(exampleArray);

// -----------------------------------------------------------------