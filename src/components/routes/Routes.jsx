import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Info, Faq, Rsvp } from '@/components';

// @TODO: REMOVE THE NEED TO PASS PROPS INTO THIS COMPONENT

const propTypes = {
	openDialog: PropTypes.func.isRequired
};

const Routes = ({ openDialog }) => (
	<Switch>
		<Route exact path="/">
			<Info openDialog={openDialog} />
		</Route>
		<Route path="/faq">
			<Faq openDialog={openDialog} />
		</Route>
		<Route path="/rsvp">
			<Rsvp openDialog={openDialog} />
		</Route>
	</Switch>
);

Routes.propTypes = propTypes;

export default Routes;