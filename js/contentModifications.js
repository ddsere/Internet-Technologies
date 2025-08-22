console.log('ContentModification.js is loaded...');

const heading = document.getElementById('heading');
console.log(heading);

//modify content with textContent
console.log(heading.textContent);
heading.textContent = "Hello Judy";

const card = document.querySelector('.card');
console.log(card);

//modify content with innerHTML
// console.log(card.innerHTML);
// card.innerHTML = "<h2>My Card</h2><p>This is a card</p>";

//modify content with innerText
console.log(card.innerText);
card.innerText = "Just the text";


//modify content with value
const input = document.querySelector('input');
console.log(input);
input.value = "IJSE";