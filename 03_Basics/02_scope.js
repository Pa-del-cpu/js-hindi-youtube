//*********************Global Variable*******************/
let username = "Pallavi"   // name is created outside the function. 

function greet() {        //So the function can access it.
    console.log(username)   //Any part of the program can use name.
}

greet()
console.log(username)

//*********************Local Variable*******************/

function greet() {
    let message = "Hello"   // message is created inside the function.
    console.log(message)     // It lives only inside that function. Outside the function, it does not exist.
}

greet()

console.log(message)

function one(){
    const userName = "Hitesh"
    function two{
        const website = "youtube",  // child function can access to parent function in the program.
        console.log(userName);
    }
    two()

}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
        console.log(website);
    }
    //console.log(website)
}
//console.log(username)

