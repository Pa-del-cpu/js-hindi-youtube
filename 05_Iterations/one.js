//for(initialization; condition; increment/decrement){
    // code
//}  basic syntax for loop

for(let index = 1; index<= 5; index++){
    //console.log(index)
}

for(let i = 1; i <= 5; i++){ // it stop giving output after 2 ones it verify i = 3.

    if(i === 3){
        break
    }

    //console.log(i)
}

for(let i = 1; i <= 10; i++){
    if(i ===5 ){
        continue
    }
    console.log(i)
}