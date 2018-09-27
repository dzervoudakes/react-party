import Info from '@/components/info';
import importer from 'common/hocs/importer';

const routes = [
	{
		path: '/',
		component: Info
	},
	{
		path: '/faq',
		component: importer(() => import(/* webpackChunkName: "faq" */ '@/components/faq'))
	},
	{
		path: '/rsvp',
		component: importer(() => import(/* webpackChunkName: "rsvp" */ '@/components/rsvp'))
	}
];

export default routes;
