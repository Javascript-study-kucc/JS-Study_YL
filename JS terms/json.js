//use HTTP to request data from server and transmit data to server
//XML: one of markup language like HTML
//AJAX(Asynchronous JavaScript And XML)
//XHR(XMLHttpRequest): object

//fetch()API, XMLHttpReguest
//and....JSON(JavaSCript Object Notion)
// -simplest data interchange format
// -lightweight text-based structure
// -easy to read
// -key-value pairs
// -used for serialization and transmission of data between the network the network connection
// -independent programming language and platform

//1. serialize Object to JSON
//use API JSON
//stringfy(obj)
// -boolean type
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: "null",
  birthDate: new Date(),
  jump: () => {
    console.log("${name} can jump!");
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log("key: ${key}, value: ${value}");
  return key === "name" ? "ellie" : value;
});
console.log(json);

//Overloading: same function name but differs on what parameters are passed and how they are passed

//2. deserialize JSON to object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log("key: ${key}, value: ${value}");
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//JSON Diff
//JSON Beautifier
//JSON Parser
//JSON Validator
