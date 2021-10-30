const {Pool, Client} = require('pg');
require('dotenv').config();

const dbCredentials = {
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DB,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
};

const pool = new Pool(dbCredentials);

pool.connect();

pool.query('SELECT NOW()', (err, res) => {
    //console.log(err, res);
    pool.end();
});

const getAllWords = () => {
    return new Promise((resolve, reject) => {
        const text = 'SELECT * FROM testwords';
        resolve(pool.query(text));
    });
}

async function getAsyncData() {
    //let data =  await getAllWords();
    return await getAllWords();
}

const logDetails = async (word) => {
    let data = await word;
    console.log('Logging:', data.rows);
}

logDetails(getAsyncData());


module.exports =  {
};