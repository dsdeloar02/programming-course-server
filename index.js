const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors');

app.use(express.json())
app.use(cors())

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Api is Running');
}) 

app.get('/categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => {
    console.log('Server is runnig', port)
})