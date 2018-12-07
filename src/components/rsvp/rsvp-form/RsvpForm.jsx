import React from 'react';
import PropTypes from 'prop-types';
import './RsvpForm.scss';

const propTypes = {
	firstNameInvalid: PropTypes.bool.isRequired,
	lastNameInvalid: PropTypes.bool.isRequired,
	submitForm: PropTypes.func.isRequired
};

const RsvpForm = ({ firstNameInvalid, lastNameInvalid, submitForm }) => (
	<form className="rsvp-form">
		<div className="form-input-container left">
			<label htmlFor="firstName">First Name:</label>
			<input
				id="firstName"
				className={firstNameInvalid ? 'invalid' : ''}
				name="firstName"
				type="text"
			/>
		</div>
		<div className="form-input-container right">
			<label htmlFor="lastName">Last Name:</label>
			<input
				id="lastName"
				className={lastNameInvalid ? 'invalid' : ''}
				name="lastName"
				type="text"
			/>
		</div>
		<input
			className="submit-button"
			type="submit"
			onClick={submitForm}
			value="Reserve My Spot"
		/>
	</form>
);

RsvpForm.propTypes = propTypes;
export default RsvpForm;
