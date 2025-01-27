const mongoose = require('mongoose');
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV;
const ENV_MONGODB_URI = process.env[`${NODE_ENV}_MONGODB_URI`];
// console.log(ENV_MONGODB_URI);
mongoose.connect(ENV_MONGODB_URI).then(() => {
    console.log(`Connected to ${NODE_ENV} MONGODB`);
}).catch((err) => {
    console.log(`Error while connecting to ${NODE_ENV} MONGODB, with error - ${err}`);
});