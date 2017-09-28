import React from 'react';

const axios = require('axios');
const path = require('./common/path.js')['path']();

export class Info extends React.Component {
    constructor() {
        super();
        this.state = { infoData: {} };
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo() {
        return axios.get(`${path}data/info.json`);
    }

    componentWillMount() {
        const handleError = () => {
            // stuff 'n things
        };
        return this.getInfo().then(resp => this.setState({ infoData: resp.data })).catch(err => handleError());
    }
    
    render() {
        const { infoData } = this.state;
        const keys = Object.keys(infoData);
        const listItems = keys.map(key =>
            <li key={key}><span className="t-heavy">{key}:</span> {infoData[key]}</li>
        );
        
        return (
            <div id="whenWhere" className={'content-container when-where' + (this.props.active ? '' : ' hidden')}>
                <h3>When/Where</h3>
                <hr className="gray-rule" />
                <ul className="when-where-list">{listItems}</ul>
            </div>
        );
    }
}