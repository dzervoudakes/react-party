import React from 'react';

export class Faq extends React.Component {
    render() {
        return (
            <div id="faq" className={'content-container faq' + (this.props.active ? '' : ' hidden')}>
                <h3>FAQ</h3>
                <hr className="gray-rule" />
                <div className="faq-block">
                    <p className="question">Why are you having a party?</p>
                    <p className="answer">I like to party.</p>
                </div>
                <div className="faq-block">
                    <p className="question">I know you like to party but is there a reason you chose this date?</p>
                    <p className="answer">Floyd Mayweather vs Conor McGregor.</p>
                </div>
                <div className="faq-block">
                    <p className="question">Who is going to win?</p>
                    <p className="answer">Floyd Mayweather.</p>
                </div>
                <div className="faq-block">
                    <p className="question">I'm not very smart and I think Conor McGregor is going to win. Will you bet me?</p>
                    <p className="answer">Yes.</p>
                </div>
                <div className="faq-block">
                    <p className="question">Will there be food provided?</p>
                    <p className="answer">Yes.</p>
                </div>
                <div className="faq-block">
                    <p className="question">Can I bring my dog?</p>
                    <p className="answer">I don't care</p>
                </div>
            </div>
        );
    }
}