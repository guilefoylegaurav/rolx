const express = require('express')
const app = express()
const path = require('path');

require('dotenv').config();
const router = (global.router = (express.Router()));
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(express.json());

app.use('/api/ads', require('./routes/ad.js'));
app.use('/api/profile', require('./routes/profile.js'));
app.use(router);


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});