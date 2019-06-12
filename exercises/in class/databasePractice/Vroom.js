const express = require('express')
const shipRouter = express.Router()
const data = require('./database')

shipRouter.route('/')

  .get((request, response)=>{
  response.send(data)
})

  .post((request, response)=>{
  const newShip = request.body
  data.push(newShip)
  response.send(newShip)
})

module.exports = shipRouter