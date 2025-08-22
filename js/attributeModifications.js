console.log("AttributeModification.js is loaded...");

const link = document.querySelector('a');
link.setAttribute('href', 'https://facebook.com');

link.setAttribute('target', 'blank');

const input = document.querySelector('input');
input.setAttribute('placeholder', 'eg:John Doe');