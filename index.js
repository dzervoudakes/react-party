const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*/app.min.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/api/post-rsvp', (req, res) => {
    const file = `${__dirname}/public/data/rsvp.json`;
    jsonfile.writeFile(file, req.body.attendees, err => {
        if (!err) res.sendStatus(200);
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
});

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(3000, () => {
    console.log('react-party booted up on port 3000');
});