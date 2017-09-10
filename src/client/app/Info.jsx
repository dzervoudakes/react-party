// @TODO: PULL IN DATE, TIME AND LOCATION FROM A DB ROW (make sure it only calls/renders ONCE)

import React from 'react';

export class Info extends React.Component {
    render() {
        return (
            <div id="whenWhere" className={'content-container when-where' + (this.props.active ? '' : ' hidden')}>
                <h3>When/Where</h3>
                <hr className="gray-rule" />
                <ul className="when-where-list">
                    <li><span className="t-heavy">Date:</span> Saturday, August 26th</li>
                    <li><span className="t-heavy">Time:</span> 5pm to question mark</li>
                    <li><span className="t-heavy">Location:</span> Tyson's House</li>
                </ul>
            </div>
        );
    }
}