//function sayMyName(){
//console.log("P");
//console.log("A");
//console.log("L");
//console.log("L");
//console.log("A");
//console.log("V");
//console.log("I");
//}

//sayMyName //reference
//sayMyname() //Execute

//function addTwoNumbers(number1, number2){
  // console.log(number1 + number2);
//}

function addTwoNumbers (number1, number2) {
   let result = number1 + number2
   return result
}
const result =addTwoNumbers(3, 4)

console.log("Result = ", result);

//function logInuserMessage(userName){
   //return `${userName} is just logged in`
//}
//console.log(logInuserMessage("Pallavi")) // at ("Pallavi") if we dont put any valuen here then wil say undefined.

function logInuserMessage(userName){
   if(!userName){
      console.log("Please enter a username");
      return
   }
}

//console.log(logInuserMessage())

function calculateCartPrice (...num1){ // (...abc)rest operator
return num1
}

const user = {
userName: "pallavi",
price: 199
}

function handleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}