// SUB 1: Add two numbers
let addA = 5, addB = 3;
console.log("SUM:", addA + addB);

// SUB 2: Subtract two numbers
let subA = 9, subB = 4;
console.log("DIFFERENCE:", subA - subB);

// SUB 3: Multiply two numbers
let mulA = 7, mulB = 2;
console.log("PRODUCT:", mulA * mulB);

// SUB 4: Divide two numbers
let divA = 20, divB = 4;
console.log("QUOTIENT:", divA / divB);

// SUB 5: Remainder of division
let remA = 17, remB = 5;
console.log("REMAINDER:", remA % remB);

// SUB 6: Square of a number
let squareInput = 4;
console.log("SQUARE:", squareInput * squareInput);

// SUB 7: Cube of a number
let cubeInput = 3;
console.log("CUBE:", cubeInput * cubeInput * cubeInput);

// SUB 8: Area of rectangle
let rectLen = 10, rectWid = 5;
console.log("AREA RECTANGLE:", rectLen * rectWid);

// SUB 9: Perimeter of square
let squareSide = 6;
console.log("PERIMETER SQUARE:", 4 * squareSide);

// SUB 10: Celsius to Fahrenheit
let inputCelsius = 25;
let convertedFahrenheit = (inputCelsius * 9/5) + 32;
console.log("FAHRENHEIT:", convertedFahrenheit);

// SUB 11: Average of three numbers
let avgA = 10, avgB = 20, avgC = 30;
console.log("AVERAGE:", (avgA + avgB + avgC) / 3);

// SUB 12: Simple Interest
let siPrincipal = 1000, siRate = 5, siTime = 2;
console.log("SIMPLE INTEREST:", (siPrincipal * siRate * siTime) / 100);

// SUB 13: Total & Percentage of 5 subjects
let marks1 = 80, marks2 = 90, marks3 = 85, marks4 = 95, marks5 = 100;
let totalFiveSubs = marks1 + marks2 + marks3 + marks4 + marks5;
let percentageFiveSubs = (totalFiveSubs / 500) * 100;
console.log("TOTAL:", totalFiveSubs, "PERCENTAGE:", percentageFiveSubs + "%");

// SUB 14: Swap two values using temp
let swapX = 10, swapY = 20;
let swapTemp = swapX;
swapX = swapY;
swapY = swapTemp;
console.log("AFTER SWAP:", swapX, swapY);

// SUB 15: Increment
let incNumber = 7;
incNumber++;
console.log("INCREMENTED:", incNumber);

// SUB 16: Decrement
let decNumber = 10;
decNumber--;
console.log("DECREMENTED:", decNumber);

// SUB 17: Area of circle
let circleRadius = 5;
console.log("AREA CIRCLE:", 3.14 * circleRadius * circleRadius);

// SUB 18: Power of a number
let baseNum = 2, powerNum = 3;
console.log("POWER:", baseNum ** powerNum);

// SUB 19: Total cost of n items
let unitPrice = 50, unitsCount = 6;
console.log("TOTAL COST:", unitPrice * unitsCount);

// SUB 20: Remainder of 15 ÷ 4
let remainderExample = 15 % 4;
console.log("15 % 4 =", remainderExample);

// SUB 21: If example (equals check)
let equalsCheckX = 5;
if (equalsCheckX == 5) {
    let equalsMsg = "Hello";
    console.log("EQUALS CHECK:", equalsCheckX);
}

// SUB 22: Constant PI
const CONST_PI = 3.14;
console.log("CONST PI:", CONST_PI);

// SUB 23: Function var scope example
function scopeVarExample() {
    if (true) {
        var insideVar = "hi";
    }
    console.log("VAR INSIDE FUNCTION:", insideVar);
}
scopeVarExample();

// SUB 24: Simple function - say hello
function sayHelloWorld() {
    console.log("Hello! Everyone");
}
sayHelloWorld();

// SUB 25: Function with parameter
function greetPerson(personName) {
    console.log(`Hello, ${personName}!`);
}
greetPerson("Nidha");

// SUB 26: Subtraction function that returns value
function subtractNumbers(aVal, bVal) {
    return aVal - bVal;
}
let subtractResult = subtractNumbers(8, 5);
console.log("SUBTRACT RESULT:", subtractResult);

// SUB 27: Function & block scope demo
function scopeDemoFunction() {
    const userRole = "amazone";
    console.log("USER INSIDE FUNCTION:", userRole);
    if (true) {
        let userAgeBlock = "20";
        console.log("USER INSIDE BLOCK:", userRole);
        console.log("AGE INSIDE BLOCK:", userAgeBlock);
    }
}
scopeDemoFunction();

// SUB 28: Age check (if/else)
const checkAgeValue = 18;
if (checkAgeValue >= 18) {
    console.log("You are major");
} else {
    console.log("You are minor");
}

// SUB 29: Score evaluation
const testScoreValue = 85;
if (testScoreValue >= 90) {
    console.log("Excellent");
} else if (testScoreValue >= 70) {
    console.log("Good job");
} else {
    console.log("Keep practicing");
}

// SUB 30: Even / Odd check (converted prompt -> var)
let evenOddNumber = 8;
if (evenOddNumber % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// SUB 31: Larger of two numbers (converted prompt -> vars)
let compareA = 12, compareB = 20;
if (compareA > compareB) {
    console.log("A is larger");
} else if (compareB > compareA) {
    console.log("B is larger");
} else {
    console.log("Both are equal");
}

// SUB 32: Voting eligibility (converted prompt -> var)
let voterAge = 17;
if (voterAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// SUB 33: Divisible by 5 check (converted prompt -> var)
let divisibleByFiveNum = 25;
if (divisibleByFiveNum % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

// SUB 34: Marks grading (converted prompt -> var)
let marksInput = 92;
if (marksInput >= 90) {
    console.log("Grade A");
} else if (marksInput >= 75) {
    console.log("Grade B");
} else if (marksInput >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// SUB 35: Number in range 10-20 (converted prompt -> var)
let rangeNumber = 15;
if (rangeNumber >= 10 && rangeNumber <= 20) {
    console.log("Number is in range");
} else {
    console.log("Out of range");
}

// SUB 36: Password check (converted prompt -> var)
const correctPassword = "python123";
let userPasswordInput = "python123";
if (userPasswordInput === correctPassword) {
    console.log("Correct Password");
} else {
    console.log("Wrong Password");
}

// SUB 37: Three-digit number check (converted prompt -> var)
let threeDigitCheck = 256;
if (threeDigitCheck >= 100 && threeDigitCheck <= 999) {
    console.log("Three-digit number");
} else {
    console.log("Not a three-digit number");
}

// SUB 38: Leap year check (converted prompt -> var)
let yearToCheck = 2024;
if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || (yearToCheck % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// SUB 39: Day switch
const dayName = "Friday";
switch (dayName) {
    case "Monday":
        console.log("start of the week");
        break;
    case "Friday":
        console.log("Last of the week");
        break;
    default:
        console.log("A regular day");
}

// SUB 40: Traffic light color switch
const trafficColor = "orange";
switch (trafficColor.toLowerCase()) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("more colours");
}

// SUB 41: Arithmetic operator switch
let opA = 20, opB = 30;
const operatorSymbol = "+";
switch (operatorSymbol) {
    case "+":
        console.log("SUM:", opA + opB);
        break;
    case "-":
        console.log("DIFF:", opA - opB);
        break;
    case "*":
        console.log("PROD:", opA * opB);
        break;
    default:
        console.log("Invalid operator");
}

// SUB 42: For loop 0 to 5
for (let forI = 0; forI <= 5; forI++) {
    console.log("FOR LOOP:", forI);
}

// SUB 43: While loop 0 to 5
let whileCounter = 0;
while (whileCounter <= 5) {
    console.log("WHILE LOOP:", whileCounter);
    whileCounter++;
}

// SUB 44: for...in over object
const personObj = { nameProp: "Ammu", ageProp: 20 };
for (let keyIn in personObj) {
    console.log("KEY:", keyIn + " : " + personObj[keyIn]);
}

// SUB 45: for...of over array
const fruitsArray = ['apple', 'banana', 'orange'];
for (let fruitItem of fruitsArray) {
    console.log("FRUIT:", fruitItem);
}

// SUB 46: Positive / Negative / Zero check
let posNegZeroVal = 0;
if (posNegZeroVal > 0) {
    console.log("Positive");
} else if (posNegZeroVal < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// SUB 47: Largest of three numbers
let largestA = 10, largestB = 20, largestC = 5;
if (largestA >= largestB && largestA >= largestC) {
    console.log("A is largest");
} else if (largestB >= largestA && largestB >= largestC) {
    console.log("B is largest");
} else {
    console.log("C is largest");
}

// SUB 48: Marks -> Grade detailed
let detailedMarks = 85;
if (detailedMarks >= 90) {
    console.log("Grade: A");
} else if (detailedMarks >= 80) {
    console.log("Grade: B");
} else if (detailedMarks >= 70) {
    console.log("Grade: C");
} else if (detailedMarks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}

// SUB 49: Month switch (numeric)
let monthNumeric = 8;
switch (monthNumeric) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid month");
}
