const express = require('express');
const bodyParser = require('body-parser');
const jsonfile = require('jsonfile');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// @TODO: SEPARATE THE FOLLOWING METHODS AND USE SOMETHING MORE DESCRIPTIVE THAN 'GET'

router.get('/get', (req, res) => {
	const query = req.query.data;
	const file = `${global.__dirname}/public/data/${query}.json`;
	jsonfile.readFile(file, (err, obj) => {
		if (!err) res.send(obj);
		if (err) {
			res.sendStatus(500);
		}
	});
});

router.post('/rsvp', (req, res) => {
	const file = `${global.__dirname}/public/data/rsvp.json`;
	jsonfile.writeFile(file, req.body.attendees, err => {
		if (!err) res.sendStatus(200);
		if (err) {
			res.sendStatus(500);
		}
	});
});

module.exports = router;
