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


// Task No 3

// boolean
var bool = true;
console.log(typeof bool)
// number
var num = 1;
console.log(typeof num)
// string
var num = "2";
console.log(typeof num)
// null
var num = null;
console.log(typeof num)
// undefined
var num;
console.log(typeof num)
// bigint
var num = 12345n;
console.log(typeof num)


// Task No 4

// naming conventions
// camelCase
let firstName = "jamil"
// pascalCase
let lastName = "ahmed"
// snakeCase
let middle_name = " jim "

const price = 99;
var courseName = 'Java Script'
var cardNumber = '12345666789'
var isPaid = true;
var modeofPayment;

// taking input
prompt('Mode of payment')
alert(firstName + " Successfull " + courseName + " Using " + modeofPayment)