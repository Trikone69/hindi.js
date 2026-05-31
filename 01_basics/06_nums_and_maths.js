const score = 40000
//console.log(score)

const balance = new Number(100000)
//console.log(balance)

//console.log(balance.toString().length) // "100000"
//console.log(score.toFixed(2)) // "40000.00"
//console.log(balance.toFixed(5)) // "100000.00000"

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(3)) // "124"

const hundred = 1000000
//console.log(hundred.toLocaleString('en-IN'))// "1,000,000"
//+++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

//console.log(Math) // 3.141592653589793
//console.log(Math.round(4.6)) // 5
//console.log(Math.ceil(4.6)) // 5
//console.log(Math.floor(4.6)) // 4
//console.log(Math.abs(5)) // 5
//console.log(Math.sqrt(25)) // 5
//console.log(Math.min(5, 6, 2, 3, 1)) // 1
//console.log(Math.max(5, 6, 2, 3, 1)) // 6

console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1) // 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 to 20
