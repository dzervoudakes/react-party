import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	path: PropTypes.string,
	flat: PropTypes.bool
};

const defaultProps = {
	onClick: null,
	path: '',
	flat: false
};

const MenuListItem = props => {
	const { path , label, flat, onClick } = props;
	if (flat) {
		const labelOpts = { color: '#fff', fontSize: '16px', textTransform: 'none' };
		return (
			<Link to={ `/${path}` }>
				<FlatButton
					label={ label }
					labelStyle={ labelOpts }
					secondary={ true }
				/>
			</Link>
		);
	} else {
		return (
			<Link to={ `/${path}` }>
				{
					onClick !== null ?
						<MenuItem onClick={ () => onClick() }>{label}</MenuItem> :
						<MenuItem>{label}</MenuItem>
				}
			</Link>
		);
	}
};

MenuListItem.propTypes = propTypes;
MenuListItem.defaultProps = defaultProps;

export default MenuListItem;
