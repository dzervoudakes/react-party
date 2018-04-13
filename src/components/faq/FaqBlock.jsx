import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	answer: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	updatePanel: PropTypes.func.isRequired
};

const FaqBlock = ({ answer, index, question, updatePanel }) => (
	<div className="faq-block" data-entry={index}>
		<p className="question" onClick={() => updatePanel(index)}>{question}</p>
		<p className="answer" dangerouslySetInnerHTML={{ __html: answer }} />
	</div>
);

FaqBlock.propTypes = propTypes;

export default FaqBlock;