const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.port || 8080;

global.__dirname = __dirname;

app.use(history());

if (process.env.NODE_ENV === 'development') {
	const middleware = require('./build/dev-middleware');
	const { devMiddleware, hotMiddleware } = middleware;

	app.use(devMiddleware);
	app.use(hotMiddleware);
}

if (process.env.NODE_ENV === 'production') {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'index.html'));
	});
}

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`react-party booted up on port ${port}`);
});
