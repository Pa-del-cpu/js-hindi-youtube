const coding = ["js", "rubby", "java", "pathon", "cpp"] //Array contains programming languages

//const values = coding.forEach( (item) =>{  //go through everyitem one by one.
  //  console.log(item);
  //  return item
//})

//console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
//console.log(newNums);

const newNumsy = myNums.filter( (num) => { //another method 
    return num > 4
    } )
//console.log(newNumsy);

myNums.forEach( (num) =>{ //another method for same output
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);