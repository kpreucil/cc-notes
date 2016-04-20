var cats = [
  "sneakers", "modulo", "chairman meow", "pickles", "elvis" //cat names  
];

// console.log(cats[0])


/* Shows how we get to var c

Math.random(); //gives a number between 0 and 1 aka [0 -> 1) = can get 0 but never get 1
Math.random() * cats.length; // [0 ->5)
Math.floor(Math.random * cats.length); // 0, 1, 2, 3, 4, (rounds down to nearest integer because using floor. If using ceiling would be 1, 2, 3, 4, 5 because round up).
*/

var c = Math.floor(Math.random * cats.length); // proper way to do this

//alternate way/ what var c is saying in layman:

//var rand = Math.random();
//if (rand < 0.3) {
//    return cats[0];
//} else if (rand < 0.6) {
//    return cats[1];
//} else if (rand < 0.7) {
//    return cats[2];
//} else if (rand < 0.8) {
//    return cats[3];
//} else {
//    return cats[4];
//}

console.log(cats[c]); //chooses a random cat
console.log(cats[c]); //logs same cat name as before because does not re-run c

console.log(typeof(c)); // number
console.log(typeof(cats)); //object (array) = same thing
console.log(typeof(cats[c])); //string = defines which cat we get
