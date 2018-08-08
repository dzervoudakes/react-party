import Info from '@/components/info';
import FaqContainer from '@/components/faq';
import Rsvp from '@/components/rsvp';

const routes = [
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

export default routes;
