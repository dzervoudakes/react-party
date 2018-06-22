const AppDispatcher = require('@/dispatcher/AppDispatcher.js');
const axios = require('axios');

const getRsvp = () => {
	return axios.get('/api/get?data=rsvp');
};

const postRsvp = data => {
	return axios.post('/api/rsvp', data);
};

const dispatchGetEvent = (list, err) => {
	AppDispatcher.dispatch({
		actionName: 'GET_RSVP',
		attendees: list.length ? list : []
	});
};

const dispatchPostEvent = (list, err) => {
	AppDispatcher.dispatch({
		actionName: 'POST_RSVP',
		attendees: list
	});
};

const RsvpAction = {
	getRsvp: failure => {
		return getRsvp()
			.then(resp => dispatchGetEvent(resp.data))
			.catch(err => { dispatchEvent([], err); failure(); });
	},
	postRsvp: (data, failure) => {
		return postRsvp(data)
			.then(resp => dispatchPostEvent(resp.data))
			.catch(err => { dispatchEvent([], err); failure(); });
	}
};

module.exports = RsvpAction;
