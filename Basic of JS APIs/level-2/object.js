// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    // Object = Is a global class
  
    // Keys() = return a array of keys present in that object
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    // values() =  return a array of values present in that object
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    // entries() = return a array of each (key,value) of that object 
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    // hasOwnProperty() = return boolean value if there is key in that object present or not
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
  
    // assign() = assign another key/property to the object or merge two object
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
  
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);