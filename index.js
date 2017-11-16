const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');
const favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(bodyParser.json());

app.get('/favicon.ico', (req, res) => {
    res.status(204);
});

app.get('/js/app.min.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

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