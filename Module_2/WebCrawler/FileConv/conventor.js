const cvs = require('csvtojson')
const fs = require('fs')
let myArray 
cvs()
  // the following code convert cvs data to json formt
  .fromFile('./customer-data.csv', function(err, result){
    if (err) {
      console.log("An error has occured")
      console.log(err)
    }
    myArray = result
  })

  // once the converting process is done and the data are avialable, the below code process to create json file containing the data
  .on('done', (error)=>{
    if (error) return process.exit(1)
    // the line console in the terminal shwoing the data array
    console.log(myArray)
    //the following code create the file name customer-data.json and write with converted json data
    fs.writeFile('customer-data.json', JSON.stringify(myArray, null, 2), (error)=>{
      // Calling an asynchronous function without callback is deprecated. So this part of the code are part of our callk back function
      if(error) return process.exit(1)
      console.log('The file customer-data.json has been create and populated with data from customer-data.csv')
      process.exit(0)
    })
  })