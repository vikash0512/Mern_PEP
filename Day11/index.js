const express = require('express');
require('dotenv').config();
require('./src/db/connect');
const {v1Router} = require('./src/router/v1/index');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env[`${NODE_ENV}_PORT`];

const server = express();
server.use("/api/v1", v1Router);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});