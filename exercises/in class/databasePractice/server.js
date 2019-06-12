const express = require('express')
const app = express()


//express middleware
app.use(express.json())

app.use('/Vroom', require('./Vroom'))

app.listen(2000, () => {
  console.log('gsvdjsdvhgf')
})