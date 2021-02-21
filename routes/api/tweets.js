const express = require("express");
const router = express.Router() //gets a router object from router

router.get("/test", (req, res) => {
    res.json({msg: "This is the tweet route"})
})

module.exports = router;