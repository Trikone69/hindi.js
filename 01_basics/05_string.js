const name = "Krishna"
const repocount = "1000"

//console.log(name+repocount+"Value") // Krishna1000

console.log(`My name is ${name.toUpperCase()} and I have ${repocount} repositories`) // My name is KRISHNA and I have 1000 repositories

// String Methods
console.log(name.length) // 7
console.log(name.toUpperCase()) // KRISHNA
console.log(name.toLowerCase()) // krishna

const gameName = new String("Bgmi-2")

//console.log(gameName[0]) // B
//console.log(gameName.__proto__); 

//console.log(gameName.length) // 4
//console.log(gameName.toUpperCase()) // BGMI
//console.log(gameName.charAt(3)) // i
//console.log(gameName.charAt(2)) // m
//console.log(gameName.indexOf("m")) // 2
//console.log(gameName.indexOf("z")) // -1
//console.log(gameName.endsWith("i")) // 

const newString = gameName.substring(0, 2);
console.log(newString) // Bgmi

const anotherString = gameName.slice(-8, 7);
console.log(anotherString) // mi

const newStringoOne = '  Krishna   '
console.log(newStringoOne);
//console.log(newStringoOne.trim()) // Krishna

console.log(newStringoOne.trimStart()) // "Krishna   "
console.log(newStringoOne.trimEnd()) // "  Krishna"

const url = "https://krishna.com/krishna%20trikone"

//console.log(url.replace("%20", "-")) // "https://krishna.com/krishna-trikone"

//console.log(url.includes("Mishra")) // true

console.log(gameName.split("-")) // ["Bgmi", "2"]

