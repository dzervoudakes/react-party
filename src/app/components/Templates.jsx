import React from 'react';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

export class Header extends React.Component {
    constructor() {
        super();
        this.state = { mobileMenuOpen: false };
        this.setMenuState = this.setMenuState.bind(this);
    }

    setMenuState(state = false) {
        this.setState({ mobileMenuOpen: state });
    }

    render() {
        const { active, show } = this.props;
        const createButton = (view, label) => {
            const labelOpts = { color: '#fff', fontSize: '16px', opacity: active[view] ? '0.5' : '1', textTransform: 'none' };
            return <FlatButton
                disabled={active[view]}
                label={label}
                labelStyle={labelOpts}
                onClick={() => show(view)}
                secondary={true}
            />
        };

        const createMenuItem = (view, label) => {
            return <MenuItem onClick={() => { show(view); this.setMenuState(); }}>{label}</MenuItem>;
        }
        
        return (
            <header className="header">
                <div className="gray-bar">
                    <p className="t-brand">Party At Tyson's</p>
                    <div className="button-bar phone-hidden">
                        {createButton('whenWhereView', 'When/Where')}
                        {createButton('faqView', 'FAQ')}
                        {createButton('rsvpView', 'RSVP')}
                    </div>
                    <div className="cheeseburger-button phone-visible" onClick={() => this.setMenuState(true)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <Drawer
                        disableSwipeToOpen={true}
                        docked={false}
                        open={this.state.mobileMenuOpen}
                        openSecondary={true}
                        onRequestChange={() => this.setMenuState()}
                        width={200}
                    >
                        {createMenuItem('whenWhereView', 'When/Where')}
                        {createMenuItem('faqView', 'FAQ')}
                        {createMenuItem('rsvpView', 'RSVP')}
                    </Drawer>
                </div>
                <div className="banner">
                    <h1>Tyson is having a party!</h1>
                    <h2>OMG OMG OMG OMG</h2>
                </div>
            </header>
        );
    }
}

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p className="t-copyright">Copyright &copy; tynick {new Date().getFullYear()}</p>
            </footer>
        );
    }
}