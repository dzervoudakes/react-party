import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from '@/routes';
import Header from './header';
import Footer from './footer';
import Missing from './missing';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dialog: {
				message: '',
				open: false,
				title: ''
			}
		};
	}

	closeDialog = () => {
		const opts = { message: '', open: false, title: '' };
		this.setState({ dialog: opts });
	}

	openDialog = opts => {
		opts.open = true;
		this.setState({ dialog: opts });
	}

	render() {
		const { message, open, title } = this.state.dialog;
		const actions = [
			<FlatButton label="Close" onClick={ this.closeDialog } primary={ true } />
		];
		return (
			<div className="wrapper">
				<Header />
				<div className="panel">
					<Switch>
						{routes.map(route => (
							<Route exact key={ route.path } { ...route } />
						))}
						<Route component={ Missing } />
					</Switch>
				</div>
				<Dialog
					actions={ actions }
					onRequestClose={ this.closeDialog }
					open={ open }
					title={ title }
				>
					{ message }
				</Dialog>
				<Footer />
			</div>
		);
	}
}

export default hot(module)(App);
