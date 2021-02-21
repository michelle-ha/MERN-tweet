const express = require("express");
const router = express.Router() //gets a router object from router
const User = require("../../models/User") //import user model
const bcrypt = require("bcryptjs")
const keys = require('../../config/keys')
const jwt = require('jsonwebtoken')

router.get("/test", (req, res) => {
    res.json({msg: "This is the user route"})
})

router.post('/register', (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if (user) { //means user already exists
            return res.status(400).json({email: "A user is already registered with that email"})
        } else {
            const newUser = new User ({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password
            })

            //ONLY FOR TESTING. TAKE THIS OUT
            // newUser.save()
            //     .then(user => res.send(user))
            //     .catch(err => res.send(err));

            bcrypt.genSalt(10, (err, salt) => {  // 10 = # rounds doing to generate salt 
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err
                    newUser.password = hash
                    newUser.save()
                        .then((user) => res.json(user))
                        .catch(err => console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email}) //look up user by email (email : email)
        .then(user => {
            if(!user) {
                return res.status(404).json({email: "This user does not exist."})
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        // res.json({msg: "Success"})
                        const payload = {
                            id: user.id,
                            handle: user.handle,
                            email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer" + token
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({password: "Incorrect password"})
                    }
                })
        })
})

module.exports = router;