// const http = require('http')
// const port = 8000
// http.createServer( function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.end('Hello World\n')
// }).listen(port)

// console.log('Server running at http://localhost:' + port)

// second example

// const http = require('http')
// const port = 3000
// http.createServer(function(request, response){
//     console.log(request.headers)
//     console.log(request.method)
//     console.log(request.statusCode)
//     console.log(request.url)
//     if (request.method == 'POST'){
//       let buff = ''
//       request.on('data', function(chunck){
//         buff += chunck
//       })
//       request.on('end', function(){
//         console.log('Body:' + buff)
//         response.end('\nAccepted Body\n\n')
//       })
//     } else {
//       response.writeHead(200, {'Content-Type': 'text/plain'})
//       response.end('Hello World\n')
//     }
// }).listen(port)

// links to the statusCode
// https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/courseware/5b1591a9-2f1f-1823-68a8-44df873f7ecf/3c78c729-cb3a-0eae-2e1e-750fe176130f/?activate_block_id=block-v1%3AMicrosoft%2BDEV283x%2B2T2017%2Btype%40sequential%2Bblock%403c78c729-cb3a-0eae-2e1e-750fe176130f


const http = require('http')
const port = 3000
http.createServer((request, response) => {
  response.writeHead(404, {
    // 'Content-Length': body.length,
    'Content-Type': 'text/plain' })
  response.statusCode = 200
  response.write('Hello')
  response.end(' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
