const express = require('express');
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors');

app.use(express.json())
app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Api is Running');
}) 

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCours = courses.find(p => p.category_id === id);
    res.send(singleCours);
})

app.listen(port, () => {
    console.log('Server is runnig', port)
})