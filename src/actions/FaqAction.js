const AppDispatcher = require('@/dispatcher/AppDispatcher.js');
const axios = require('axios');

const getFaq = () => {
	return axios.get('/api/get?data=faq');
};

const dispatchEvent = list => {
	AppDispatcher.dispatch({
		actionName: 'GET_FAQ',
		faq: list
	});
};

const FaqAction = {
	getFaq: failure => {
		return getFaq()
			.then(resp => dispatchEvent(resp.data))
			.catch(err => { dispatchEvent([], err); failure(); });
	}
};

module.exports = FaqAction;