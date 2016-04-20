//While Loops

var i = 0
while (i < 10) {
    console.log(i); // cannot put i+1 in console.log because it is infinite since i will never change
    i = i + 1; //creates a check this is needed or it will crash because it is infinite without
}

console.log("done");

//a for loop is the same as a while loop but condences the info

for(var i = 0; i <= 10; i=i+1){
    console.log(i);
}
console.log("done"); //same thing as above



var arr3 = ["1", "2", "3", "4", "5"];

for (var i = 4; i >= 0; i= i - 1) {
    console.log(arr3[i]);
    }
    

/*
Modulo: Remainder after division

0   0
1   1
2   2
3   3  
4   4
5   0
6   1
7   2
8   3
9   4
10  0
*/

//var stars;
//var numStars = 5;
//
//for (var i = 0; i < numStars; i++) {
//    stars = stars + "*";
//    console.log(stars); //will only print 5 stars, not decending
//}

var stars2;
var numStars2 = 5;

for (var i = 0; i < numStars2; i++) {
    stars2 = "";
        for (var j = 0; j <i; j++){
            stars2 = stars2 + "*";
        }
    console.log(stars2); 
}

var stars3;
var numStars3 = 5;

for (var m = 0; m < numStars3; m++) {
    stars3 = "";
    for (var n = 0; n < numStars3 - m - 1; n++) {
        stars3 += " ";
    }
    for (var o = 0; o <= m; o++) {
        stars3 += "*";
    }
    console.log(stars3);
}