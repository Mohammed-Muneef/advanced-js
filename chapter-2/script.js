// Data types

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");



// Strings in js

let name1 = " Muneef ";



// String methods in javascript

let length1 = name1.length;

let alphabet = name1.charAt(0)

let part = name1.slice(0,3);

let text2 = name1.toUpperCase();

let text3 = name1.trim();

let result = name1.repeat(2);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let arr =  name1.split("");



//Arrays in js

let arr1 = [1,2,3];
var arr2 = ["a","b","c"];



// Array methods in js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

let str = fruits.toString(); //with comma

let joined = fruits.join(" ");

var popped = fruits.pop(); // removes lst element and returns value that is popped out

var newlen = fruits.push("Kiwi");

var shiftedValue = fruits.shift(); //  <---

var newlen1 = fruits.unshift("Lemon"); //  adds a new element to an array (at the beginning) and returns new arraylength

const arr4 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr4.concat(arr2, arr3); //merging 3 arrays

const arr5 = ["Emil", "Tobias", "Linus"];
const myChildren1 = arr5.concat("Peter");  //adds an element to last of array

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);