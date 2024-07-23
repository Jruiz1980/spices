const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');



//Create server
const app = express()
const port = 4000

connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/products', require('./routes/product'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
