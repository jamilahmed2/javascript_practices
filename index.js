// Task No 1............
let btn = document.querySelector('button');
btn.addEventListener('click', chngWord);

function chngWord() {
   alert('Hello world')
}

// Task No 2 .............
let btn = document.querySelector('button');
btn.addEventListener('click', chngWord);

function chngWord() {
   let word = prompt('Enter anything to replace');
   btn.textContent = " "+ word
}


// Task No 3............

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


// Task No 4...........

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

// Task No 5..............

// modulo operator
var x =  32, y = 52
x = x%y
// exponentiation operator
var a = 2, b = 66
a = a**b
// equal opetator
var x = 3 == '3';
// strict equal opetator
var x = 3 === '3';
// No equal opetator
var x = 3 != '3';

// for more check google


// Task No 6..............

// contional statement
var time = prompt("Hey what's the time: ")
if(time>5 && time<17){
    alert("Good morning")
}else if(time>12 && time<17){
    alert("Good Afternoon")
}else if(time>17 && time<21){
    alert("Good Evening")
}else{
    alert("Good Ninght")
}


// Task No 7...........

// switch statement
var fruittype = prompt("Check price avaiable fruits")
switch (fruittype) {
    case 'apple':
        alert("apple price is 150")
        break;
    case 'banana':
        alert("banana price is 120")
        break;

    default:
        alert(`${fruittype} is not available`)
}
alert('Let me know if anything left')



// Task No 8.............

// for loop..............
for ( i = 0; i < 10; i++) {
    console.log(i)
  }

// e.g:1________
for ( i = 0; i < 10; i++) {
  console.log(i)
}

// e.g:2________
for (let i = 1; i <= 10; i++) {
    document.write("Hello, World!");
}

// do while loop.............
let eg = 1;
do {
    console.log("Hello, World!");
    eg++;
} while (eg <= 10);


//  while loop...........
let i = 0
while(i>=10){
    document.write('hello world')
    i--
}


// do while loop.........

// e.g:1_____
let i = 1;
do {
    console.log("Hello, World!");
    i++;
} while (i <= 10);


// e.g:2______
let str = "hello";
let reversed = "";
let i = str.length - 1;

do {
    reversed += str[i];
    i--;
} while (i >= 0);

console.log(reversed);


// for in loop..........

let animal={
    name:"tiger",
    leg:4
}

for(let key in animal){
    console.log(key, animal[key])
}

// for of loop..........
let name = ["jamil","zubair"]
for(let name of name){
    console.log(name)
}


// Task No 9..............

// functions to cookMaggi________
function cookMaggi(maggi,water,cooker) {
    document.write('Your maggi will be ready in'
    + maggi * 2
    + "min "
    + "ingredients "
    + maggi + "maggie "
    + water + "water "
    + " using " + cooker + "pan "
    )
    
}
cookMaggi( 4, 8, 1);


// makeSandwich__________
let bread = prompt("Which bread")
let veggies = prompt("Which bread")
let sauce = prompt("Which bread")

function makeSandwich(bread,veggies,sauce) {
    document.write(bread + veggies + " " + sauce + " sandwich is ready ")
}
makeSandwich(bread,veggies,sauce)


// Task 10..............

let str = "Hello, World!";

document.write(str.length); // prints length (13)
document.write(str.toUpperCase()); // prints "HELLO, WORLD!"
document.write(str.toLowerCase()); // prints "hello, world!"
document.write(str.substring(7, 12)); // prints "World"
document.write(str.indexOf("World")); // prints 7
document.write(str.replace("World", "Universe")); // prints "Hello, Universe!"