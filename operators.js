//Arithmetic Operators
let a = 45;
let b = 4;
//console.log("a + b = ", a + b);
//console.log("a - b = ", a - b);
//console.log("a / b = ", a / b);    //devide
//console.log("a * b = ", a * b);    //multiply
//console.log("a ** b = ", a ** b);    //exponentiation
//console.log("a % b = ", a % b);      //modulus (reminder)
//console.log("a++ = ", a++);        // post increment
//console.log("++a = ", ++a);      // pre increment
//console.log("--a = ", --a);      // pre decrement
//console.log("a-- = ", a--);     // post decrement

// ++++++++ Assignment operators ++++++++++++
let assignment = 1;
assignment += 5; // same as assignment = assignment + 5
//console.log("assignment is now = ", assignment);
assignment -= 5; // same as assignment = assignment - 5
//console.log("assignment is now = ", assignment);
assignment *= 5; // same as assignment = assignment * 5
//console.log("assignment is now = ", assignment);
assignment /= 5; // same as assignment = assignment / 5
////console.log("assignment is now = ", assignment);

// ++++++++++++ Comparison Operators ++++++++++++++++
let comp1 = 6;
let comp2 = 7;
// console.log("comp1 == comp2 is", comp1 == comp2);
// console.log("comp1 != comp2 is", comp1 != comp2);
// console.log("comp1 === comp2 is", comp1 === comp2);
// console.log("comp1 !== comp2 is", comp1 !== comp2);
// console.log("comp1 > comp2 is", comp1 > comp2);
// console.log("comp1 < comp2 is", comp1 < comp2);
// console.log("comp1 <= comp2 is", comp1 <= comp2);
// console.log("comp1 >= comp2 is", comp1 >= comp2);

// ++++++++++++ Logical Operators ++++++++++++++
let x = 5;
let y = 6;
console.log(x < y && x == 5); //logical and
console.log(x > y || x == 5); //logical or
console.log(!false); //logical not
console.log(!true);

// +++++++++++++ Ternery Operators +++++++++
const age = 20;
const message =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet.";
console.log(message); // Output: You are eligible to vote.

// ++++++ examples ++++++++
//  let a = 5,
//  let  b = 2;
//  console.log((a + b) * (a - b));

// let a = 5;
//   let b = 2;
//   let result = a ** b - (a % b);
//   console.log(result);

//console.log("azka" == 200);  //false
//console.log(false === 0);    //false
let c = 2;
//console.log(c++ === ++c); //false
//console.log(c++ == c++);   //false
//console.log(++c == c++);   //true
//console.log(c++ > c++);   //false
//console.log(++c > c++);   //false
//console.log(c++ < c++);   //true 
//console.log(++c < c++);   //false
console.log(c++ <= c++);   //true
console.log(++c <= c++);   //true






// let g = 5;
// let h = g++;
// console.log(g, h);
// console.log(h);
