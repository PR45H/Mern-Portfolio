const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const connection = require('./config/db.connection');

// health check
app.get('/', (req, res) => {
    res.send('Server responsed')
})

app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${process.env.PORT} & database is connected`);
        
    } catch (error) {
        console.log(`Server is not running due to ${error}`);
        
    }
})