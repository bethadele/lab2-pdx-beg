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

// We"re going to use this special assert method again to
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
        45
 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.

 1. what is the "maximum" condition in a loop (upper limit)
 2. while loop
 3. try things out with console.log
*/

var dowington = 1000;

function Blob(name) {
   this.name = name;
   this.peopleConsumed = 1;
   this.hours = 0;

   this.eating = function(pop) {
      this.hours = 0;
      while (pop > 0) {
        pop -= this.peopleConsumed;
        this.peopleConsumed++;
        this.hours++;
   }
   return this.hours;
 };
}
var blob = new Blob("blob");

var hoursSpentInDowington = blob.eating(dowington); // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  this.hours = 0;
  while (population > 0) {
    population -= peoplePerHour;
    peoplePerHour++;
    this.hours++;
  }
  return this.hours;
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob"s prototype.
};

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

function SentientBeing (homeplanet, language) {
  this.homeplanet = homeplanet;
  this.language = language;
  // TODO: specify a home planet and a language
  // you"ll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  return (hello[sb.language]);
    // TODO: say hello prints out (console.log"s) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the "hello" object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
  };

// TODO: create three SentientBeings, one for each language in the
// "hello" object above.
var klingon = new SentientBeing("Qo'noS", "klingon"); // TODO: fix me
var romulan = new SentientBeing("Romulus", "romulan"); // TODO: fix me
var human = new SentientBeing("Earth", "federation standard"); // TODO: fix me

assert(human.sayHello(klingon) === "nuqneH",
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
  return Math.max.apply(Math, array);
  // TODO: return the largest number in the given array
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 1, 3, 2, -1 ]) !== 2, "[1,3,2]");
assert(max([ 1, 3, 2, 5, 4 ]) === 5, "[1,3,2]");

function variablify(string) {
var stringArray = []; // makes an empty array
var lowCase = string.toLowerCase(); // makes all letters in string lowercase
var split = lowCase.split(" "); // splits string words into an array
    for (i = 0; i < split.length; i++) { // does "this" statement for every element in array
        if (i > 0) { // excludes the 0 element in array
            stringArray.push(split[i].charAt(0).toUpperCase() + split[i].slice(1)); // makes the 1st letter in word uppercase then adds it back to word and pushes it into the empty array "stringArray"
        } else {
            stringArray.push(split[i]); // if its the 0 element just push it into empty array "stringArray"
        }
    }
     var join = stringArray.join(""); // join array together into a string without spaces
     return join; // returns the final product
 }

// 1. if there is a space: capitalize the letter after it
// 2. split the words into array
// 3. join array without spaces

  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("This IS CraZy") === "thisIsCrazy",
  "eh not right");
assert(variablify("ONE MORE TIME") === "oneMoreTime",
  "nope");
assert(variablify("hey you GUYS") === "heyYouGuys",
  "try again, fool");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
