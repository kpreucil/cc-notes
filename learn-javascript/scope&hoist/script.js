//breakfast function

//counting app

/* 
// Bad practices. but need to know for debugging

var croissantCounter = document.getElementById("croissants");

bakeButton = document.getElementById("bake");


function bakeCroissant() {
    numOfCroissants = numOfCroissants +1;
    croissantCounter.innerHTML = "&#9790 " + numOfCroissants;
}


bakeButton.onclick = bakeCroissant;

var numOfCroissants = 0; //while it is best to place at top it has been hoisted so it still works. However, it only hoists the declaration (var numOfCroissants) but not the assignment (0).

var bakeButton //the variable is defined here and is being hoisted. It will recognize the assignment that is created at the top
*/

/* can combine var statements: 
var croissantCounter = document.getElementById("croissants"), bakeButton = document.getElementById("bake");
*/

/*
Alternate option:
Declare var at top and then declare function, and then create the assignment below
*/

//best to wrap in a function

var numOfCroissants = 0;
var croissantCounter = document.getElementById("croissants");
var bakeButton = document.getElementById("bake");

function bakeCroissant() {
    var ovensize = 5; //add a new variable (scoping example)
    // numOfCroissants = numOfCroissants +1;
    numOfCroissants = numOfCroissants + ovensize; //added new scope variable
    croissantCounter.innerHTML = "&#9790 " + numOfCroissants;
}
//Why do we need hoisting? If we create a function that needs to know about another one. hoisting will allow it to be known about.

//new function
function eatAndBakeNewCroissant() {
    numOfCroissants = numOfCroissants - 1;
    bakeCroissant();
}

bakeButton.onclick = bakeCroissant;





