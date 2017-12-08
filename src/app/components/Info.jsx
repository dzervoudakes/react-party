import React from 'react';

const axios = require('axios');
const handleError = require('../common/error.js');

export class Info extends React.Component {
    constructor() {
        super();
        this.state = { infoData: {} };
    }

    getInfo() {
        return axios.get('/data/info.json');
    }

    componentWillMount() {
        const { setErrorView } = this.props;
        return this.getInfo().then(resp => this.setState({ infoData: resp.data })).catch(err => {
            setErrorView('When/Where');
            handleError(this);
        });
    }
    
    render() {
        const { infoData } = this.state;
        const keys = Object.keys(infoData);
        const listItems = keys.map(key =>
            <li key={key}><span className="t-heavy">{key}:</span> <span dangerouslySetInnerHTML={{ __html: infoData[key] }} /></li>
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