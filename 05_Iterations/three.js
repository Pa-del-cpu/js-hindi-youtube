    //for of

    const arr = [1, 2, 3, 4, 5, 6, 7]

    // Take each value from the collection one by one
    for (const num of arr){
        console.log(num);
    }

    const greeting = "Hello World"
    for (const greet of greeting){
        console.log(`Each char is ${greet}`)
    }

    //maps - to identify unique value.

    const map = new Map()
    map.set('IN', "India")
    map.set('USA', "Unites States of India")
    map.set('FR', "France")
    map.set('IN', "India")

    //consol.log(map);

    //HIgh order array loops- because this method take another function as input.

    //forEach  - go through every item one by one

    const coding = ["js", "java", "python"]

coding.forEach(function(item){
    console.log(item)
})

//map - to transform values. Take every value and modify it.

const numbers = [1, 2, 3]

const newNums = numbers.map((num) => {
    return num * 2
})


//filter - used to select specific value. Keep only value matching condition.
console.log(newNums)

const numbers = [1, 2, 3, 4, 5]

const result = numbers.filter((num) => {
    return num > 3
})

console.log(result)

//Reduce

//Used to combine all values into one value.

//Mostly used for:

//total
//sum
//cart price
//calculations

const numbers = [1, 2, 3]

const total = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(total)