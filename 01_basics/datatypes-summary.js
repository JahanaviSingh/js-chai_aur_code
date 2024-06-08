/* PRIMITIVE
   7 Types--> String, Number, Boolean, null, undefined, Symbol, BigInt
   
   REFERENCE(Non Primitive)
   Array, Objects, Functions */
   const Num1 = null
   const id = Symbol('123')
   const anotherID = Symbol('123')
   console.log(id===anotherID);

   const bigNumber = 112234654098765423456n

   const heroes = ["batman","superman","wonderwomen"]
   const newObj = {
    name:"jahanavi",
    age:22
   }

   const myFunction = function () {
    console.log("hello world");
   }
   console.log(typeof bigNumber);
   console.log(typeof Num1);
   // type of null gives object



   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

   // Stack(Primitive), Heap(Non-Primitive)
   let myYTname = "Jahanavi Singh"
   let anotherYTname = myYTname
   anotherYTname = "Sahaj Pratap Singh"

   console.log(myYTname);
   console.log(anotherYTname); 

   let userOne = {
    email: "js@123.com",
    upi:"8859390249@paytm"
   }
   let userTwo = userOne
   userTwo.email = "user2@google.com"
   console.log(userOne);
   console.log(userTwo);