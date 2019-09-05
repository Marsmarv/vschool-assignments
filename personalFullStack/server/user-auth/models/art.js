const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artSchema = new Schema({
  favoritedArt: {
    type: String,
    required: false
  },
  likes:{
    type: Number,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Art", artSchema)