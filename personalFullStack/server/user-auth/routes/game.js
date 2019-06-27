const express = require("express");
const gameRouter = express.Router();
const Game = require("../models/game");

gameRouter.get('/', (req, res, next) => {
  console.log(req.user_id)
  Game.find({user: req.user._id}, (err, games) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.send(games)
  })
})

gameRouter.post('/', (req, res, next) => {
  console.log(req.user._id)
  const game = new Game(req.body)
  game.user = req.user._id
  game.save(function (err, newGame) {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(newGame)
  })
})

gameRouter.get("/:gameId", (req, res, next) => {
  Game.findOne( {_id: req.params.gameId, user: req.user._id}, (err, game) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      if (!game) {
          res.status(404)
          return next(new Error("No game item found."));
      }
      return res.send(game);
  });
});

gameRouter.put("/:gameId", (req, res, next) => {
  Game.findOneAndUpdate(
      {_id: req.params.gameId, user: req.user._ids},
      req.body,
      { new: true },
      (err, game) => {
          if (err) {
              console.log("Error");
              res.status(500);
              return next(err);
          }
          return res.send(game);
      }
  );
});

gameRouter.delete("/:gameId", (req, res, next) => {
  Game.findOneAndRemove({_id:req.params.gameId, user:req.user._id}, (err, game) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      return res.send(game);
  });
});

module.exports = gameRouter

// not completeted
// don't really know what we'll be needing a game component for yet