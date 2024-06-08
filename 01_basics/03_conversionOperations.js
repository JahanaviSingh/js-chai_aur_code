let score = "33abc"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// 33 => 33
// abc => NaN
// null => 0
// undefined => NaN
// true => 1

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// 1 => true    0 => false
// " " => false 
// "Jahanavi" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
//*************************operations***********************
let value = 4
let negValue = -value
console.log(negValue);
console.log(2+2);
console.log(2-2); 
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1 = "hello"
let str2 = " Shubham"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(3+1+"2");

console.log(+true);
console.log(+"");