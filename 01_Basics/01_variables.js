const accountId = 144553
let accountEmail = "pallavi@gmail.com"
var accountPassword = "12356"
accountCity = "Pune"
let accountState;

// accountId = 2// not allowed because it is constant

accountEmail = "manasi@gmail.com"
accountPassword = "1234223344"
accountCity = "Nashik"

console.log(accountId);

/* Prefer not to use var
   Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])