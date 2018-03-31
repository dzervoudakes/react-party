import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class MenuListItem extends React.PureComponent {
    render() {
        const { path = '', label, flat = false, onClick } = this.props;
        if (flat) {
            const labelOpts = { color: '#fff', fontSize: '16px', textTransform: 'none' };
            return (
                <Link to={`/${path}`}>
                    <FlatButton
                        label={label}
                        labelStyle={labelOpts}
                        secondary={true}
                    />
                </Link>
            );
        } else {
            return (
                <Link to={`/${path}`}>
                    <MenuItem onClick={() => onClick()}>{label}</MenuItem>
                </Link>
            );
        }
    }
}

export default MenuListItem;