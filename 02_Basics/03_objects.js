//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pallavi",
    "full name": "Pallavi Khairnar",
    [mySym]: "MyKey1", //imoportant. this is perfect format of symbol data type.
    age: 31,
    location: "Pune",
    email: "pallavikhairnar@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday", "Wenesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

console.log(typeof mySym)

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())