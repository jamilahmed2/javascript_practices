// Task No 1
let btn = document.querySelector('button');
btn.addEventListener('click', chngWord);

function chngWord() {
   alert('Hello world')
}

// Task No 2 
let btn = document.querySelector('button');
btn.addEventListener('click', chngWord);

function chngWord() {
   let word = prompt('Enter anything to replace');
   btn.textContent = " "+ word
}