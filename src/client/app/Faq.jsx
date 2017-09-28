import React from 'react';

const axios = require('axios');
const path = require('./common/path.js')['path']();

export class Faq extends React.Component {
    constructor() {
        super();
        this.state = { entry: 0, faqData: {} }
        this.getFaq = this.getFaq.bind(this);
    }

    getFaq() {
        let infoData;
        axios
            .get(`${path}data/faq.json`)
            .then(resp => {
                faqData = resp.data;
                this.setState({ faqData: faqData });
            })
            .catch(err => {
                // @TODO: let's put some err handlin' here, ya? => material-ui dialog ;)
            });
    }

    componentWillMount() {
        this.faqData();
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
        
        // @TODO: GENERATE THIS LIST DYNAMICALLY
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
                    <p className="question" onClick={() => { updatePanel(6); }}>What are you preparing?</p>
                    <p className="answer">Smoked ribs and weengs.</p>
                </div>
                <div className="faq-block" data-entry="7">
                    <p className="question" onClick={() => { updatePanel(7); }}>I heard that ribs take a long time to smoke. Can I show up earlier to hang out and help while you spend 7 hours prepping and smoking the ribs?</p>
                    <p className="answer">You are more than welcome to come hangout while I am smoking the ribs.</p>
                </div>
                <div className="faq-block" data-entry="8">
                    <p className="question" onClick={() => { updatePanel(8); }}>What time will you start smoking the ribs?</p>
                    <p className="answer">I'll be throwing the ribs on the smoker at noon.</p>
                </div>
                <div className="faq-block" data-entry="9">
                    <p className="question" onClick={() => { updatePanel(9); }}>What happens if I come over at noon to hang out and I get hungry before the ribs are done?</p>
                    <p className="answer">Appetizer burgers will happen at 2pm.</p>
                </div>
                <div className="faq-block" data-entry="10">
                    <p className="question" onClick={() => { updatePanel(10); }}>Wow. It sounds like you have it all planned out. Sure is nice of you to pay for all of that food. Will you pay for the PPV too?</p>
                    <p className="answer">Sure.</p>
                </div>
                <div className="faq-block" data-entry="11">
                    <p className="question" onClick={() => { updatePanel(11); }}>Can I chip in at all for the PPV?</p>
                    <p className="answer">Sure.</p>
                </div>
                <div className="faq-block" data-entry="12">
                    <p className="question" onClick={() => { updatePanel(12); }}>Can I write you a check?</p>
                    <p className="answer">No. It is 2017. Idiot.</p>
                </div>
                <div className="faq-block" data-entry="13">
                    <p className="question" onClick={() => { updatePanel(13); }}>How would you like me to give you a donation?</p>
                    <p className="answer">I dont care. Cash or Venmo. (@tynick)</p>
                </div>
                <div className="faq-block" data-entry="14">
                    <p className="question" onClick={() => { updatePanel(14); }}>Do I need to give you any money?</p>
                    <p className="answer">No.</p>
                </div>
                <div className="faq-block" data-entry="15">
                    <p className="question" onClick={() => { updatePanel(15); }}>Can I bring anything in terms of food/drink?</p>
                    <p className="answer">Tequila.</p>
                </div>
                <div className="faq-block" data-entry="16">
                    <p className="question" onClick={() => { updatePanel(16); }}>Is there anything else?</p>
                    <p className="answer">Chips, soda or anything that isnt meat. I'll take care of the meat.</p>
                </div>
                <div className="faq-block" data-entry="17">
                    <p className="question" onClick={() => { updatePanel(17); }}>Can I bring dessert?</p>
                    <p className="answer">No. Janice is bringing dessert.</p>
                </div>
                <div className="faq-block" data-entry="18">
                    <p className="question" onClick={() => { updatePanel(18); }}>Do you have any beer?</p>
                    <p className="answer">I have a case of Coors Light and some craft beer that people have left at past parties.</p>
                </div>
                <div className="faq-block" data-entry="19">
                    <p className="question" onClick={() => { updatePanel(19); }}>Can I drink those?</p>
                    <p className="answer">I don't care.</p>
                </div>
                <div className="faq-block" data-entry="20">
                    <p className="question" onClick={() => { updatePanel(20); }}>I plan to get super drunk. Can I stay at your place?</p>
                    <p className="answer">Yes, please do. We should have plenty of room for sleeping.</p>
                </div>
                <div className="faq-block" data-entry="21">
                    <p className="question" onClick={() => { updatePanel(21); }}>Can I chat with people at the party about things I may have seen or done earlier in the week??</p>
                    <p className="answer">Not if they involve the sun or glasses that you use to look at the sun.</p>
                </div>
                <div className="faq-block" data-entry="22">
                    <p className="question" onClick={() => { updatePanel(22); }}>Will there be any other activities?</p>
                    <p className="answer">We have ping pong, loud rap music and booze.</p>
                </div>
                <div className="faq-block" data-entry="23">
                    <p className="question" onClick={() => { updatePanel(23); }}>You play ping pong?</p>
                    <p className="answer">Yes. I am probably better than you.</p>
                </div>
                <div className="faq-block" data-entry="24">
                    <p className="question" onClick={() => { updatePanel(24); }}>Can I bring my girlfriend or boyfriend?</p>
                    <p className="answer">As long as he or she isn't a horrible person, sure. The more the merrier.</p>
                </div>
                <div className="faq-block" data-entry="25">
                    <p className="question" onClick={() => { updatePanel(25); }}>Can I bring my dog?</p>
                    <p className="answer">I dont care.</p>
                </div>
            </div>
        );
    }
}