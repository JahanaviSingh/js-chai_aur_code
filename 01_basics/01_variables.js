const accountId=12345
let accountEmail="Jahanavi@google.com"
var accountPassword="6789"
// prefer not to use var because of issue in block scope and functional scope
accountCity="meerut"
let accountState;
// accountId=2 not allowed
accountEmail="singh@google.com"
accountPassword="892023"
accountCity="Khurja"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])