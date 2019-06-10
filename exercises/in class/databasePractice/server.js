const express = require('express')
const app = express()
const data = require('./database')

app.use(express.json())

app.get('/vroom', (request, response)=>{
  response.send(data)
})

app.post('/vroom', (request, response)=>{
  const newShip = request.body
  data.push(newShip)
  response.send(newShip)
})


app.listen(2000, () => {
  console.log('puta')
})