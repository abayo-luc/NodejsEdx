const sum = require('./utility.js')
let checkingAccountBalance = 200
let savingAccountBalance = 10000
let retirementAccountBalance = 20000
let totalBalance=sum([checkingAccountBalance, savingAccountBalance, retirementAccountBalance])
console.log(totalBalance)