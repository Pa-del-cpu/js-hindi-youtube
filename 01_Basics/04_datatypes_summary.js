/// datatypes

//1. primitive
// string, number, boolean, null, undefined, symbol, BigInt

const score = 100  // number type
const scoreValue = 13.5 // number type

const isLoggedIn = false //Boolean type
const outsideTemp = null // null type not zero but empty

let euesrEmail; // undefined data type

const id = Symbol('123') //symbol data type
const anotherId = Symbol('123') //symbol data type

console.log(id===anotherId);

const bigNumber = 84734353888456789678n // \bigInt data type

//2. Reference or non primitive
//Array, objects, functions

const heros = ["shaktiamn", "naagraj", "doga"] // Array data type

let myobj = {
    name: "hitesh",
    age: 25,
}                      // Objects data type


///**************************************Memory*********************/

//stack = primitive Data Type and Heap = non primitive data type

// Stack

let myYoutubeName = "pallavikhairnardotcom"

let anotherName = myYoutubeName
anotherName = "chaiAurCode"

console.log(anotherName);
console.log(myYoutubeName);

// create copy of the variable. Original value remain as it is.
// Changes made in the copy so orginal value remain as it is.

// heap

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}
 let userTwo = user

 userTwo.email = "pallavi@google.com"

 console.log(user.email);
 console.log(userTwo.email);

 // in this, variables are taking reference of the same set of value.
 // whatever value we are updating we are updating it in going to update in the original value.
  