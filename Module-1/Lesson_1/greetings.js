// exports.sayHelloInEnglish = function(){
//   return 'Hello'
// }

// exports.sayHelloInSwedish = function(){
//   return 'Hej'
// }

// exports.sayHelloInKinyarwanda = function(){
//   return 'Muraho'
// }

// exports.sayHelloInKiswahile = function(){
//   return 'Mambo vip'
// }

// the alternative code for this are
module.exports = { 
  sayHelloInEnglish() {
    return 'Hello'
  },

  sayHelloInSwedish() {
    return 'Hej'
  },

  sayHelloInKinyarwanda() {
    return 'Muraho'
  },

  sayHelloInKiswahile() {
    return 'Mambo vip'
  }
}