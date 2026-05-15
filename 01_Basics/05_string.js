const name = "Pallavi"
const repocount = 50

console.log(name + " " + repocount + " " + "value")
console.log (`Hello my name is ${"Pallavi"} and my repo count is ${repocount}`);

const gameName = new String('Pallavipal')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //value 't' does not exist so output is showing -1. 
console.log(gameName.indexOf('v'));
console.log(gameName.toLocaleLowerCase());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString  = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   pallavi   "
console.log(newStringOne.trim());

const url = "https//pallavi.com/pallavi20%khairnar100#ayush"

console.log(url.replace('20%', '-', ))
console.log(url.replace('100#', '-'))



