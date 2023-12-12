// Array in JS
// Program 1 from the JS Foundation week 1.2 slide  -> print even number from the array
const ages = [21,22,23,24,25,26];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]+" ");
    }
}
//--------------------------------------------------------------------------------------
// Object in JS -> To aggregate data together so that your code become more cleaner
// Object are key:value pair
// Create a object
const user1 = {
    firstName:"Harsh",
    age:22
}
// // Access the value of a object using there key in two ways
// // First way
console.log(user1.firstName);
// // Second way
console.log(user1["firstName"]);
// // they both give same output = Harsh

// --------------------------------------------------------------------------

// Array of object = means create array of objects

const allUsers = [{
    firstName:"Harsh",
    gender:"male"
},{
    firstName:"Vaibhav",
    gender:"male"
},{
    firstName:"Simit",
    gender:"Female"
}];

// Program 3 from the slide - Write a program that prints all the male people’s first name given a complex object 
// Here we take above array allUsers for solving Program 3
for(let i = 0;i<allUsers.length;i++){
    if(allUsers[i].gender=="male"){
        console.log(allUsers[i].firstName); // Debug this line = array of allUsers of index i this means first object and then any object whose key means gender is equal to male then print that particular object key means there firstName
    }
}
// -------------------------------------------------------------------------------------------
// Array object of objects = Means more complex object or you can that nested objects
const allUsers1 = [
    {
        firstName:"Harsh",
        age:22,
        metaData:{   // this is nested object
            address:"Random Location",
            gender:"male"
        }
    }
];
// // Printed value of nested objects
console.log(allUsers1[0].metaData.gender); // O/P = male