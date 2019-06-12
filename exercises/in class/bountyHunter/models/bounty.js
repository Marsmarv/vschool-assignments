const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bounty: {
    type: Number
  }
})

module.exports = mongoose.model('Bounty', bountySchema)