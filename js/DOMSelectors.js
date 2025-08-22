console.log('DOMSelectors.js is loaded...');

console.log(document);

//select HYML elements by id
const heading = document.getElementById("heading");
console.log(heading);

//select HTML elements by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

//select HTML elements by tag name
const allparas = document.getElementsByTagName("p");
console.log(allparas);

//select HTML elements by CSS selector
const querySelector = document.querySelector(".box h2");
console.log(querySelector);

// Select all elements matching a CSS selector
// Returns a NodeList of all elements matching the selector
const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll);

