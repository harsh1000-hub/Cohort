// // Function in JS
// // Program 1 :- According to FoundationJS_week1 Functions Part -> Sum two numbers using function
// function sum(a,b){  // This how you can declare a function
//     return a+b;
// }
// let answer = sum(1,2);
// console.log(answer);

// let sum = 0;
// for(let i=0;i<1000000000000;i++){   // Figure out why your one core is not fully 100%
//     sum=sum+i;
// }
// console.log(sum);

//----------------------------------------------------------------------------------

// Callbacks -> Means functions can take other functions as INPUT(Arguments)

// Without using callbacks concept
// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// ------------------------------------------------------

// Using callbacks concept
function sum(num1, num2,storeFunctionDisplayResult) {
    // Here in storeFunctionDisplayResult argument = store function displayResult() logic
    let result = num1 + num2;
    storeFunctionDisplayResult(result); 
    // due to callbacks apply there storeFunctionDisplayResult works as a DispayResult() function.
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}



// You are only allowed to call one function after this
// How will you displayResult of a sum
// First way :- 
// let ans = sum(1,2);
// console.log(displayResult(ans)); // In this first way you are calling more than one functions to display the result
// Second way:- Inside sum function don't return result rather than store that result and then call displayResult() or displayResultPassive() but you are again calling two functions

// *-> So here is the concept of callbacks introduce which allow you to call one function according to above rule and also at same time displayResult() function also works

sum(1,2,displayResult); // Take input/argument as a function inside another function call

// -----------------------------------------------------------------------------------------------------------------
// seTimeout() = A predefined function in JS which work like about certain given time by you then they do next operation

function greetSetTimeOut(){
    console.log("setTimeout this side");
}
// calling setTimeout  -> In setTimeout callbacks concept is used 
setTimeout(greetSetTimeOut ,1*1000) // it take two argument first one is -> function as a argument , second one is time like (1*1000) means in JS when convert millsec into sec multiple with 1000 (1*1000) == 1 second

// ----------------------------------------------------------------------------------------------------------------

// setInterval() = A predefined function in which after every particular time interval excute operation
function greetsetInterval(){
    console.log("setInterval this side");
}
setInterval(greetsetInterval,1*1000);