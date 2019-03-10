const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const chalk = require('chalk');
const apiRoutes = require('./routes/api');
const config = require('./config');

const app = express();
const port = process.env.port || 8080;

global.__dirname = __dirname;

app.use(history());

if (config.isDevelopment) {
	const middleware = require('./build/dev-middleware');
	const { devMiddleware, hotMiddleware } = middleware;

	app.use(devMiddleware);
	app.use(hotMiddleware);
} else {
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, 'public', 'index.html'));
	});
}

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(chalk.cyan(`react-party server booted up on port ${port}`));
});
