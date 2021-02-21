const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users' //name of model to associate this with
    },
    text: {
        type: String,
        required: true
    },
    date: { //timestamp
        type: Date,
        default: Date.now
    }
})

const Tweet = mongoose.model('tweet', TweetSchema)

module.exports = Tweet
