import React from 'react';
import { FaqBlock } from './modules/FaqBlock.jsx';

const axios = require('axios');
const handleError = require('../common/error.js');

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faqData: [] };
    }

    getFaq() {
        return axios.get('/data/faq.json');
    }

    componentWillMount() {
        const { setErrorView } = this.props;
        return this.getFaq().then(resp => this.setState({ faqData: resp.data.questions })).catch(err => {
            setErrorView('FAQ');
            handleError(this);
        });
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
            <FaqBlock
                answer={obj.answer}
                index={index}
                key={index}
                question={obj.question}
                updatePanel={updatePanel}
            />
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