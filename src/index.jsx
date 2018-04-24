import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components';
import './sass/style';

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

const Main = () => (
	<MuiThemeProvider muiTheme={getMuiTheme(partyTheme)}>
		<App />
	</MuiThemeProvider>
);

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);