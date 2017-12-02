// this an example of using http with buff which is effective for processing big data. Actually, the number of chunk indicate teh number the big data have been diveded in while they were being processed. More specifically, kugirango urye ikijumba kinini ugicamo ibice and then finaly you end up consuming the entire peice. 
// const http = require('http')
// const url = 'http://nodeprogram.com'
// http.get(url, function(response){
//   let c = 0
//   response.on('data', function(chunk){
//     c++
//     console.log(chunk.toString('utf8'))
//   })
//   response.on('end', function(){
//     console.log('response has ended with' + c + 'chunk(s)')
//   })
// }).on('error', function(error){
//   console.error('Get error: ${error.message}')
// })


// An exmaple in http-get no-buff

const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, function(response){
  response.on('data', function(chunck){
    console.log(chunck.toString('utf8'))
  })
  response.on('end', function(){
    console.log('response has ended')
  })
}).on('error', function(error){
  console.error('Got error:' + error.message)
})