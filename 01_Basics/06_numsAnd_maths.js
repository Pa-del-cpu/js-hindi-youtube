const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toFixed(1)); // show one digit after decimal point.

console.log(balance.toString())// convert the value in string data type.
console.log(balance.toString().length) // to know the length of the value stored in the variable.

const otherNumber = 65.655353

console.log(otherNumber.toPrecision(4))

//+++++++++++++++++++++++++++++++++++ MAths +++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //find the absolute value of -4. (Distance from Zero)
console.log(Math.round(4.6)); //to round of the value
console.log(Math.ceil(4.6)); //Round the number upward to the nearest integer and print it. So output will be 5.
console.log(Math.floor(4.9)); //Round the number downward to the nearest integer and print. Son output will be 4.
console.log(Math.min(4, 9, 3, 6, 7, 1));
console.log(Math.max(4, 9, 8, 1, 12, 34, 9, 97));

console.log(Math.random()) //gives random decimal numbers between 0 to 1.
console.log(Math.random()*10) //to generate random number between 0 to 9.999
console.log(Math.random()*10 + 1) // to generate random number between 1 to 10.

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// this formula is used to generate random numbers between 10 to 20.
