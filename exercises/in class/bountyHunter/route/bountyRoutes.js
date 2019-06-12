const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')

bountyRouter.post('/', (req, res)=>{
  const newBounty = new Bounty(req.body)
  newBounty.save((err, savedBounty) => {
    if (err) {
      res.status(500)
      return res.send(err)
    } return res.status(201).send(savedBounty)
  })
})

bountyRouter.get('/', (req, res) => {
  Bounty.find((err, allBounties) => {
    if(err){
      res.status(500)
      return res.send(err)
    } return res.status(200).send(allBounties)
  })
})

module.exports = bountyRouter 