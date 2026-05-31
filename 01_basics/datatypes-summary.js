// primitive data types

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scorevalue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n 


// Non-Primitive Data Types

// Object, Array, Function

const heros = ["Batman", "Superman", "Spiderman"]
let myObj = {
    name: "John",
    age: 30,
    hobbies: ["music", "movies"]
}

const myFunc = function() { 
    console.log("Hello World")
}

//console.log(typeof scoreValue);
console.log(typeof heros)
console.log(typeof anotherId) 
