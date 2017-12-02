const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, '../Lesson_1/Module-1/simpale.js'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})
