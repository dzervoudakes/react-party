import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Info from '@/components/info';
import FaqContainer from '@/components/faq';
import Rsvp from '@/components/rsvp';
import Missing from '@/components/missing';

// @TODO: REMOVE THE NEED TO PASS PROPS INTO THIS COMPONENT
// ... make a util that opens the dialog and reference it in each component
// ... alternatively, use Redux

const Routes = () => {
	let routes = [
		{
			path: '/',
			component: Info
		},
		{
			path: '/faq',
			component: FaqContainer
		},
		{
			path: '/rsvp',
			component: Rsvp
		}
	];

	routes = routes.map((route, index) => {
		const { path, component } = route;
		return <Route exact key={ index } path={ path } component={ component } />;
	});

	routes.push(<Route key={ routes.length } component={ Missing } />);

	return (
		<Switch>
			{ routes }
		</Switch>
	);
};

export default Routes;
