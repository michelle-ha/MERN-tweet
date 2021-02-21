const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('./keys')

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = keys.secretOrKey //taken from key.js

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => { 
        //done = pass control onto next component when finished (similar to "next" in express middleware)
        console.log(jwt_payload)
        done()
    }))
}
