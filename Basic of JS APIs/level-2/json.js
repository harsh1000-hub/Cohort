// Code about JSON = Javascript object notation


// JSON is used to convert a JSON string into JSON Object using JSON.Parse() and also converrt a JSON object into JSON string using JSON.stringify()
const  jsonString = `{"fullName":"Harsh Vardhan","Gender":"Male","Age":22}`;
// Use JSON.parse()
const convertJSONString_into_JSONObject = JSON.parse(jsonString);
console.log(convertJSONString_into_JSONObject);

// USe JSON.stringify()
const jsonObject = {
  fullName:"Vaibhav Sharma",
  Gender:"Male",
  Age:22
}
const convertJSONObejct_into_JSONString = JSON.stringify(jsonObject)
console.log(convertJSONObejct_into_JSONString);
