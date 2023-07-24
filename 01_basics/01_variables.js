const accountId=123456
let accountEmail='prabhat@gmail.com'
var accountPassword='123456'
accountCity='surat'
let accountState

// accountId=123458 single line comment.
accountEmail='pd@gmail.com'
accountPassword='124578'
accountCity='Ahemdabad'

/* multiline comment
Reassignment to constant variable is not allowed.
prefer not to use var, Beacause of issue in block scope and functional scope.
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])