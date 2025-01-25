// const express = require("express");
// const server = express();
// const PORT = 3000;

// server.use(express.json());
// server.get("/api/v1/greet", (request, response) => {
//     console.log("Request Received");
//     response.send({
//         success: true,
//         message: "Hello World"
//     });
// });

// server.post("/api/v1/short/new", (request, response) => {
//     console.log(request.body);
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const server = express();

const PORT = 4000;
server.use(express.json()); // to read the body data , 

server.get('/getdata', (req, res) => {
    console.log('GET request received');
    res.send({
        success: true,
        message: 'GET request received successfully'
    });
});

server.post("/short-url", (req,res)=>{
    const url = req.body.url;

    if( !url){
        return res.status(400).send({
            success: false,
            message: 'URL is required'
            
        });
        
    }

    res.send({
        success: true,
        message: 'URL is valid'
    });

    function newurl(){
        const url = req.body.url;
        const shortUrl = 'http://localhost:4000/' + Math.random().toString(36).substring(2, 7);
        res.send({
            success: true,
            message: 'Short URL created',
            data: {
                url,
                shortUrl
            }
        });
    }

})
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
