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
*/

/*Take down information given in the problem.
Class - City:
Object - dowington
population : 1000
populationRemaining:1000

Class Blob
name:blob
peopleConsumed:0
beginingConsumptionRate:0
currentConsumptionRate:0
hourlyConsumptionRate:currentComsumptionRate++
hoursSpendInDowington

 TODO: First, make a constructor function, name it Blob, that makes blobs.

 */
//Blob is a function that use an internal function

//create array that contains blobs
blobs = [];
//create an instance of a blob and assign to global var blobs

Blob = function (index, name) {
  blobs[index] = {
    name : name
  };
}

// TODO: Next, create an instance of Blob named blob.
//blob is a global variable that takes the result of an IIFE of Blob
Blob(0, "blob")
blob = blobs[0]

//TODO: Then, use a loop to calculate how long it took the blob to finish with Dowington.

//add properties to Blob


//Variables
blob.peopleConsumed = 0;
blob.hoursInCity = 0;
blob.consumptionByHour = [];
blob.peopleRemaining = blob.targetCityPopulation - blob.peopleConsumed;
blob.targetCity = "dowington";
blob.targetCityPopulation = 1000;
blob.currentConsumptionRate = 1;
blob.eat = function() {
  while (blob.targetCityPopulation > 0) {
    blob.consumptionByHour[blob.hoursInCity] = blob.currentConsumptionRate;
    blob.targetCityPopulation -= blob.currentConsumptionRate;
    blob.hoursInCity++;
    blob.currentConsumptionRate++;
    console.log("Blob has been in city for " + blob.hoursInCity + " hours")
  }
}
blob.eat();

*/
var hoursSpentInDowington = blob.hoursInCity; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  this.targetCityPopulation = population;
  this.currentConsumptionRate = peoplePerHour;
  return this.eat();
}
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
blob.hoursToOoze = hoursToOoze


assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

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

function SentientBeing () {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  }

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing(); // TODO: fix me
var romulan = new SentientBeing(); // TODO: fix me
var human = new SentientBeing(); // TODO: fix me

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
