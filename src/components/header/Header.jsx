import React from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuListItem } from '@/components/common';

class Header extends React.Component {
	constructor() {
		super();
		this.state = { mobileMenuOpen: false };
		this.setMenuState = this.setMenuState.bind(this);
	}

	setMenuState(state = false) {
		this.setState({ mobileMenuOpen: state });
	}

	// @TODO: CONDENSE THIS FURTHER...
	
	render() {
		return (
			<header className="header">
				<div className="gray-bar">
					<p className="t-brand">Party At Tyson's</p>
					<div className="button-bar phone-hidden">
						<MenuListItem label="When/Where" flat={true} />
						<MenuListItem path="faq" label="FAQ" flat={true} />
						<MenuListItem path="rsvp" label="RSVP" flat={true} />
					</div>
					<div className="cheeseburger-button phone-visible" onClick={() => this.setMenuState(true)}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
					<Drawer
						disableSwipeToOpen={true}
						docked={false}
						open={this.state.mobileMenuOpen}
						openSecondary={true}
						onRequestChange={() => this.setMenuState()}
						width={200}
					>
						<MenuListItem label="When/Where" onClick={this.setMenuState} />
						<MenuListItem path="faq" label="FAQ" onClick={this.setMenuState} />
						<MenuListItem path="rsvp" label="RSVP" onClick={this.setMenuState} />
					</Drawer>
				</div>
				<div className="banner">
					<h1>Tyson is having a party!</h1>
					<h2>OMG OMG OMG OMG</h2>
				</div>
			</header>
		);
	}
}

export default Header;