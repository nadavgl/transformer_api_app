const express = require('express')

const db = require('./config/connection')
const api_routes = require('./routes/api_routes')

const app = express();
const PORT = 3333;

app.use(express.json())

// Load our routes

app.use('/api', api_routes)

db.once('open', () => {
    console.log('Db connection established')
    // Start express server
    app.listen(PORT, () => {
        console.log('Express server started on port', PORT)
    });
})

