// collection of multiple items in a single variable name 
// js array is resizable
// js array can store mix data-type 
// array inside array
// array element cannot be accessed using arbit string
// js array makes a shallow copy ie same reference point ie when we change in initial it change s in the copy as well
const myArr = [1,2,3,4,5,6];
const myHer = ['Thor','Capt. America'];

const myCit = new Array(1,2,3,4)
 // console.log(myArr[2])

//array methods

//myArr.push(7)
// console.log(myArr);

//myArr.unshift(9) // add in the front
//myArr.shift() // shift works with no paramete and removes the value inf ront
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));

// slice splice

// join
const newArray = myArr.join()  // adds all the element of the array into string

//console.log(newArray); // typeof String

const A = [1,2,3,45,56]
const B = ['fa','fsf','sgs','gsgs','sg']

//console.log(A.slice(1,3)); // does not alter the originl array
//console.log(A);
//console.log(B.splice(0,2)); // alter the original array as well
//console.log(B);

