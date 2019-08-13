const express = require("express")
const artRouter = express.Router()
const Art = require("../models/art")

artRouter.get('/', (req, res, next) => {
  Art.find({user: req.user._id}, (err, art) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.send(art)
  })
})

artRouter.post('/', (req, res, next) => {
  const art = new Art(req.body)
  art.user = req.user._id
  art.save(function (err, newArt) {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(newArt)
  })
})

artRouter.get("/:artId", (req, res, next) => {
  Art.findOne( {_id: req.params.artId, user: req.user._id}, (err, art) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    if (!art) {
      res.status(404)
      return next(new Error("No art item found."))
    }
    return res.send(art)
  })
})

artRouter.put("/:artId", (req, res, next) => {
  Art.findOneAndUpdate(
    {_id: req.params.artId, user: req.user._ids},
    req.body,
    { new: true },
    (err, art) => {
      if (err) {
        console.log("Error")
        res.status(500)
        return next(err)
      }
      return res.send(art)
    }
  )
})

artRouter.delete("/:artId", (req, res, next) => {
  Art.findOneAndRemove({_id:req.params.artId, user:req.user._id}, (err, art) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.send(art)
  })
})

module.exports = artRouter
