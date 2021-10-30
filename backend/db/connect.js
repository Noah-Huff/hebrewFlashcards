const {Pool, Client} = require('pg');
require('dotenv').config();

const dbCredentials = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DB,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
};

module.exports =  {
};