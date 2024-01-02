let counter = 0

// getData() is a ugly way to fetch data from some backend means every key press there is API calls 
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data... ", counter++)
}

// How to Optimize the getData() API function means to decrease the unnecessary API calls answer is = debouncing
// deboucing means call getData() when difference between two keys press is greater than 300 ms time
// creata a debounce method 
const debounceMethod = (fn,delay) =>{
    let timer;
    return function() {
        // let context = this,
        // args = arguments
        clearTimeout(timer) // clearTimeout so that copy will not create for setTimeout
        // why clear the setTimeout because in that 300ms if we more call of getData() again so than start a new call on getData() otherwise debounce not work properly and unnecessary API call happened
        timer = setTimeout(() =>{
            fn() // callback function trigger the getData() method
        },delay)
    }
}
const betterGetDataMethod = debounceMethod(getData,300);