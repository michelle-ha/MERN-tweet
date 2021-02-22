const express = require('express');
const app = express();
const mongoose = require("mongoose")
const db = require("./config/keys").mongoURI //want just the value of the object of the mongoURI key
const users = require('./routes/api/users')
const tweets = require('./routes/api/tweets')
const User = require('./models/User')
const bodyParser = require('body-parser') //tells server what kind of requests it should respond to 
const passport = require('passport');
const path = require('path');

app.use(passport.initialize());
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

mongoose
    .connect(db, {useNewUrlParser: true}) //returns a promise
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({ //apps can respond to other softare (e.g. Postman)
    extended: false
}))

app.use(bodyParser.json()) //wants app to respond to json requests


app.get("/", (req, res) => { 
    //listen for get requests on root route. 
    //Request object + response object
    const user = new User({
        handle: "jim",
        email: "jim@jim.jim",
        password: "password"
    })
    user.save()
    res.send("Hello world!")
});

app.use("/api/users", users) //send users object 
app.use("/api/tweets", tweets)

const port = process.env.PORT || 5000; //either grab production port or port 5000

app.listen(port, () => {console.log(`Listening on port ${port}`)})