import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Faq, Header, Info, Footer, Rsvp } from './components';
import '../sass/style.scss';

class PartyTime extends React.Component {
	constructor() {
		super();
		this.state = {
			dialog: {
				message: '',
				open: false,
				title: ''
			}
		};
		this.handleDialogClose = this.handleDialogClose.bind(this);
		this.openDialog = this.openDialog.bind(this);
	}

	handleDialogClose() {
		const opts = { message: '', open: false, title: '' };
		this.setState({ dialog: opts });
	}

	openDialog(opts) {
		opts.open = true;
		this.setState({ dialog: opts });
	}

	render() {
		const { message, open, title } = this.state.dialog;
		const actions = [
			<FlatButton label="Close" onClick={this.handleDialogClose} primary={true} />
		];
		return (
			<BrowserRouter basename="/">
				<div className="wrapper">
					<Header />
					<div className="panel">
						<Switch>
							<Route exact path="/">
								<Info openDialog={this.openDialog} />
							</Route>
							<Route path="/faq">
								<Faq openDialog={this.openDialog} />
							</Route>
							<Route path="/rsvp">
								<Rsvp openDialog={this.openDialog} />
							</Route>
						</Switch>
					</div>
					<Dialog
						actions={actions}
						onRequestClose={this.handleDialogClose}
						open={open}
						title={title}
					>
						{message}
					</Dialog>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

// Blue: #007bff
// Dark Gray: #343a40
// Light Gray: #f1f1f1
const partyTheme = {
	borderRadius: '20px',
	fontFamily: 'Questrial, sans-serif',
	palette: {
		accent1Color: '#fff',
		primary1Color: '#007bff'
	}
};

const App = () => {
	return (
		<MuiThemeProvider muiTheme={getMuiTheme(partyTheme)}>
			<PartyTime />
		</MuiThemeProvider>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);