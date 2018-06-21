import React from 'react';
import PropTypes from 'prop-types';
import FaqBlock from './FaqBlock';

const FaqAction = require('@/actions/FaqAction.js');
const FaqStore = require('@/stores/FaqStore.js');

const propTypes = {
	openDialog: PropTypes.func.isRequired
};

class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faq: [] };
        this.updatePanel = this.updatePanel.bind(this);
    }

    componentWillMount() {
        const { openDialog } = this.props;
        const failure = () => {
            const opts = { message: 'There was an error getting the FAQ data.', title: 'D\'oh!' };
            openDialog(opts);
        };
        const changeHandler = () => {
            const { faq } = FaqStore;
            this.setState({ faq });
        };
        FaqStore.on('change', changeHandler);
        FaqAction.getFaq(failure);
    }

	// @TODO: REFACTOR...
    updatePanel(entry) {
        const openContainer = document.querySelector('.faq-block.open');
        const question = document.querySelector(`.faq-block[data-entry="${entry}"]`);
        if (entry === this.state.entry) question.classList.toggle('open');
        if (entry !== this.state.entry) {
            if (openContainer !== null) openContainer.classList.remove('open');
            question.classList.add('open');
            this.setState({ entry });
        }
    }

    render() {
        const { faq } = this.state;
        const faqItems = faq.map((obj, index) =>
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

Faq.propTypes = propTypes;

export default Faq;