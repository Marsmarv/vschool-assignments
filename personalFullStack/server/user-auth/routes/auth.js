const express = require('express')
const User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
  User.findOne({username: req.body.username}, (err, existingUser) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    
    if (existingUser !== null) {
      res.status(400)
      return next(new Error('Username already exists'))
    }
    const newUser = new User(req.body)
    newUser.save((err, user) => {
      if (err) {
        res.status(500)
        return next(err)
      }

      const token = jwt.sign(user.toObject(), process.env.SECRET)
      return res.status(201).send({success: true, user: user.toObject(), token})
    })
  })
})

authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()},(err, user) => {
    if(err) {
      return next(err)
    }

    if (!user || user.password !== req.body.password) {
      res.status(403)
      return next(new Error('Email or password are incorrect'))
    }

    user.checkPassword(req.body.password, (err, isMatch)=>{
      if(err) {
        res.status(401)
        return next(err)
      }
      if (!isMatch){
        res.status(401)
        return next(new Error("username or password are incorrect"))
      }
    })
    const token = jwt.sign(user.toObject(), process.env.SECRET)
    return res.send({token: token, user: user.toObject(), success: true})
  })
})


authRouter.put("/like/:objectID", (req, res, next) => {
  User.findOneAndUpdate(
    {_id: req.user._id},
    {$push: {favorites: req.params.objectID}},
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

module.exports = authRouter