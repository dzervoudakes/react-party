import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const axios = require('axios');
const handleError = require('./common/error.js');
const path = require('./common/path.js')['path']();

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faqData: [], dialogOpen: false };
        this.getFaq = this.getFaq.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
    }

    getFaq() {
        return axios.get(`${path}data/faq.json`);
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    componentWillMount() {
        return this.getFaq().then(resp => this.setState({ faqData: resp.data.questions })).catch(err => handleError(this));
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
                <p className="question" onClick={() => updatePanel(index)}>{obj.question}</p>
                <p className="answer" dangerouslySetInnerHTML={{ __html: obj.answer }} />
            </div>
        );

        const actions = [
            <FlatButton label="Close" onClick={this.handleDialogClose} primary={true} />
        ];

        return (
            <div id="faq" className={'content-container faq' + (this.props.active ? '' : ' hidden')}>
                <h3>FAQ</h3>
                <hr className="gray-rule" />
                {faqItems}
                <Dialog
                    actions={actions}
                    onRequestClose={this.handleDialogClose}
                    open={this.state.dialogOpen}
                    title={this.props.dialogText}
                />
            </div>
        );
    }
}