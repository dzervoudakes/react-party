const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/api');
const port = process.env.port || 3000;

global.__dirname = __dirname;

app.get('*/app.min.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    next();
});

app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/faq', '/rsvp'], (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(port, () => {
    console.log(`react-party booted up on port ${port}`);
});