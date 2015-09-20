// LAB 2: LOOPY SCI-FI
// Welcome to Lab 2 =)
// Be sure to read all the comments!
// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.
// To run this file (in the terminal) use: node lab2.js
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
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

 TODO: First, make a constructor function, called Blob, that makes blobs.*/
function Blob(name) {
  this.name = name;
}
/*
 TODO: Next, create an instance of Blob named blob.*/

var blob = new Blob('blob');
/*

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var dowintonPop = 1000;
var peoplePerHour = 0;
var totalHours = 0;
for (var i = 0; i < dowintonPop; i += peoplePerHour) {
  peoplePerHour += 1;
  totalHours += 1;
}

var hoursSpentInDowington = totalHours; // TODO: assign me the value of the
// above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
// TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.

Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  this.population = population;
  this.peoplePerHour = peoplePerHour;
  var totalHours = 0;
  var peopleEatenPerHour = 0;
  for (var i = 0; i < population; i += peopleEatenPerHour) {
    peopleEatenPerHour += peoplePerHour;
    totalHours += 1;
  }
  return totalHours;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH', // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}
SentientBeing.prototype.sayHello = function sayHello(sb) {
  console.log(hello[this.language]);
  return hello[sb.language];
};

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.

var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: fix me
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: fix me
var human = new SentientBeing('Earth', 'federation standard'); // TODO: fix me

assert(human.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(human.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');
assert(klingon.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  return Math.max.apply(null, array);
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, '[1,3,2]');
assert(max([ 5, 9, 8, 3 ]) === 9, 'max should be nine');
assert(max([ -1, -5, 3 ]) === 3, 'max should be three');
assert(max([ 4, 2, 6 ]) === 6, 'max should be six');

function variablify(string) {
  var words = string.split(' ');
  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
  }
  return words.join('');
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('four five six') === 'fourFiveSix', 'not correct');
assert(variablify('seven eight nine') === 'sevenEightNine', 'not correct');
assert(variablify('ten eleven twelve') === 'tenElevenTwelve', 'not correct');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
