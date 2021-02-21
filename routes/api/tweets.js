const express = require("express");
const router = express.Router() //gets a router object from router
const passport = require("passport")
const validateTweetInput = require("../../validation/tweets")
const Tweet = require("../../models/Tweet")

router.get("/test", (req, res) => {
    res.json({msg: "This is the tweet route"})
})

//get all tweets that are currently available
router.get("/", (req, res) => {
    Tweet
        .find() //no filter, so getting everything back
        .sort({date: -1}) //newest first
        .then(tweets => res.json(tweets) )
        .catch(err => res.status(400).json(err))
})

//get all tweets by a specific user
router.get('/user/:user_id', (req, res) => {
    Tweet
        .find({user: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(400).json(err))
})

//get a specific tweet
router.get("/:id", (req, res) => {
    Tweet
        .findById({users: req.params.id})
        .then(tweet => res.json(tweet))
        .catch(err => res.status(400).json(err))
})

router.post("/",
    passport.authenticate("jwt", {session: false}), //jwt = strategy, passport = middleware
    (req, res) => {
        const {isValid, errors} = validateTweetInput(req.body)

        if(!isValid) {
            return res.status(400).json(errors)
        }

        const newTweet = new Tweet({
            user: req.user.id,
            text: req.body.text
        })

        newTweet
            .save()
            .then(tweet => res.json(tweet))
    }
)

module.exports = router;
