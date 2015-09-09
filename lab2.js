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
//blobs = [];
//create an instance of a blob and assign to global var blobs

//Blob = function (index, name) {
//  blobs[index] = {
//    name : name
//  };
//}

function Blob(name) {
  this.name = name;
  this.peopleConsumed = 0;
  this.hoursInCity = 0;
  this.consumptionByHour = [];
  this.peopleRemaining = this.targetCityPopulation - this.peopleConsumed;
  this.targetCity = "dowington";
  this.targetCityPopulation = 1000;
  this.currentConsumptionRate = 1;
  this.eat = function() {
    while (this.targetCityPopulation > 0) {
      this.consumptionByHour[this.hoursInCity] = this.currentConsumptionRate;
      this.targetCityPopulation -= this.currentConsumptionRate;
      this.hoursInCity++;
      this.currentConsumptionRate++;
    }
    return blob.hoursInCity;
  };
}

// TODO: Next, create an instance of Blob named blob.
//blob is a global variable that takes the result of an IIFE of Blob
//Blob(0, "blob")
//blob = blobs[0]

var blob = new Blob('blob');
//TODO: Then, use a loop to calculate how long it took the blob to finish with Dowington.
blob.eat();

var hoursSpentInDowington = blob.hoursInCity; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

//function hoursToOoze(population, peoplePerHour) {
//  this.targetCityPopulation = population;
//  this.currentConsumptionRate = peoplePerHour;
//  return this.eat();
//}
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  this.targetCityPopulation = population;
  this.currentConsumptionRate = peoplePerHour;
  this.eat();
  return this.hoursInCity;
};

//My asserts are failing because i need to reset the blob for each run. Not sure how to automate that besides manually assigning blob = new Blob() before each test.
blob = new Blob();
assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
blob = new Blob();
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
blob = new Blob();
assert(blob.hoursToOoze(100000, 100) === 359,
  "100000 people starting with 100 should equal 359 days");
blob = new Blob();
assert(blob.hoursToOoze(123456789, 1234567) === 100,
  "should assert true");
blob = new Blob();
assert(blob.hoursToOoze(20, 10) === 2,
  "should assert true");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo"noS
  romulan: 'Jolan\"tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
function SentientBeing (homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
function sayHello (sb) {
  console.log(hello[this.language]);
  return (hello[sb.language]);
}
    //TODO: put this on the SentientBeing prototype
SentientBeing.prototype.sayHello = sayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\"noS', 'klingon'); // TODO: fix me
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: fix me
var human = new SentientBeing('Earth', 'federation standard'); // TODO: fix me

assert((human.sayHello(klingon)) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((human.sayHello(romulan)) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((klingon.sayHello(human)) === "hello",
  "the human should hear hello");
assert((klingon.sayHello(romulan)) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((romulan.sayHello(klingon)) === "nuqneH",
  "the klingon should hear nuqneH");
assert((romulan.sayHello(human)) === "hello",
  "the human should hear hello");

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array

  highestNumber = 0;
  array.forEach(function(currentValue, index) {
    if (currentValue > highestNumber) {
    highestNumber = currentValue;
    //console.log("currentValue: " + currentValue);
    //console.log("highestNumber: " + highestNumber);
    }
  });
  return highestNumber;
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[1,3,2]");
assert(max([ 99, 100, 2000, 2001, 1999 ]) === 2001, "[ 99, 100, 2000, 2001, 1999 ]");
assert(max([ 0.1, 0.3, 0.2 ]) === 0.3, "[0.1,0.3,0.2]");
assert(max([ 1, 2, 3 ]) === 3, "[1,2,3]");

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

  var str = string.split(" "); //split string into array of words
  var str2 = []; //create blank array to hold new word
  str.forEach(function(value, index) {
    str2[index] = value.toLowerCase();//make every word lowercase
    if (index > 0) {
    str2[index] = str2[index].substr(0, 1).toUpperCase() + str2[index].substr(1);

/* This is how I solved it the first time
      var str3 = str2[index].split("");//take every word after first and split it by character
      str3[0] = str3[0].toUpperCase();//make first letter uppercase
      str2[index] = str3.join("");//join them and replace existing word
    }
*/
    }
  });
  return str2.join("");//joinwords to form new variable name
}

// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree",
  "variablify(\"one two three\")");
assert(variablify("TesT tHIS StrinG") === "testThisString",
  "variablify(\"TesT tHIS StrinG\")");
assert(variablify("F B I") === "fBI",
  "variablify(\"F B I\")");
assert(variablify("I AM YELLING") === "iAmYelling",
  "variablify(\"I AM YELLING\")");

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
