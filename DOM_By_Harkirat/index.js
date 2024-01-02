let counter = 0

// getData() is a ugly way to fetch data from some backend means every key press there is API calls 
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data... ", counter++)
}

// How to Optimize the getData() API function means to decrease the unnecessary API calls answer is = debouncing
// creata a debounce method 
const debounceMethod = (fn,delay) =>{
    let timer;
    return function() {
        // let context = this,
        // args = arguments
        clearTimeout(timer) // clearTimeout so that copy will not create for setTimeout
        timer = setTimeout(() =>{
            fn() // callback function trigger the getData() method
        },delay)
    }
}
const betterGetDataMethod = debounceMethod(getData,300);