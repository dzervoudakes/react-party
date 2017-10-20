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
        return (
            <header className="header">
                <div className="gray-bar">
                    <p className="t-brand">Party At Tyson's</p>
                    <div className="button-bar phone-hidden">
                        <FlatButton
                            disabled={active.whenWhereView}
                            label="When/Where"
                            labelStyle={{ color: '#fff', fontSize: '16px', opacity: active.whenWhereView ? '0.5' : '1', textTransform: 'none' }}
                            onClick={() => { show('whenWhereView') }}
                            secondary={true}
                        />
                        <FlatButton
                            disabled={active.faqView}
                            label="FAQ"
                            labelStyle={{ color: '#fff', fontSize: '16px', opacity: active.faqView ? '0.5' : '1', textTransform: 'none' }}
                            onClick={() => { show('faqView') }}
                            secondary={true}
                        />
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
                        onRequestChange={() => { this.setMenuState(); }}
                        width={200}
                    >
                        <MenuItem onClick={() => { show('whenWhereView'); this.setMenuState(); }}>When/Where</MenuItem>
                        <MenuItem onClick={() => { show('faqView'); this.setMenuState(); }}>Faq</MenuItem>
                    </Drawer>
                </div>
                <div className="blue-banner">
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