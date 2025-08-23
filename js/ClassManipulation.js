console.log("ClassManipulation.js is loaded...");
const heading = document.getElementById("heading");
console.log(heading.classList);

heading.classList.add("new-class");
console.log(heading.classList);

heading.classList.remove("title");
console.log(heading.classList);

// The toggle() method adds a class if it is not present, or removes it if it is present.
heading.classList.toggle("active");
console.log(heading.classList);

heading.classList.toggle("active");
console.log(heading.classList);
