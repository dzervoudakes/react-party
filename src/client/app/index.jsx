import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Faq } from './Faq.jsx';
import { Info } from './Info.jsx';
import { Header, Footer } from './Templates.jsx';

class PartyTime extends React.Component {
    constructor() {
        super();
        this.state = { whenWhereView: true, faqView: false };
        this.updatePageView = this.updatePageView.bind(this);
    }

    updatePageView(view) {
        if (view === 'whenWhereView') return this.setState({ whenWhereView: true, faqView: false });
        if (view === 'faqView') return this.setState({ whenWhereView: false, faqView: true });
    }

    render() {
        const active = {
            whenWhereView: this.state.whenWhereView,
            faqView: this.state.faqView
        };

        const show = {
            whenWhereView: this.updatePageView('whenWhereView'),
            faqView: this.updatePageView('faqView')
        };

        return (
            <div className="wrapper">
                <Header active={active} show={show} />
                <div className="panel">
                    <Info active={active.whenWhereView} />
                    <Faq active={active.faqView} />
                </div>
                <Footer />
            </div>
        );
    }
}

// Blue: #007bff
// Dark Gray: #343a40
// Light Gray: #f8f9fa
const partyTheme = {
    borderRadius: '20px',
    fontFamily: 'Questrial, sans-serif',
    palette: {
        accent1Color: '#fff',
        primary1Color: '#007bff',
        textColor: '#343a40'
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