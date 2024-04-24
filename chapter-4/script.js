// Basics of objects

var user = {
    firstName : "mohammed",
    lastName : "muneef"
}

console.log(user.firstName)


// Object prototypes
// All JavaScript objects inherit properties and methods from a prototype. ex: Date objects inherit from Date.prototype

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

  



