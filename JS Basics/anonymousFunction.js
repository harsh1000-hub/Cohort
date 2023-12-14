// Anonymous function = Are those function whose function name are not there 

function sumofSomething(a,b,fn){
    // you print the fn the answer will be anonymous
    console.log(fn)
    const val1 = fn(a);
    const val2 = fn(b);
    return val1+val2;
  }
  
  let answer = sumofSomething(2,4,function(n){  // function(n){..} this is a anonymous function
     return n*n*n;
  })
  console.log(answer);
  
  // Use anonymous function when you use callback concept you don't have any use for that anonymous function anywhere in program