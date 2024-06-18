// singleton------>
// const tinderUser = new Object();
// non-singleton------>
const tinderUser = {}
tinderUser.id = "jaah@gmail.com"
tinderUser.name = "tinker_bell"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "dms234@yahoo.com",
    full_name : {
        userFullName : {
            firstname : "Daku",
            middlename : "Mangal",
            lastname : "Singh"
        }
    }
}
console.log(regularUser);
console.log(regularUser.full_name.userFullName.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2,...obj3}
console.log(obj4);

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "js in hindi",
    courseFee : "999",
    courseInstructor : "Hitesh"
}
const{courseInstructor : Instructor} = course
console.log(Instructor);

/*{
    "name" : "Jahanavi",
    "course" : "btech",
    "rollNO" : 21134503003
}*/
[
    {},
    {},
    {}
]