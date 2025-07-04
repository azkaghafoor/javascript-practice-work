// Example 1
let a = 5;
let b = 2;
console.log((a + b) * (a - b)); //Output: 21


// Example 2
let c = 5;
let d = 2;
let result = c ** d - (c % d);
console.log(result); //Output: 24


// Example 3
let e = "Azka";
let f = 40;
let answer = (e / f) % e ** f;
console.log(answer); //Output : NaN (Not a number)


//Example 4
let h = true;
let i = "Azka";  //NaN (because azka is not a number)
let outPut = (h % i) / h - i;
console.log(outPut);  // Output: NaN (Not a number)


//Example 5
let j = true; // true is converted to value one
let k = 7;
let result2 = (j % k) / j - k;
console.log(result2); // Output: -6


//Example 6
let a1 = 3;
let b1 = 2;
console.log(a1 + b1 / a1 % b1);  //(Output: 3.666666666665)   // first step devide then modulus then plus


// Example 7
let x = 10;
let y = 5;
let z = 2;
console.log(x + y * z); //(Output: 20)    //First multiply then addition
console.log((x + y) * z); //(Output: 30)   //First solved brackets then multiply


// Example 8
let a2 = 6;
let b2= 3;
let c2= 4;
console.log(a2 + b2 * c2 % a2);  //(Output: 6)     //First step multiply then modulus then plus  


//Example 9
let c3 = 5;
let d1 = 2;
let result3 = c3 ** d1 - (c3 % d1);
console.log(result3);  //Output: 24

//Example 10
let res = (4 + 2) ** 2;
console.log(res);   //Output: 36


//Example 11
let res1 = (-3) ** 2;   // -3 * -3
console.log(res1);   //Output: 9


//Example 12
let res2 = -10 % 3;
console.log(res2);  //Output: -1


//Example 13
let x1 = 8;
let y1 = 3;
let result4 = (x1 % y1) + x1 ** y1;   //8 % 3 = 2,   8 ** 3 = 512 ,  2 + 512 = 514
console.log(result4);   //Output: 514


//Example 14
let a3 = true + 3;    // 1 + 3 = 4
let b3 = false * 10;  // 0 * 10 = 0
console.log(a3, b3);   //Output: 4 0


//Example 15
console.log(10 % 3);  // 1 (10 / 3 = 3 remainder 1)
console.log(5 % 2);   // 1
console.log(4 % 2);   // 0


//Example 16
console.log("5" * 2);    // 10   ("5" → 5)
console.log("5" + 2);    // "52" (string + number = string)
console.log(true + 1);   // 2


//Exapmle 17
console.log("5" * 2);    // 10   ("5" → 5)
console.log("5" % 2);    // 1 
console.log(true + 1);   // 2


//Example 18
let t = true;
let num = 6;
let r = (t + num) % 4;
// 1 + 6 = 7
// 7 % 4 = 3
console.log(r); // 3


//Example 19
let str = "hello";
console.log(10 * str); // NaN
console.log(str - 2);  // NaN


//Example 20
let flag = false;
let name = "John";
let result5 = (flag + 1) * name; // (0 + 1) * "John" => 1 * NaN => NaN
console.log(result5);