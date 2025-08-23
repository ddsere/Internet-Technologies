//=============== Primitive Data Types ===============

//=============== 1. Number =============== -> represents both integer and floating-point numbers
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);
console.log("============");

//============== 2. String ================ -> represents a sequence of characters
let customerName = "John Doe";
console.log(typeof customerName);
console.log("============");

//============= 3. Boolean =============== -> represents a logical entity and can have two values: true and false
let isLoggedIn = true;
console.log(typeof isLoggedIn);
console.log("============");

//============= 4. Undefined =============== -> represents a variable that has been declared but has not yet been assigned a value
let x;
console.log(x);
console.log(typeof x);
console.log("============");

//============= 5. Null =============== -> represents a variable that has been explicitly assigned a null value
let y = null;
console.log(y);
console.log(typeof y);
console.log("============");

//============= 6. BigInt =============== -> represents integers with arbitrary precision. whole numbers larger than 2^53
let number = 555164168548486246297595176176n;
console.log(typeof number);
console.log("============");

//============= Non-Primitive Data Types ===============

//============= 7. Object =============== -> represents a collection of key-value pairs
let student = {
  firstName: "Kamal",
  lastName: "Silva",
  age: 30,
};
console.log(student);
console.log(typeof student);
console.log("============");

//============= 8. Array =============== -> represents a collection of elements
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors);
console.log("============");

//============= 9. Function =============== -> represents a block of code designed to perform a particular task
function greet() {
  console.log("Hello, welcome!");
}
greet();
console.log(typeof greet);
console.log("============");

//============= 10. Date =============== -> represents a single moment in time
let today = new Date();
console.log(today);
console.log(typeof today);
