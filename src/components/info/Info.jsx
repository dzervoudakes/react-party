import React from 'react';
import PropTypes from 'prop-types';

const InfoAction = require('@/actions/InfoAction.js');
const InfoStore = require('@/stores/InfoStore.js');

const propTypes = {
	openDialog: PropTypes.func.isRequired
};

class Info extends React.Component {
	constructor() {
		super();
		this.state = { info: {} };
	}

	componentWillMount() {
		const { openDialog } = this.props;
		const failure = () => {
			const opts = {
				message: 'There was an error getting the when/where info.',
				title: 'Lame...'
			};
			openDialog(opts);
		};
		const changeHandler = () => {
			const { info } = InfoStore;
			this.setState({ info });
		};
		InfoStore.on('change', changeHandler);
		InfoAction.getInfo(failure);
	}
    
	render() {
		const { info } = this.state;
		const keys = Object.keys(info);
		const listItems = keys.map(key =>
			<li key={ key }>
				<span className="t-heavy">{key}:</span> 
				<span dangerouslySetInnerHTML={{ __html: info[key] }} />
			</li>
		);
		return (
			<div id="whenWhere" className="content-container when-where">
				<h3 className="title">When/Where</h3>
				<hr className="gray-rule" />
				<ul className="when-where-list">{listItems}</ul>
			</div>
		);
	}
}

Info.propTypes = propTypes;

export default Info;
