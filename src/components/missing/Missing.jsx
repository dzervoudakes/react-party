import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => (
	<>
		<h3 className="title">That's a 404</h3>
		<hr className="gray-rule" />
		<p>You must be lost... Click <Link to="/">here</Link> to return to the main application.</p>
	</>
);

export default Missing;
