import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Info, Faq, Rsvp } from '@/components';

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

export default Routes;