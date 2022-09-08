// comment your JavaScript (JS) Code
/* multi-line comment
Yes, multi-pass
*/
//single line comment

// Declare JS Variable
var myName;

// Storing Values with the Assignment Operator
var a;
a = 7;
console.log(a);

// Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;
// Only change code below this line
b = a;

// Initializing Variables with the Assignment Operator
var a = 9;

// Declar String Variables
var myFirstName= "First";
var myLastName = "Last";
console.log(myFirstName);
console.log(Last);

// Understanding Uninitialized Variables
// Only change code below this line
var a= 5;
var b= 10;
var c= "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Explore Differences Between the var an let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// Declare a Read-Only vaiable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Add Two Numbers with JavaScript
const sum = 10 + 10;
// Subtract One Number from Another with JavaScript
const difference = 45 - 33;
// Multiply Two Numbers with JavaScript
const product = 8 * 10;
// Divide One Number by Another with JavvaScript
const quotient = 66 / 33;
// Increment a Number with JavaScript
let myVar = 87;

// Only change code below this line
myVar++;
// Decrement a Number with Javascript
let myVar = 11;

// Only change code below this line
myVar--;
//Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;
// Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;
// Divide One Decimal by Another with JavaScript
const quotient = 4.4/2.0; // Change this line
// Finding a Remainder in JavaScript
const remainder = 11 % 3;
// Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
console.log(a);
console.log(b);
console.log(c);

// Compound Assignment with Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
// Compound Assignment with Augumented Multiplication
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
// Compound Assignment with Augumented Division
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
// Escaping Literal Quotes in String
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
//Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end."; // Change this line

//Concatenating Strings with the Plus Equals Operator
let myStr= "This is the first sentence. ";
myStr += "This is the second sentence." ;

// Constructing STrings with Variables
// Only change code below this line
const myName = "Iron Man";
const myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// Appending Variables to Strings
// Change code below this line
const someAdjective = "challenging";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr)

// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log(lastNameLength)

// Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
console.log(firstLetterOfLastName);

// Understand String Immutability
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr= "Hello World"; // Change this line
// Only change code above this line

// Use Bracket Notation
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

// Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + ", brown " + myNoun + " walked, then " + myVerb + " very " + myAdverb + " toward the park." ; 
console.log(wordBlanks);
// Change this line
// Only change code above this line

// Store Mulitple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["monkeys", 12];

// Nest one Arrary within Another Array
// Only change code below this line
const myArray = [["Oranges, 5"], ["Apples, 12"]];

// Access Array Data with Indexes
const myArray = [50, 60, 70];

var myData = myArray[0];
console.log(myData);

// Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
console.log(myArray);

// Access Multi-Dimensional Arrays with Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  console.log(myData);

//   Manipulate Arrays With push()
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// Manipulate Arrays with pop
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

//Manipulate Arrarys with Shift()
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);

// Manipulate Arrays With unshift()
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
console.log(myArray)

// Shopping List
const myList = [["Sandwiches", 3],["Fries", 23],["Musubi", 6],["Toast", 28],["Bees", 3]];
console.log(myList);

//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing Values to Funcitons with Arguments
function functionWithArgs(var1, var2) {
  console.log(var1 + var2);
}
functionWithArgs(2,3);
functionWithArgs(1,2);
functionWithArgs(7,9);

// Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(10);
timesFive(0);

// Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
// Local Scope and Function
function myLocalScope() {
  // Only change code below this line
  var myVar = "test var"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs Local Scoope in Functions
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
// Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));

// Understand Boolean Values
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";


  // Only change code above this line

}

// Comparison with the Equality Operator
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
// Comparison with the STrict Equality Operator
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality Operator
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the Lesser Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// Comparison with the Less Than or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

// 