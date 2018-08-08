import Info from '@/components/info';
import FaqContainer from '@/components/faq';
// import Missing from '@/components/Missing';
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
	// {
	// 	component: Missing
	// }
];

export default routes;
