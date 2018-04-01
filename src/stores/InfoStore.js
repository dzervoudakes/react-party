const AppDispatcher = require('@/dispatcher/AppDispatcher.js');
const EventEmitter = require('events').EventEmitter;

const InfoStore = Object.assign({}, EventEmitter.prototype, {
	emitChange: function() { this.emit('change'); },
	info: {}
});

AppDispatcher.register(payload => {
	switch (payload.actionName) {
		case 'GET_INFO':
			const { info } = payload;
			InfoStore.info = info;
			InfoStore.emitChange();
			break;
	}
});

module.exports = InfoStore;