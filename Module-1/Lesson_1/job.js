// //job.js
// const LucEmitter = require('events')
// class Job extends LucEmitter{
//   constructor(ops) {
//     super(ops)
//     this.on('giveMe', ()=> {
//       this.process()
//     })
//   }

//   process() {
//     setTimeout(()=>{
//         this.emit('done', {completedOn: new Date()})
//     }, 700)
//   }
// }

// module.exports = Job


const LucEmail = require('events')

class Email extends LucEmail {
  constructor(arg) {
    super(arg)
    this.on('startEmail', ()=> {
      this.process()
    })
  }
  process() {
    setTimeout(()=>{
      this.emit('done', {completedOn: new Date()})
    }, 700)
  }
}

module.exports = Email