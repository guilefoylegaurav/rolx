const express = require('express')
const app = express()
const path = require('path');

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/try', (req, res) => {
    res.send('Hello World!')
})


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});