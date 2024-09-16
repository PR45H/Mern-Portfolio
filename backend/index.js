const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;
const connection = require('./config/db.connection');
const portfolioRouter = require('./routes/portfolioRouter');

app.use(cors({ origin: 'https://prashant-babu-portfolio.netlify.app/' }));
app.use(express.json());
app.use('/api/portfolio', portfolioRouter);

// health check
app.get('/', (req, res) => {
    res.send('Health check complete : Server responsed')
})

app.listen(port, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${process.env.PORT} & database is connected`);
        
    } catch (error) {
        console.log(`Server is not running due to ${error}`);
        
    }
})