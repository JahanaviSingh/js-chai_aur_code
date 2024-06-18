// ARRAY

const MyArray = [1, 12, 8, 9, 33]
const myHeroes = ["Superman", "Spider-Man", "Iron Man"]
const arr1 = new Array(1, 3, 44, 75, 87)
console.log(MyArray);
console.log(MyArray[2]);

// ARRAY Methods
MyArray.push(14)
MyArray.pop()
MyArray.unshift(10)
MyArray.shift()
console.log(MyArray.includes(9));
console.log(MyArray.indexOf(9));
const newArray = MyArray.join()
console.log(newArray);
console.log(typeof newArray);
console.log(MyArray);

// slice splice
const myn1 = MyArray.slice(1, 4)
console.log("A", MyArray);

console.log(myn1);
console.log("B", MyArray);

const myn2 = MyArray.splice(1, 4)
//splice : manipulates the original array
console.log(myn2);
console.log("C", MyArray);