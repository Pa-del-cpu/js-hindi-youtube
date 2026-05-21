const coding = ["js", "cpp", "java", "python", "ruby"]

coding.forEach( function (item){
    console.log(item);
})

coding.forEach ((val) => {
    console.log(val);
})

function printMe (item, index, arr){
    console.log(item, index, arr);
}
coding.forEach(printMe)