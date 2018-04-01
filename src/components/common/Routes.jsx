import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Info, Faq, Rsvp } from '@/components';

class Routes extends React.Component {
	render() {
		const { openDialog } = this.props;
		return (
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
	}
}

export default Routes;