console.log("=============");
console.log('JSIntergration.js file is loaded...');
console.log("=============");

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log('button has clicked!')
    alert('button has clicked!')  
})

const input = document.querySelector('input');
input.addEventListener('input', function () {
    document.querySelector('h3').textContent = 'Output : ' + input.value
})