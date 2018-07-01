const express = require('express');
const path = require('path');
const fallback = require('connect-history-api-fallback');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.port || 8080;

global.__dirname = __dirname;

app.use(fallback());

if (process.env.NODE_ENV === 'development') {
	const webpack = require('webpack');
	const webpackConfig = require('./build/webpack.dev');
	const webpackDev = require('webpack-dev-middleware');
	const webpackHot = require('webpack-hot-middleware');
	const opn = require('opn');

	const compiler = webpack(webpackConfig);
	const devMiddleware = webpackDev(compiler, {
		publicPath: '/',
		quiet: true
	});

	const hotMiddleware = webpackHot(compiler, {
		log: false,
		heartbeat: 2000
	});

	compiler.plugin('compilation', compilation => {
		compilation.plugin('html-webpack-plugin-after-emit', () => {
			hotMiddleware.publish({ action: 'reload' });
		});
	});

	devMiddleware.waitUntilValid(() => {
		const url = `http://localhost:${port}`;
		opn(url);
	});

	app.use(devMiddleware);
	app.use(hotMiddleware);
}

if (process.env.NODE_ENV === 'production') {
	app.get(/vendor\.(.*)\.min\.js/, (req, res, next) => {
		req.url = `${req.url}.gz`;
		res.set('Content-Encoding', 'gzip');
		res.set('Content-Type', 'text/javascript');
		next();
	});

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '/public/index.html'));
	});
}

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
	// eslint-disable-next-line
	console.log(`react-party booted up on port ${port}`);
});
