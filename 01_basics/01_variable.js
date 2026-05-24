const accountId = 1234567890
let accountemail = "krishnakantm@gmail.com"
var accountpassword = "krishnakant1234"
accountcity = "Delhi"
let accountstate;


//accountId = 9876543210 // not allowed because accountId is declared with const


accountemail = "krishnakant1234@gmail.com"
accountpassword = "krishnakant5678"
accountcity = "Mumbai"  

console.log(accountId);

/*
Prefer not to use var because it has function scope and can lead to unexpected behavior. Instead, use let for variables that can be reassigned and const for variables that should not be reassigned.
*/
console.table([accountemail, accountpassword, accountcity]);