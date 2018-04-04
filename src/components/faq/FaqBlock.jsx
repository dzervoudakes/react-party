import React from 'react';

const FaqBlock = ({ answer, index, question, updatePanel }) => (
	<div className="faq-block" data-entry={index}>
		<p className="question" onClick={() => updatePanel(index)}>{question}</p>
		<p className="answer" dangerouslySetInnerHTML={{ __html: answer }} />
	</div>
);

export default FaqBlock;