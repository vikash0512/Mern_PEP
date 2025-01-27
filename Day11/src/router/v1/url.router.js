const express = require('express');
const URLRouter = express.Router();

URLRouter.post("/new", (req, res) => {
    console.log(req.url)
    res.send("ok")
    // res.json({
    //     message: "New short URL created"
    // });
});

module.exports = URLRouter;