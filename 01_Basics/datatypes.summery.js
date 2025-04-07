// ----------Lec-> 9------...................

 /* 
 On the basic of put and access data in memora/database Theare are two type of Data
 1). Primitive DataType.
 2). Non-Primitive DataType/Reference Type.

 */
// .............--------------------.............................-------------------------------------

/* Primitive-----> 7 types(call by value)
 String, Number, Boolean, Null, Undefined, Symbol(to make unique a value), BigInt.
 */

// ....................--------------------------------------......................................

// Reference Type/Non-Premitive.
// Array, Objects, Functions.----->  all three have same datatype called Function.

const heros = ["Shaktiman", "Naagraj", "Doga"]; //Arrays.
let myObj = {                       // Objects.
    name: "Deepak",
    age:22,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof(myObj));
console.log(typeof heros);
console.log(typeof(myfunction));


// ...................---------------------..............................----------------------...............

/*
javaScript is Dynamically typed language
* A dynamically typed language is a programming language where variable types are checked at runtime.
*Example=>
     let age = 25;          // 'age' is a number
     let name = "Alice";    // 'name' is a string

*/

// Symbols.............
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId); // Both are different---> false.

// BigInt representation...............
const bigNumber = 1234567899874456n // n represent the no: is BigInt.

console.log(typeof(bigNumber))

let arr=["deepak",'RadhaRani',"love"]
console.log(typeof arr)  // Output: "object"   
// In JavaScript, arrays are technically a type of object.