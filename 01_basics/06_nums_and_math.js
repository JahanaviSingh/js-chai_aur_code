const score = 300
console.log(score);

const balance = new Number(200)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.656
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++
const roundno = 4.5
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(roundno));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,5,2.8));
console.log(Math.max(3,5,2.8));
console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);