//array

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[0])
const myNames = ["pallavi", "dipali", "denesh", "urvashi", "mitali", "rashi"]

const myArr2 = new Array (2, 4, 6, 8, 10)

console.log(myNames.length)

//Array methods

myArr.push(6)
myArr.push(7)

console.log(myArr)

myArr.pop()

console.log(myArr)

myArr2.shift()

console.log(myArr2)
myArr2. unshift(myArr2)

console.log(myArr2)

console.log(myArr.includes(9));// will give output in the form of true or false
console.log(myArr.includes(4));

console.log(myArr.indexOf(4))

console.log(myNames.includes("denesh"));

const newArr = myArr.join()

console.log(myArr);

const names = ["Pallavi", "Dipali", "Urvashi"]

console.log(names.join(", "))

//slice. splice

console. log("A", myArr); 

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)
