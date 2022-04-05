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

// 5. Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// squared(5) ➞ 25
// squared(9) ➞ 81
// squared(100) ➞ 10000

// function squared(b) {
// 	return b * b
// }

// console.log(squared(100));
// 6. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value

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

// 7. Write a function that takes an integer minutes and converts it to seconds.

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
//   console.log( x1, x2);
   
// Todo: I need to understand what it means that first parameter don't change but the second one do. And i mean the value
// function change(_student, course){
//  _student = "JavaScript Student";
//  course.name = "JavaScript";
//  course.grade = "100";
// }

// var sampleC = { "name": "HTML", "grade": 90};
// var sampleStudent = "HTML Student"; 

// change(sampleStudent,sampleC);
// console.log(sampleStudent, sampleC.name, sampleC.grade);

// 8. You need to create a loop that can be used to accumulate the students' points.
// Which type of loop should you create?

//  var students = {
//       "James": 300,
//       "Bryan": 350,
//       "Tim": 430,
//       "Mike": 500,
//       "Haley": 250,
//       "Leah": 600,
//       "Liz": 550,
//       "Tom": 150,
// };

// var total = 0; // this is how they started adding the number. 
// for (let item in students) { // this is a for in loop that is grate for objects
//       if (students.hasOwnProperty(item))
//            total += students[item];  //total = total + student[item];
// }
      

// console.log(`Total points: ${total}`);


// 9. Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so:
// create your arrow function below
// let arrowFunc = (r) => {
//  return(r);
// }

// console.log(arrowFunc(4));


// For Example
// arrowFunc(3) ➞ 3
// arrowFunc("3") ➞ "3"
// arrowFunc(true) ➞ true

// let x = 16 + "Volvo"; // In JavaS when you do a sting and a number it will treat that Number as a string
// console.log(typeof(x));

    var student = { name: "John", course: "CS-101" };
    var students = {
      first: { name: "John", course: "CS-101" },
    };
    var courseName = new String("JavaScript");
    var studentCount = new Number(34);
    var openEnrollment = true;
    // console.log(courseName);
    // console.log(studentCount);

    //  if (student == students.first){
    //      console.log("true");
    //  }
    // if (courseName === "JavaScript")  console.log("true");
    // if (studentCount == 34)  console.log("true");
    // if (undefined )console.log("true");
    // if (null)  console.log("true");
    // if (!openEnrollment) console.log("true");
    // if (student) console.log("true");
    // if(100000000) console.log("true");
    // JS String methods

// 1) Javascript String slice()
//string position starts at index of 0
let str = "Apple, Banana, Kiwi";
let part = str.slice(0,4); 
// takes two numbers, and returns everything starting at first number but not second number
// splice INCLUDES the first parameter, but not the LAST parameter.

// let st = "Hello, My Name is Doug";

// let pa = st.slice(3,5);
// console.log(pa.toUpperCase());


// -----
// 2) .indexOf()
// let text = "Hello welcome to the universe"; // indexOf looks for the first character of the word we are searching for.
// let result = text.indexOf("welcome");
// console.log(result);


// let str = "I love Cheescake more than cupcakes.";
// let part = str.indexOf("I") + str.indexOf("love"); // adds index
// console.log(part);
// let part = str.slice(5,8).indexOf("more ");
// console.log(part); // if indexOf never occurs => -1

// 3) .replace()
// let text = "Visit Microsoft and Microsoft!";
// let results = text.replace(/Microsoft/g, "W3Schools");
// console.log(results);


// let str = "Hello, so glad you could make it to my birthday party!!";
// let find = str.replace(" ", " ||").slice(2, 4);
// console.log(find);

// 4) trim - only removed whitespace from START and END of string

// let str = "Hello,so glad you could make it to my birthday party!!";
// let results = str.trim();
// console.log(results);

// 5) match
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/gi); // regex method 
// // g = global, i = case insensitive (don't care if its uppercase or lowercase)
// console.log(result); // what will this return?

// 6) substring
// let text = "The rain in spain stays mainly in the plain";
// let result = text.substring();
// // substring will return characters between numbers. (not including numbers given) 
// console.log(result);





// 7) valueOf
// let text = "The rain in spain stays mainly in the plain";
// let result = text.valueOf(); // converts a string object into a string.
// console.log(result);


// 8) startsWith asks if the position is true or false?
// let text = "The rain in spain stays mainly in the plain";
// let result = text.startsWith("rain", 4); 
// console.log(result); // what would this reuturn?

// 9) let text = "Thank you for applying to CodeCrew. Please make sure you start the Prework.    "
// let part = text.trim().slice(0, 24).replace(" ", "!").substring(1, 4);
// console.log(part)

//  text = text.slice(0, 24).replace(" ", "!").substring(3, 6);
// //substring returns the LAST parameter, but not the first paramenter

// console.log(text);

//lastIndexOf

//fromCharCode

// conCat

//charAt

