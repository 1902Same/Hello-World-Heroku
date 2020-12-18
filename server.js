var PORT = process.env.PORT || 5000;
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("Someone else");
    res.send("Menu: What do you want? Food or Water?");
})

server.get("/water", (req, res, next) => {
    console.log("Someone asking for Water");
    res.send("Here is Water :)");
})

server.listen(PORT, () => {
    console.log("server is runnig on 3000 port")
})