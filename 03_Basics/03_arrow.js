const user = {
    userName: "Pallavi",  // this function will access variable within that particular object.
    price: 999,

    welcomeMessage:   function() {
        console.log(`${this.userName}, welcome to website`);
    }
}

user.welcomeMessage()

//function chai(){
 //       console.log(this);

//}

//chai()

//const chai = () => {
 //   let userName = "hitesh"
 //   console.log(this.userName);
//}

//() => {}   // basic syntax of Arrow function

addTwo =(num1, num2) => {   //if you use curly brasses then you need to write retyurn key word.
    return (num1 + num2)
}

addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Pallavi"}) //while using object in arrow function

console.log(addTwo(3, 4))