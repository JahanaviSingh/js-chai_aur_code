// singleton
//object.create

//object literals
const mysym = Symbol("key1")
const JsUser = {
    name : "Jahanavi ",
    "full name" : "Jahanavi Singh",
    [mysym] : "mykey",
    age : 22,
    email : "Jahanavisingh09@gmail.com",
    location : "Meerut",
    isLoggedIn : false,
    daysLoggedIn:["Monday","Thursday"]
}
console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email = "jsp@google.com"
//Object.freeze(JsUser)
JsUser.email = "jp@google.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greeting2 = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
