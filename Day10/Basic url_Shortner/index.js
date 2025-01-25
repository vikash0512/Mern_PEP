const express = require('express'); // Import express module
const server = express(); // Create an express server
const PORT = 4000; // Define the port number

server.use(express.json()); // Middleware to parse JSON bodies

const urlDatabase = {}; // In-memory database to store URLs and their metadata

// Endpoint to handle GET requests to /getdata
server.get('/getdata', (req, res) => {
    console.log('GET request received');
    res.send({
        success: true,
        message: 'GET request received successfully'
    });
});

// Endpoint to create a new shortened URL
server.post("/api/v1/short/new", (req, res) => {
    const originalUrl = req.body.url; // Get the original URL from the request body

    if (!originalUrl) { // Check if the URL is provided
        return res.status(400).send({
            success: false,
            message: 'URL is required'
        });
    }

    const shortUrl = 'http://localhost:4000/' + Math.random().toString(36).substring(2, 7); // Generate a short URL
    const expirationTime = Date.now() + 5 * 60 * 1000; // Set expiration time to 5 minutes from now
    urlDatabase[shortUrl] = { originalUrl, clicks: 0, expirationTime }; // Store the URL data in the database

    res.send({
        success: true,
        message: 'Short URL created',
        data: {
            originalUrl,
            shortUrl
        }
    });
});

// Endpoint to inspect all stored URLs
server.get('/inspect-urls', (req, res) => {
    res.send({
        success: true,
        data: urlDatabase
    });
});

// Endpoint to handle redirection from short URL to original URL
server.get('/:shortUrl', (req, res) => {
    const shortUrl = 'http://localhost:4000/' + req.params.shortUrl; // Construct the full short URL
    const urlData = urlDatabase[shortUrl]; // Retrieve the URL data from the database

    if (!urlData) { // Check if the URL exists
        return res.status(404).send({
            success: false,
            message: 'URL not found'
        });
    }

    if (Date.now() > urlData.expirationTime) { // Check if the URL has expired
        return res.status(403).send({
            success: false,
            message: 'Time limit exceeded, please upgrade to a pro plan'
        });
    }

    if (urlData.clicks >= 5) { // Check if the click limit has been exceeded
        return res.status(403).send({
            success: false,
            message: 'Click limit exceeded, please upgrade to a pro plan'
        });
    }

    urlData.clicks += 1; // Increment the click count
    res.redirect(urlData.originalUrl); // Redirect to the original URL
});

// New endpoint to get click count of a shortened URL
server.get('/api/v1/short/:shortUrl/clicks', (req, res) => {
    const shortUrl = 'http://localhost:4000/' + req.params.shortUrl; // Construct the full short URL
    const urlData = urlDatabase[shortUrl]; // Retrieve the URL data from the database

    if (urlData) { // Check if the URL exists
        res.send({
            success: true,
            data: {
                shortUrl,
                clicks: urlData.clicks
            }
        });
    } else {
        res.status(404).send({
            success: false,
            message: 'URL not found'
        });
    }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Process to run this application.

// Add a new endpoint to get the click count of a shortened URL and update the existing code to include this feature.

// index.js+21-0
// Instructions for using Postman
// Shorten a URL:

// Method: POST
// URL: http://localhost:4000/api/v1/short/new
// Body:
// :

// {
//     "url": "https://example.com"
//   }

//   Response:
//   {
//     "success": true,
//     "message": "Short URL created",
//     "data": {
//       "originalUrl": "https://example.com",
//       "shortUrl": "http://localhost:4000/abcde"
//     }
//   }

//   Track clicks of a shortened URL:

// Method: GET
// URL: http://localhost:4000/api/v1/short/:shortUrl/clicks
// Replace :shortUrl with the actual short URL path (e.g., abcde).

// Response :
// {
//     "success": true,
//     "data": {
//       "shortUrl": "http://localhost:4000/abcde",
//       "clicks": 5
//     }
//   }

//   Redirect to the original URL:

// Method: GET
// URL: http://localhost:4000/:shortUrl
// Replace :shortUrl with the actual short URL path (e.g., abcde).
// This will redirect you to the original URL and increment the click count.