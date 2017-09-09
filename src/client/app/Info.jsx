// @TODO: PULL IN DATE, TIME AND LOCATION FROM A DB ROW

import React from 'react';

export class Info extends React.Component {
    render() {
        return (
            <div id="whenWhere" class={'content-container when-where' + (this.props.active ? '' : ' hidden')}>
                <h3>When/Where</h3>
                <ul className="when-where-list">
                    <li>Date: Saturday, August 26th</li>
                    <li>Time: 5pm to question mark</li>
                    <li>Location: Tyson's House</li>
                </ul>
            </div>
        );
    }
}