// const EventEmitter = require('events')
// class Job extends EventEmitter {}
// job = new Job()

// job.on('done', function(timeDone){
//   console.log('Job was pronounced done at', timeDone)
// })

// job.emit('done', new Date())
// job.removeAllListeners()


// More advanced code

// const EventEmitter = require('events')

// class Emitter extends EventEmitter{}
// emitter = new Emitter()

// emitter.on('knock', function(){
//   console.log('who\'s there?')
// })

// emitter.on('knock', function(){
//   console.log('Go away!')
// })

// emitter.emit('knock')
// emitter.removeAllListeners()
// emitter.emit('knock')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('event', function(){
  setTimeout( function(){
    console.log('an event accured!')
  }, 700)
})

myEmitter.on('name', function() {
  setTimeout(()=> {
    console.log('Jean Luc Abayo')
  }, 700)
})

myEmitter.emit('name');


// passing arguments and this to listenrs

const mySecondEmitter = new MyEmitter()

mySecondEmitter.on('try', (a, b) => {
  console.log(a + b);
})

mySecondEmitter.emit('try', 1, 2);


// handling events only once: you do this by using once in stead of on
const myThirdEmitter = new MyEmitter()
let m = 0
myThirdEmitter.once('do', ()=> {
  console.log(++m)
})

myThirdEmitter.emit('do')
// will prind 1
myThirdEmitter.emit('do')
// whill be ignored as the event has already emitted


// an exmaple of a class event
const myFourthEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myFourthEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myFourthEmitter.on('event', () => {
  console.log('A');
});
myFourthEmitter.emit('event');
// Prints:
//   B
//   A
