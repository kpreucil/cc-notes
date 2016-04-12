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

console.log(square(4));