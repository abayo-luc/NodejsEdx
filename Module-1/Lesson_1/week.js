var Email = require ('./job.js')
var email = new Email()

email.on('done', function(details){
  console.log('Hello Joseph Mugwaneza, I would like to communicate that you are purely an asshole', details.completedOn)
})


// job.process()
email.emit('startEmail')