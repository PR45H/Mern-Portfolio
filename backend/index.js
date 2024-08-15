const express = require('express');
const app = express();
require('dotenv').config();

// health check
app.get('/', (req, res) => {
    res.send('Server responsed')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})