const express = require('express');
const app = express();

app.get("/", (req, res) => { 
    //listen for get requests on root route. 
    //Request object + response object
    res.send("Hello world")
});

const port = process.env.PORT || 5000; //either grab production port or port 5000

app.listen(port, () => {console.log(`Listening on port ${port}`)})