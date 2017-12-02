// we will be saving chunks instead of proccessing one by one.

const http = require('http')
const url = 'http://www.nexpal.com'
http.get(url, function(response){
  let buff = ''
  let c = 0
  response.on('data', function(chunck){
    buff += chunck
    ++c
  })
  response.on('end', function(){
    console.log(buff, c)
  })
  response.on('error', function(error){
    console.error('second error', error)
  })
}).on('error', function(error){
  console.error('got error:' + error.message)
})


// this the example of processing json data

// To process JSON, developers must get the entire response, otherwise the JSON format won't be valid. For this reason, we use the buffer variable rawData. When the response has ended, we parse the JSON

const https = require('https')
const urlTwo = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(urlTwo, function(response){
  let rawData = ''
  response.on('data', (chunck)=>{
    rawData += chunck
  })

  response.on('end', ()=>{
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch(e){
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error('Got error:' + error.message)
})