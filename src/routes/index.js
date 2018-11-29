import { lazy } from 'react';
import Info from '@/components/info';
import dynamicImport from 'common/hocs/dynamicImport';

const routes = [
	{
		path: '/',
		component: Info
	},
	{
		path: '/faq',
		component: dynamicImport(
			lazy(() => import(/* webpackChunkName: "faq" */ '@/components/faq'))
		)
	},
	{
		path: '/rsvp',
		component: dynamicImport(
			lazy(() => import(/* webpackChunkName: "rsvp" */ '@/components/rsvp'))
		)
	}
];

export default routes;
