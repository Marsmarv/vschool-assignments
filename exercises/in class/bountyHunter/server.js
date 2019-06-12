const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 9887

app.use(express.json())

mongoose.connect(
  'mongodb://localhost:27017/bountyhunter',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }, ()=> {
    console.log("connected to mongodb")
  })

app.use('/bounty', require('./route/bountyRoutes.js'))

app.listen(port, () => console.log(`connected on port ${port}`))