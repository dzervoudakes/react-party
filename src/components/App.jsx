import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Header from './header';
import Footer from './footer';
import Routes from './routes';

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
					<Routes openDialog={ this.openDialog } />
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

export default App;
