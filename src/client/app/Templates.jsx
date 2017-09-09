import React from 'react';
import FlatButton from 'material-ui/FlatButton';

export class Header extends React.Component {
    render() {
        const { active, show } = this.props;
        return (
            <header className="header">
                <div className="gray-bar">
                    <p className="t-brand">Party At Tyson's</p>
                    <div className="button-bar">
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