// Date = Is a global class that consists of lot of useful method 
function calculateSum(){
    let a = 0;
    for(let i=0;i<1000000000;i++){
      a = a+i;
    }
    return a;
  }
  const beforeTime = new Date();
  const beforeTimeInMilSec = beforeTime.getTime();
  calculateSum();
  const afterTime = new Date();
  const afterTimeInMilSec = afterTime.getTime();
  console.log(afterTimeInMilSec-beforeTimeInMilSec); // O/P = 3696 MiliSecond that is equal to around 3 second
  
  // getFullYear() = give you a current year
  const currentDate = new Date();
  console.log("Current Year -> ",currentDate.getFullYear());
  
  // setFullYear() = replace current year with any year
  currentDate.setFullYear(2022);
  console.log("After Set current Year ->",currentDate.getFullYear());  // O/P = 2022


  // ==============================================================================================================


  function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
  
    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());
  
    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
  
    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);
  
    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
  
    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
  }
  
  // Example Usage for Date Methods
  dateMethods();