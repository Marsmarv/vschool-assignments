const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artSchema = new Schema({
  favoritedArtID: {
    type: Number,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Art", artSchema)