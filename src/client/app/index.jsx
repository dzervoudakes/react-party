import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Info } from './Info.jsx';
import { Faq } from './Faq.jsx';
import { Rsvp } from './Rsvp.jsx';
import { Header, Footer } from './Templates.jsx';
require('../sass/style.scss');

class PartyTime extends React.Component {
    constructor() {
        super();
        this.state = { dialogOpen: false, errorView: 'When/Where', whenWhereView: true, faqView: false, rsvpView: false };
        this.setErrorView = this.setErrorView.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.updatePageView = this.updatePageView.bind(this);
    }

    updatePageView(view) {
        return this.setState({
            whenWhereView: view === 'whenWhereView' ? true : false,
            faqView: view === 'faqView' ? true : false,
            rsvpView: view === 'rsvpView' ? true : false
        });
    }

    setErrorView(view) {
        this.setState({ dialogOpen: true, errorView: view });
    };

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    render() {
        const { errorView:e, whenWhereView:w, faqView:f, rsvpView:r } = this.state;
        const active = {
            whenWhereView: w,
            faqView: f,
            rsvpView: r
        };

        const actions = [
            <FlatButton label="Close" onClick={this.handleDialogClose} primary={true} />
        ];

        return (
            <div className="wrapper">
                <Header active={active} show={this.updatePageView} />
                <div className="panel">
                    <Info active={active.whenWhereView} setErrorView={this.setErrorView} />
                    <Faq active={active.faqView} setErrorView={this.setErrorView} />
                    <Rsvp active={active.rsvpView} setErrorView={this.setErrorView} />
                </div>
                <Dialog
                    actions={actions}
                    onRequestClose={this.handleDialogClose}
                    open={this.state.dialogOpen}
                    title={`Ay yo, Tyson... Something went wrong when trying to grab the '${e}' data. You should talk to Daaan Zeee and get him to fix it for you.`}
                />
                <Footer />
            </div>
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