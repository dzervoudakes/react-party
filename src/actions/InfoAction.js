const AppDispatcher = require('@/dispatcher/AppDispatcher.js');
const axios = require('axios');

const getInfo = () => {
	return axios.get('/api/get?data=info');
};

const dispatchEvent = (obj, err) => {
	AppDispatcher.dispatch({
		actionName: 'GET_INFO',
		info: obj
	});
};

const InfoAction = {
	getInfo: failure => {
        return getInfo()
            .then(resp => dispatchEvent(resp.data))
            .catch(err => { dispatchEvent({}, err); failure(); });
	}
};

module.exports = InfoAction;