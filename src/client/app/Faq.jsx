import React from 'react';

const axios = require('axios');
const path = require('./common/path.js')['path']();

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faqData: [] }
        this.getFaq = this.getFaq.bind(this);
    }

    getFaq() {
        return axios.get(`${path}data/faq.json`);
    }

    componentWillMount() {
        const handleError = () => {
            // stuff 'n things
        };
        return this.getFaq().then(resp => this.setState({ faqData: resp.data.questions })).catch(err => handleError());
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

        const { faqData } = this.state;
        const faqItems = faqData.map((obj, index) =>
            <div className="faq-block" data-entry={index} key={`faq-section-${index}`}>
                <p className="question" onClick={() => { updatePanel(index); }}>{obj.question}</p>
                <p className="answer">{obj.answer}</p>
            </div>
        );
        
        return (
            <div id="faq" className={'content-container faq' + (this.props.active ? '' : ' hidden')}>
                <h3>FAQ</h3>
                <hr className="gray-rule" />
                {faqItems}
            </div>
        );
    }
}