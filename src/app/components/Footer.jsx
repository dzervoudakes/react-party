import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p className="t-copyright">Copyright &copy; tynick {new Date().getFullYear()}</p>
            </footer>
        );
    }
}