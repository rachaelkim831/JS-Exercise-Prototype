/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function (food){
  if(this.stomach.length < 10){
    this.stomach.push(food)
  }
}
Person.prototype.poop = function(){
  this.stomach = []; 
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

let Rachael = new Person("Rachael", 29)
Rachael.eat("banana1")
Rachael.eat("banana2")
Rachael.eat("banana3")
Rachael.eat("banana4")
Rachael.eat("banana5")
Rachael.eat("banana6")
Rachael.eat("banana7")
Rachael.eat("banana8")
Rachael.eat("banana9")
Rachael.eat("banana10")
Rachael.eat("banana11")
Rachael.eat("banana12")
Rachael.poop()
console.log(Rachael.stomach)
console.log(Rachael.toString())


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
  this.model = model;
  this.milesPerGallon = milesPerGallon;
}
Car.prototype.fill = function(gallons){
  this.tank = this.tank + gallons
}

let Honda = new Car("Accord", 50)
Honda.fill(15)
console.log(Honda.tank)


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age)
 this.favoriteToy = favoriteToy
}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - if 'this' is not in context to anything, it will return the window; if it's in strict mode, console will return undefined. 
  2. Implicit Binding - is used when a function within an object is invoked using a dot notation.
  3. Explicit Binding - occurs when a .call(), .apply(), or bind() is used on a function
  4. New binding - is when the keyword 'new' is used to create an object from constructor function. 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}