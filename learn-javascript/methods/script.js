// // count to 1000 using the odd numbers
//    var arr = []
//    for (var i = 0; i < 1000; i++) {
//        arr[arr.length] = (i * 2) + 1;
//    }
//    console.log(arr);
//
//
//// does same thing as above
//    var arr = []
//    for (var i = 0; i < 1000; i++) {
//        arr.push((i * 2) + 1); //push adds an element to the end of an array
//    }
//    console.log(arr);
//
//var newArr = [];
//for (var j=0; j<arr.length; j++) {
//    if(arr[j] % 5 ==0) {
//        newArr.push(arr[j]);
//    }
//}
//
////while(arr.length > 0) { //destructive method of doing above for loop. Push starts removing from end of array
////    var e = arr.pop();
////    if (e % 5 == 0) {
////        newArr.push(e);
////    }
////}
////console.log(newArr);
//
////while(arr.length > 0) { //shift removes from front of an array
////    var e = arr.shift();
////    if (e % 5 == 0) {
////        newArr.shift(e);
////    }
////}
////console.log(newArr);

//var arr = [1,2,3,"hello",4,5,6];
//var index = arr.indexOf("hello");
//
//console.log(index);
//
//var arr2 = [1,2,3,"hello",4,5,"hello",6]; 
//var index2 = arr2.indexOf("hello"); // only returns first hello index#
//
//console.log(index2);
////-1 means not there


////Splice
////arr.splice(start, deleteCount)
//var arr = [1,2,3,"hello",4,5,6];
//arr.splice(3, 1); //will only take out the element at arr[3] because of 1. If it were arr.splice(3, 2) we would remove arr[3] and arr[4]
//console.log(arr);

//var arr = ["a",7, "f", "X", "b", "d", 3];
//arr.sort();
////arr.reverse(); // reverses the order of sort, can put it on above and 'chain it' ex: arr.sort().reverse();
//console.log(arr);

////Slice
//var arr = ["a", "b", "c", "d", "e", "f"];
//var newArr = arr.slice(1,3); //don't need to put numbers in, but with this I am starting at 1 and going up to 3 (but not including 3).
////var newArr = are.slice(0, arr.length); //copy the entire array
//console.log(arr);
//console.log(newArr);

//Join
//Slice
var arr = ["a", "b", "c", "d", "e", "f"];
var newArr = arr.slice(1,3); 
console.log(arr.join("-"));

//Split


var toRev = "hello world"
var asArray = toRev.split("");
asArray.reverse();
var rev = asArray.join("");
console.log(rev);


