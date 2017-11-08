import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Info } from './Info.jsx';
import { Faq } from './Faq.jsx';
import { Rsvp } from './Rsvp.jsx';
import { Header, Footer } from './Templates.jsx';
require('../sass/style.scss');

// @TODO: FIGURE OUT WHAT STUFF CAN BE FURTHER REUSED/COMPONENTIZED

class PartyTime extends React.Component {
    constructor() {
        super();
        this.state = { whenWhereView: true, faqView: false, rsvpView: false };
        this.updatePageView = this.updatePageView.bind(this);
    }

    updatePageView(view) {
        if (view === 'whenWhereView') return this.setState({ whenWhereView: true, faqView: false, rsvpView: false });
        if (view === 'faqView') return this.setState({ whenWhereView: false, faqView: true, rsvpView: false });
        if (view === 'rsvpView') return this.setState({ whenWhereView: false, faqView: false, rsvpView: true });
    }

    render() {
        const { whenWhereView:w, faqView:f, rsvpView:r } = this.state;
        const active = {
            whenWhereView: w,
            faqView: f,
            rsvpView: r
        };

        const dialogText = view => {
            return `Ay yo, Tyson... Something went wrong when trying to grab the '${view}' data. You should talk to Daaan Zeee and get him to fix it for you.`;
        };

        return (
            <div className="wrapper">
                <Header active={active} show={this.updatePageView} />
                <div className="panel">
                    <Info active={active.whenWhereView} dialogText={dialogText('When/Where')} />
                    <Faq active={active.faqView} dialogText={dialogText('FAQ')} />
                    <Rsvp active={active.rsvpView} dialogText={dialogText('RSVP')} />
                </div>
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