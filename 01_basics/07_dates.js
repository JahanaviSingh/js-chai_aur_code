// DATES

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2024,2,9)
let myCreatedDate = new Date("2017-09-29")
console.log(myCreatedDate.toDateString());
let myCreatedDateTime = new Date(2024,2,9,6,7,8);
console.log(myCreatedDateTime.toLocaleString());
console.log(myCreatedDateTime.getMonth());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date(2001,12,9)

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}
));