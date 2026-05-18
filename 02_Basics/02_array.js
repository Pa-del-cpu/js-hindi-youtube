const marvel_heros= ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)

const new_another_array = [[1, 2, 3],[4, 3, 5],[6, 6, 5, 4,[1, 2]]]

const real_another_array = new_another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh")) // It is used to identify the that is it array data type or not. 

console.log(Array.from("Hitesh")) //to convert to array format

console.log(Array.from({name: "hitesh"}))// interesting . it willgive blank array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));