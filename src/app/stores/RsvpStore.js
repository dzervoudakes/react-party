const AppDispatcher = require('../dispatcher/AppDispatcher.js');
const EventEmitter = require('events').EventEmitter;

const RsvpStore = Object.assign({}, EventEmitter.prototype, {
	emitGetChange: function() { this.emit('change-get'); },
	emitPostChange: function() { this.emit('change-post'); },
	attendees: []
});

AppDispatcher.register(payload => {
	const { attendees } = payload;
	switch (payload.actionName) {
		case 'GET_RSVP':
			RsvpStore.attendees = attendees;
			RsvpStore.emitGetChange();
			break;
		case 'POST_RSVP':
			RsvpStore.attendees = attendees;
			RsvpStore.emitPostChange();
			break;
	}
});

module.exports = RsvpStore;