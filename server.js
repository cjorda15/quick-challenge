const express = require('express')
const app = express()
const path = require('path')


app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.use('/assets', express.static(__dirname + "/public"))

app.use('/build', express.static(__dirname+'/build'))

app.get('/apidata',(req,res) => {
  res.json({"id":55})
})


app.listen(process.env.PORT || 3000)
