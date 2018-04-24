import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Info from '../info';
import FaqContainer from '../faq';
import Rsvp from '../rsvp';

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
			<FaqContainer openDialog={openDialog} />
		</Route>
		<Route path="/rsvp">
			<Rsvp openDialog={openDialog} />
		</Route>
	</Switch>
);

Routes.propTypes = propTypes;

export default Routes;