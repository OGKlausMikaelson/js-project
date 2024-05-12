const accountID = 123456 //const- constant cannot change
let accountName = "Raunak" // better use this way
var accountEmail = "lesgoo@gmail.com"
accountCity = "Kanpur" //not a good way to use
/*
Prefer not to use var due functional scope and block scope
*/
console.log(accountID)
console.table([accountID,accountName,accountEmail,accountCity])

let accountSalary  // output is undefined