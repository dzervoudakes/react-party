import React from 'react';

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0 }
    }

    render() {
        const updatePanel = entry => {
            const openContainer = document.querySelector('.faq-block.open');
            const question = document.querySelector(`.faq-block[data-entry="${entry}"]`);
            if (entry !== this.state.entry) {
                if (openContainer !== null) openContainer.classList.remove('open');
                question.classList.add('open');
                this.setState({ entry: entry });
            } else {
                question.classList.toggle('open');
            }
        };

        return (
            <div id="faq" className={'content-container faq' + (this.props.active ? '' : ' hidden')}>
                <h3>FAQ</h3>
                <hr className="gray-rule" />
                <div className="faq-block" data-entry="1">
                    <p className="question" onClick={() => { updatePanel(1); }}>Why are you having a party?</p>
                    <p className="answer">I like to party.</p>
                </div>
                <div className="faq-block" data-entry="2">
                    <p className="question" onClick={() => { updatePanel(2); }}>I know you like to party but is there a reason you chose this date?</p>
                    <p className="answer">Floyd Mayweather vs Conor McGregor.</p>
                </div>
                <div className="faq-block" data-entry="3">
                    <p className="question" onClick={() => { updatePanel(3); }}>Who is going to win?</p>
                    <p className="answer">Floyd Mayweather.</p>
                </div>
                <div className="faq-block" data-entry="4">
                    <p className="question" onClick={() => { updatePanel(4); }}>I'm not very smart and I think Conor McGregor is going to win. Will you bet me?</p>
                    <p className="answer">Yes.</p>
                </div>
                <div className="faq-block" data-entry="5">
                    <p className="question" onClick={() => { updatePanel(5); }}>Will there be food provided?</p>
                    <p className="answer">Yes.</p>
                </div>
                <div className="faq-block" data-entry="6">
                    <p className="question" onClick={() => { updatePanel(6); }}>Can I bring my dog?</p>
                    <p className="answer">I don't care</p>
                </div>
            </div>
        );
    }
}