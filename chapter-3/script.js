//conditionals statements

//if

if (condition) {
    //  block of code to be executed if the condition is true
  }



//if else

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

//else if

if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }



//loops

//for loop
  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }

// for in -  retuns index here , The JavaScript for in statement loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};

let text3 = "";
for (let x in person) {
  text += person[x];
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x in cars) {
  text += x;
}

//for of - only values
const cars1 = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text += x;
}

//for each

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}

//while 
while (i < 10) {
    text += "The number is " + i;
    i++;
  }



//function in js

function myFunction(p1, p2) {
    return p1 * p2;
  }
let result= myFunction(1,2);

// events "<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>"
// "onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page"