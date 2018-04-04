import React from 'react';

const RsvpForm = ({ firstNameInvalid, lastNameInvalid, submitForm }) => (
	<form className="rsvp-form">
		<div className="form-input-container left">
			<label htmlFor="firstName">First Name:</label>
			<input id="firstName" className={firstNameInvalid ? 'invalid' : ''} name="firstName" type="text" />
		</div>
		<div className="form-input-container right">
			<label htmlFor="lastName">Last Name:</label>
			<input id="lastName" className={lastNameInvalid ? 'invalid' : ''} name="lastName" type="text" />
		</div>
		<input className="submit-button" type="submit" onClick={submitForm} value="Reserve My Spot" />
	</form>
);

export default RsvpForm;