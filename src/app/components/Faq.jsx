import React from 'react';
import { FaqBlock } from './modules/FaqBlock.jsx';

const axios = require('axios');

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faqData: [] };
        this.updatePanel = this.updatePanel.bind(this);
    }

    getFaq() {
        return axios.get('/api/get?data=faq');
    }

    componentWillMount() {
        const { openDialog } = this.props;
        return this.getFaq()
            .then(resp => this.setState({ faqData: resp.data.questions }))
            .catch(err => {
                const opts = { message: 'There was an error getting the FAQ data.', title: 'D\'oh!' };
                openDialog(opts);
            });
    }

    updatePanel(entry) {
        const openContainer = document.querySelector('.faq-block.open');
        const question = document.querySelector(`.faq-block[data-entry="${entry}"]`);
        if (entry === this.state.entry) question.classList.toggle('open');
        if (entry !== this.state.entry) {
            if (openContainer !== null) openContainer.classList.remove('open');
            question.classList.add('open');
            this.setState({ entry: entry });
        }
    };

    render() {
        const { faqData } = this.state;
        const faqItems = faqData.map((obj, index) =>
            <FaqBlock
                answer={obj.answer}
                index={index}
                key={index}
                question={obj.question}
                updatePanel={this.updatePanel}
            />
        );
        return (
            <div id="faq" className="content-container faq">
                <h3 className="title">FAQ</h3>
                <hr className="gray-rule" />
                {faqItems}
            </div>
        );
    }
}