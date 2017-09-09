import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class PartyTime extends React.Component {
    render() {
        return (
            <h1>Hai guys</h1>
        );
    }
}

// Blue: #007bff
// Dark gray: #343a40
// Light gray: #f8f9fa
const partyTheme = {
    fontFamily: 'Questrial, sans-serif',
    palette: {
        primary1Color: '#00bcd4'
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