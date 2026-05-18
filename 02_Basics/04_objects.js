//const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Pallavi Khairnar"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "pallavikhairnar@google.com",
    fullName: {
        userfullname: {
            firstname: "Pallavi",
            lastname:"Khairnar"
        }
    }
}    // is used access nested object value.

//console.log(regularUser.fullName.userfullname.firstname)

//console.log(regularUser.fullName.userfullname.lastname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

console.log(obj4);


const users = [
    {
    },
    {      
    },

]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`)); //is used to check wheather object use specific property or not