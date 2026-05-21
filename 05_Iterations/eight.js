const mynums = [1, 2, 3]
const myTotal = mynums.reduce (function (acc, currVal) {
    console.log(`acc: ${acc} and currval: ${currVal}`); //this will show what values are used in acc and currval
    return acc + currVal;      //by using sum function
}, 0);
//console.log(myTotal)

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, currVal) => { 
    return acc + currVal;       //by using sum function
}, 0);

//console.log(sum);

const multiple = numbers.reduce((acc, currVal) => {  //by using multiplication function
    return acc * currVal;
}, 1);

//console.log(multiple)

//acc stands for accumulater
//currval stands for current value
//reduce function = is used to combine all array elements into single value.

//const myTotal = numbers.reduce ( (acc, currVal) => acc+currVal, 0) //by using arrow function

const shoppingCart = [
    {
        itemName: "Java course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 3999

    },
    {
        itemName: "Data Science course",
        price: 12999
 
    },
    {
        itemName: "mobile dev course",
        price: 8950
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)