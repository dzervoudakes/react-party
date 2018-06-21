const AppDispatcher = require('@/dispatcher/AppDispatcher.js');
const EventEmitter = require('events').EventEmitter;

const FaqStore = Object.assign({}, EventEmitter.prototype, {
	emitChange: function() { this.emit('change'); },
	faq: []
});

AppDispatcher.register(payload => {
	switch (payload.actionName) {
	case 'GET_FAQ':
		const { faq } = payload;
		FaqStore.faq = faq;
		FaqStore.emitChange();
		break;
	}
});

module.exports = FaqStore;