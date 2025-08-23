console.log("Variables.js is loaded...");

//============= 1. let ================ -> can only be accessed within the block. Block Scoped Variable
// let x = 10;
// console.log(x);

// function testLet() {
//   console.log(x);
//   let y = 20;
//   console.log(y);
//   if (true) {
//     console.log(x);
//     console.log(y);
//     let z = 30;
//     console.log(z);
//   }
//   console.log(x);
//   console.log(y);
//   //   console.log(z);
// }
// testLet();

//============= 2. const ================ -> can't re-assign a value to a const variable. Block Scoped Variable
// const x = 10;
// console.log(x);

// x = 20;

//============ 3. var ================ -> can be re-assigned and re-declared. Function Scoped Variable
// var x = 10;

// function testVar() {
//   console.log(x);
//   var z = 30;
//   if (true) {
//     var y = 20;
//     console.log(y);
//   }
//   console.log(y);
//   console.log(z);
// }
// testVar();
// console.log(z); // z is not defined here because var is function scoped, not block scoped
