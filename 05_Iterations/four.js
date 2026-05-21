const myObject = {
    js: 'javascript',
    CPP: 'C++',
    rb: 'rubby',
    swift: 'swift by apple'
}

//for (const key in myObject) {
 //   console.log(myObject[key]); // to print value
//}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // to print value
}
//js- is a key
//javascript - is a value

// for objects we will use for in loop and for array we will use for of loop.

const programming = ['js', 'rb', 'py', 'java', 'cpp']