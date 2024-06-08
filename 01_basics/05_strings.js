const name = "Jahanavi"
const repoCount = 3

// console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = String("Jahanavi S tc")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(1,5)
console.log(newString);

const anotherString = gameName.slice(-9,5)
//start to end(not included)
console.log(anotherString);

const newStringOne = "     Jahanavi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Jahanavi.com/jahanavi30%singh"
console.log(url.replace('30%','_'));
console.log(url.includes('singh'));
console.log(gameName.split(' '));
console.log(gameName.split(' ',2));
// spilts the string using given parameter and limit