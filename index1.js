
var express = require("express");

var kk = express();

var pp = express();

kk.listen(3001);

kk.get("/", (req, res) => {
    res.send("Hello Super Duper Man!!");
});


kk.get("/vendors", (req, resp) => {
    resp.json({name: "sunil", phone: "9346894439"});
});