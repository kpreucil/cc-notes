/*
    1. Functions take many forms in JS
        Function 
        Method
        Anonymous Function
        Callback
        Event Handler
        Function Object
        Constructor Function
    2. Functions in JS are "First-class citizens"
    3. Variables in JS are function-scoped
    4. "this" in a function refers to a calling object (if any)
    5. A function is essentially a snippet of re-useable code
*/

//function sayHello() {
//    console.log("Hello World");
//}

// Same thing as first function. The one that runs is the last one written

//var sayHello = function () {
//    console.log("hello world");
//};

function sayHello() {
    console.log("Hello World");
    console.log("Goodnight moon");
    console.log("run from cthulu");
} // will run this whole series once called

// START Square things
function square (x) {
    return x * x;
}

// Cube
function cube (x) {
    return x * x * x;
}

// execute the code
console.log(square(4));
consol.log(cube(16));
console.log(x) //does not work

function sayHi(name){
    return ("'ello," + name); // parenthesis not required    
} 

// Multiple ways to execute code
    console.log(sayHi(erty));
    var a = sayHi("erty")
    console.log(a); // benefit of assigning a variable to the function is if it's used multiple times and need it to be a different name?
    function printHello(person) {
        console.log(sayHi(person));
    } 
    printHello("erty"); //by calling it in as another function the function sayHi is reusable

//Global Variables don't need to be defined because they already are in the library

//Golbal Variable sum

//Not easy to debug so avoid if possible
function count() {
    sum = sum + 1;
}

count();

count();

count();

console.log(sum);

// Global Varaiable math

var a = Math.sqrt(16);
a = Math.sqrt(2);
console.log(a);


//min is built in, but we can overwrite

//find the minimum value of two numbers

function min(a, b) {
    if (typeof(a) != "number") {
        return b;
    }
    if (typeof(b) != "number")
    return a;
    
    if (a < b) {
        return a;
    }
    return b;
    }

min(4, 6);
min(12, -3);
min("hi", 4); //returns 4

var first = parseInt (prompt("First number"));
var second = parseInt (prompt("Second number"));
console.log("The lower number is " + min(first, second));

// when you 'return' from a function that is the end. That is why there does not need to be an else. Only works inside of a function. Else can be used outside of a function

//functions stack on top of eachother

// Choose how you want to write functions with variables
var out;
function square(x) {
	out = x * x;
}
square(2);
console.log(out);

//OR 

function square(x) {
	return x * x;
}
console.log(square(2));