// @TODO: GENERATE THE FAQ BLOCKS DYNAMICALLY BASED ON NUMBER OF ENTRIES IN A MONGO DB TABLE
// @TODO: GRAB THE TEXT FOR EACH QUESTION AND ANSWER FROM THE DB ROW
// @TODO: MAKE AN ACCORDION/COLLAPSE PANEL FOR THE FAQ ENTRIES

import React from 'react';

export class Faq extends React.Component {
    render() {
        return (
            <div id="faq" className={'content-container faq' + (this.props.active ? '' : ' hidden')}>
                <h3>FAQ</h3>
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
            </div>
        );
    }
}