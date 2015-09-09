/*********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

function Blob () {
}

var blob = new Blob();

var hoursOfConsumption = 0;
var peopleEaten = 0;
consumptionRate = 0;
while (peopleEaten < 1000) {
  hoursOfConsumption++;
  consumptionRate++;
  peopleEaten = peopleEaten + consumptionRate;
}
// starting all variables at 0
// and increasing variables in while loop before peopleEaten calculated
// makes sure variabes for hours and rate of consumption are correct
// when we drop out of while loop

var hoursSpentInDowington = hoursOfConsumption; // TODO: assign me the value of the above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  var hoursOfConsumption = 0;
  var peopleEaten = 0;
  var consumptionRate = peoplePerHour - 1;
  if (population === 0) {
    return hoursOfConsumption;
  }
  while (peopleEaten < population) {
    hoursOfConsumption++;
    consumptionRate++;
    peopleEaten = peopleEaten + consumptionRate;
  }
  return hoursOfConsumption;
}

Blob.prototype.hoursToOoze = hoursToOoze;
// though this works I have no idea why. Why isn't this:
// Blob.prototype.hoursToOoze = hoursToOoze(this.population, this.peoplePerHour);
// OR Blob.prototype.hoursToOoze() = hoursToOoze();
// OR Blob.prototype.hoursToOoze = this.hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1000, 0) === hoursSpentInDowington + 1, "starting at 0 should only take an extra hour");
assert(blob.hoursToOoze(1000, 1000) === 1, "1000 people and starting consumption of 1000/hr should take 1 hour");
assert(blob.hoursToOoze(500, 1000) === 1, "consumption rate higher than population should take 1 hour");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

  // two variables for the speaker and the listener language values
  var speakerLang = this.language;
  var listenerLang = sb.language;
  // prints the greeting in the speakers's language on the console
  console.log(hello[speakerLang]);
  // returns the greeting in the listener's language
  return (hello[listenerLang]);
    //TODO: put this on the SentientBeing prototype
}
SentientBeing.prototype.sayHello = sayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.

// Created the 3 beings as subClasses/childClasses of SentientBeing
// 1st - we create each being's constructor
// 2nd - we set the being's prototype to a new instance of SentientBeing and pass in the home planet and language parameters
// 3rd - we let the constructor know each being is that specific type of being
function Klingon () {
}
Klingon.prototype = new SentientBeing("Qo\"nos", "klingon");
Klingon.prototype.constructor = Klingon;

function Human () {
}
Human.prototype = new SentientBeing("Earth", "federation standard");
Human.prototype.constructor = Human;

function Romulan () {
}
Romulan.prototype = new SentientBeing("Romulus", "romulan");
Romulan.prototype.constructor = Romulan;

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the Klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

// for the Human to say hello to the Romulan
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the Romulan should hear Jolan\"tru");

// for the Klingon to say hello to the Human
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the Human should hear hello");

// for the Klingon to say hello to the Romulan
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the Romulan should hear Jolan\"tru");

// for the Romulan to say hello to the Human
assert((new Romulan(
  )).sayHello(new Human()) === "hello",
  "the Human should hear hello");

// for the Romulan to say hello to the Klingon
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the Klingon should hear nuqneH");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************

function max(array) {
  // TODO: return the largest number in the given array
  // for loop to iterate through the items in the array
  var comparArray = array;
  var largestNumber = comparArray[0];
  for (var i = 0; i < comparArray.length; i++) {
  // INTERESTING!! I discovered that this works even if elements of the
  // array examined are strings or undefined!!
    if (comparArray[i] > largestNumber) {
      largestNumber = comparArray[i];
    }
  }
  return largestNumber;
  // Why wouldn't I just use Math.max.apply(Math, comparArray)?
  // Is there a benefit at times to using loops for this?
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ -56, -45, -1, -67, -3, "fred", -123234, -65 ]) === -1, "with a string in the array");
assert(max([ 67, 67, 67, 67 ]) === 67, "all array elements the same number");
assert(max([ -58978987, -67, "", 56, 14 ]) === 56, "sparse array");

// TODO: you are given a string with several words in it
// return a corresponding variable name that follows
// javascript conventions
function variablify(string) {
  // grabs the parameter and converts the string to lowerCase
  var stringToVariablify = string.toLowerCase();
  // splits converted string into an array
  var stringToArray = stringToVariablify.split(" ");

  for (var j = 0; j < stringToArray.length; j++) {
    // conditional makes sure the first letter is lowerCase and all
    // successive "words" have the first letter capitalized
    if (j === 0) {
      stringToArray[j] = stringToArray[j].charAt(0) + stringToArray[j].slice(1, stringToArray[j].length);
    }else {
      stringToArray[j] = (stringToArray[j].charAt(0)).toUpperCase() + stringToArray[j].slice(1, stringToArray[j].length);
    }
  }

  // joins the array elements into the javascript variable name
  var variableFromString = stringToArray.join("");
  return variableFromString;
}
// I am concerned about transforming strings that have characters that are
// not valid for javascript variables, especially common punctuation.
// BUT I think that is a MUCH bigger problem than the lab is posing especially
// since so many unicode variables are acceptable
// For more reference: https://mathiasbynens.be/notes/javascript-identifiers
// this page discusses acceptable characters in more detail and has a
// validator to make sure your variable is valid.

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("And it is   time for TOYHL to fly") === "andItIsTimeForToyhlToFly",
  "complex string with an all capital word");
assert(variablify("Fred Flintstone and Barney Rubble") === "fredFlintstoneAndBarneyRubble", "lots of capital letters");
assert(variablify("Friendship") === "friendship",
  "one word string");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
