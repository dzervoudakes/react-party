import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Info from '@/components/info';
import FaqContainer from '@/components/faq';
import Rsvp from '@/components/rsvp';
import Missing from '@/components/missing';

// @TODO: REMOVE THE NEED TO PASS PROPS INTO THIS COMPONENT

const propTypes = {
	openDialog: PropTypes.func.isRequired
};

const Routes = ({ openDialog }) => (
	<Switch>
		<Route exact path="/">
			<Info openDialog={ openDialog } />
		</Route>
		<Route exact path="/faq">
			<FaqContainer openDialog={ openDialog } />
		</Route>
		<Route exact path="/rsvp">
			<Rsvp openDialog={ openDialog } />
		</Route>
		<Route component={ Missing } />
	</Switch>
);

Routes.propTypes = propTypes;

export default Routes;
