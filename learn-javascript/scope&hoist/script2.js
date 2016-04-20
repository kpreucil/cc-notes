//function () { Global Scope Function!!!

var donuts = 0;

function eatAndMakeDonuts () {
    function eatDonut(){
        donuts = donuts - 1;
    }
    function makeDonut() {
        var ovenSize = 1;
        donuts = donuts + ovenSize;
    }
    eatDonut();
    makeDonut();
}

eatAndMakeDonuts();

function alternateDonut1 {
    var donuts = 0;

    function eatAndMakeDonuts (howMany) { //create our own "thing" which is defined by the #5
        function eatDonut(){
            donuts = donuts - howMany;
        }
        function makeDonut() {
            var ovenSize = 1;
            donuts = donuts + ovenSize;
        }
        eatDonut(5);
        makeDonut();
    }

eatAndMakeDonuts();
}


function alternateDonut2 {
    var ovenSize = 5;
    var donuts = 0;

    function eatAndMakeDonuts (howMany) { 
        var donuts = 5;
        function eatDonut(){
            donuts = donuts - howMany;
        }
        function makeDonut(ovenSize) {
            var ovenSize = 1;
            donuts = donuts + ovenSize;
        }
        eatDonut(5);
        makeDonut(ovenSize + 1); // changes the value of ovensize within the function eatAndMakeDonuts but not inside alternateDonut2
        makeDonut(4); //by the end of this series we would be shown 5 because we make 10 and eat 5.
    }

eatAndMakeDonuts();
} (); // parenthesis mean run the function immediately after creating it. Allows us to use general functions without a specific name aka function () { };



function alternateDonut3 { //other functions wont run yet
    var ovenSize = 5;
    var donuts = 0;
    var bake = document.getElementById("bake");

    function eatAndMakeDonuts (howMany) { 
        var donuts = 5;
        function eatDonut(){
            donuts = donuts - howMany;
        }
        function makeDonut(ovenSize) {
            var ovenSize = 1;
            donuts = donuts + ovenSize;
        }
        eatDonut(5);
        makeDonut(ovenSize + 1); // changes the value of ovensize within the function eatAndMakeDonuts but not inside alternateDonut2
        makeDonut(4); //by the end of this series we would be shown 5 because we make 10 and eat 5.
    }

bake.onclick = eatAndMakeDonuts();
} (); 

//} ();