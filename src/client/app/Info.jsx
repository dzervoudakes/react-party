import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const axios = require('axios');
const path = require('./common/path.js')['path']();

export class Info extends React.Component {
    constructor() {
        super();
        this.state = { infoData: {}, dialogOpen: false };
        this.getInfo = this.getInfo.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    getInfo() {
        return axios.get(`${path}data/info.json`);
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    componentWillMount() {
        const handleError = () => {
            this.setState({ dialogOpen: true });
        };
        return this.getInfo().then(resp => this.setState({ infoData: resp.data })).catch(err => handleError());
    }
    
    render() {
        const { infoData } = this.state;
        const keys = Object.keys(infoData);
        const listItems = keys.map(key =>
            <li key={key}><span className="t-heavy">{key}:</span> <span dangerouslySetInnerHTML={{ __html: infoData[key] }} /></li>
        );

        const actions = [
            <FlatButton label="Close" onClick={this.handleDialogClose} primary={true} />
        ];

        return (
            <div id="whenWhere" className={'content-container when-where' + (this.props.active ? '' : ' hidden')}>
                <h3>When/Where</h3>
                <hr className="gray-rule" />
                <ul className="when-where-list">{listItems}</ul>
                <Dialog
                    actions={actions}
                    onRequestClose={this.handleDialogClose}
                    open={this.state.dialogOpen}
                    title={this.props.dialogText}
                />
            </div>
        );
    }
}