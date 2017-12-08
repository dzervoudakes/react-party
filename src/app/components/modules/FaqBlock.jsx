import React from 'react';

export class FaqBlock extends React.Component {
    render() {
        const { answer, index, question, updatePanel } = this.props;
        return (
            <div className="faq-block" data-entry={index}>
                <p className="question" onClick={() => updatePanel(index)}>{question}</p>
                <p className="answer" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        )
    }
}