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
        let infoData;
        axios
            .get(`${path}data/info.json`)
            .then(resp => {
                infoData = resp.data;
                this.setState({ infoData: infoData });
            })
            .catch(err => {
                // @TODO: let's put some err handlin' here, ya? => material-ui dialog ;)
            });
    }

    componentWillMount() {
        this.getInfo();
    }
    
    render() {
        const data = this.state.infoData;
        const keys = Object.keys(data);
        const listItems = keys.map(key =>
            <li key={key}><span className="t-heavy">{key}:</span> {data[key]}</li>
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