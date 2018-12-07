import Info from '@/components/info';
import dynamicImport from 'common/hocs/dynamic-import';

const routes = [
	{
		path: '/',
		component: Info
	},
	{
		path: '/faq',
		component: dynamicImport(() =>
			import(/* webpackChunkName: "faq" */ '@/components/faq')
		)
	},
	{
		path: '/rsvp',
		component: dynamicImport(() =>
			import(/* webpackChunkName: "rsvp" */ '@/components/rsvp')
		)
	}
];

export default routes;
