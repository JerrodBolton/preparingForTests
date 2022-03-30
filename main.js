// alert("Why do I feel the way that I am feel");

// let ceil = Math.ceil(-100.5); //This is something that round up 
// let floor = Math.floor(100.5); //This is something that round down 
// let round = Math.round(100.5); //This is something that round up 

// console.log(`Ceil:${ceil} Floor:${floor} Round:${round}`);

// var date = new Date(2017, 0);
// the first num is  year 
// the first num is number month


// 1. Create a function that takes the age in years and returns the age in days.


// function calcAge(age) {
//  let days = age * 365 
//  return(days)

// //  return("hello edabit.com");
// }

// console.log(calcAge(65));

// 2. Write a function that converts hours into seconds.

//  0-23 will be past in as the hour 
// function howManySeconds(hours) {
//  let min = hours * 60;
//  return(sec = min * 60)
//  //  return("hello edabit.com");
// }

// console.log(howManySeconds(2));

// 3.Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr) {
// 	return(arr.shift()); // get the first thing in array "shift out"
// //  return("hello edabit.com");
    
// }

// // getFirstValue([1, 2, 3]) ➞ 1
// // getFirstValue([80, 5, 100]) ➞ 80
// // getFirstValue([-500, 0, 50]) ➞ -500


// console.log(getFirstValue([5,6,5,7]));

// 4. Create a function that takes length and width and finds the perimeter of a rectangle.

// function findPerimeter(length, width) {
//  // I think that if I Multiply the two parameters my wanted outcome
//  return(length + length + width + width)
// }
// console.log(findPerimeter(6, 7)); // This should be 6 

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// squared(5) ➞ 25
// squared(9) ➞ 81
// squared(100) ➞ 10000

// function squared(b) {
// 	return b * b
// }

// console.log(squared(100));
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value

// function remainder(x, y) {
//  // There is a method that allows you you to divide to parameters
//  let z = x % y 
//  return(z)
// }

// console.log(
// remainder(1, 3),
// remainder(3, 4),
// remainder(-9, 45),
// remainder(5, 5)
// );

// Write a function that takes an integer minutes and converts it to seconds.

// function convert(minutes) {
// let min = minutes
// let sec = min * 60
// return(sec)

// }

// console.log(
// convert(5),
// convert(3),
// convert(2)
// );
// function whichIsLarger(f , g) {

// // console.log(`f is: ${f} g is: ${g}`);
// // console.log(`the value of f is:${f.valueOf()} the value of g is ${g.valueOf()} `);
//  let result;
// if(f > g){ // If f returns the biggest #, return the string f.
// // console.log("I stop at the first on");
//  result = "f";
// }
// else if (f < g ){// If g returns the biggest #, return the string g.
// // console.log("I stop at the second one");
//  result = "g";
// }
// else{
// // console.log("I stop at the last one");
//  return("neither"); //If the functions return the same number, return the string neither.
// }
// return(result)

// }

// console.log(
// whichIsLarger(() => 5, () => 10),
// whichIsLarger(() => 25,  () => 25),
// whichIsLarger(() => 505050, () => 5050)
//)

//   var x1 = Math.ceil(Math.LN10);
//   var x2 = Math.floor(Math.LN2);


   console.log( x1, x2);
   
