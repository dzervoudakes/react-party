import React from 'react';

const axios = require('axios');

export class Info extends React.Component {
    constructor() {
        super();
        this.state = { infoData: {} };
    }

    getInfo() {
        return axios.get('/api/get?data=info');
    }

    componentWillMount() {
        const { openDialog } = this.props;
        return this.getInfo()
            .then(resp => this.setState({ infoData: resp.data }))
            .catch(err => {
                const opts = { message: 'There was an error getting the when/where info.', title: 'Lame...' };
                openDialog(opts);
            });
    }
    
    render() {
        const { infoData } = this.state;
        const keys = Object.keys(infoData);
        const listItems = keys.map(key =>
            <li key={key}><span className="t-heavy">{key}:</span> <span dangerouslySetInnerHTML={{ __html: infoData[key] }} /></li>
        );
        return (
            <div id="whenWhere" className="content-container when-where">
                <h3 className="title">When/Where</h3>
                <hr className="gray-rule" />
                <ul className="when-where-list">{listItems}</ul>
            </div>
        );
    }
}