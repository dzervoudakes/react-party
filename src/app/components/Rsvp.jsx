import React from 'react';

const RsvpAction = require('../actions/RsvpAction.js');
const RsvpStore = require('../stores/RsvpStore.js');

export class Rsvp extends React.Component {
    constructor() {
        super();
        this.state = { attendees: [], firstNameInvalid: false, lastNameInvalid: false };
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount() {
        const { openDialog } = this.props;
        const failure = () => {
            const opts = { message: 'There was an error getting the current attendees.', title: 'Oh no!' };
            openDialog(opts);
        };
        const changeHandler = () => {
            const { attendees } = RsvpStore;
            this.setState({ attendees: attendees });
        };
        RsvpStore.on('change-get', changeHandler);
        RsvpAction.getRsvp(failure);
    }

    submitForm(e) {
        e.preventDefault();
        const { openDialog } = this.props;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        if (firstName.length > 0 && lastName.length > 0) {
            const { attendees } = this.state;
            const newAttendee = {
                firstName: firstName,
                lastName: lastName
            };
            attendees.push(newAttendee);
            const data = { attendees: attendees };
            const failure = () => {
                const opts = { message: 'There was a problem submitting the form.', title: ':sadface:' };
                openDialog(opts);
            };
            const changeHandler = () => {
                document.getElementById('firstName').value = '';
                document.getElementById('lastName').value = '';
                this.setState({ attendees: attendees, firstNameInvalid: false, lastNameInvalid: false });
                const opts = { message: 'Congratulations, your RSVP was successful. See you at the party!', title: 'Awww yeah!' };
                openDialog(opts);
            };
            RsvpStore.on('change-post', changeHandler);
            RsvpAction.postRsvp(data, failure);
        } else {
            this.setState({
                firstNameInvalid: firstName.length === 0 ? true : false,
                lastNameInvalid: lastName.length === 0 ? true : false
            });
        }
    }
    
    render() {
        const { attendees, firstNameInvalid, lastNameInvalid } = this.state;
        const length = attendees.length;
        const listItems = attendees.map((obj, index) =>
            <li key={`rsvp-${index}`}>{obj.firstName} {obj.lastName}</li>
        );
        return (
            <div id="rsvp" className="content-container rsvp">
                <h3 className="title">RSVP</h3>
                <hr className="gray-rule" />
                <p>Because you know you want to come to the party, and the courteous thing to do would be to let the organizer know your intentions.</p>       
                <form className="rsvp-form">
                    <div className="form-input-container left">
                        <label htmlFor="firstName">First Name:</label>
                        <input id="firstName" className={firstNameInvalid ? 'invalid' : ''} name="firstName" type="text" />
                    </div>
                    <div className="form-input-container right">
                        <label htmlFor="lastName">Last Name:</label>
                        <input id="lastName" className={lastNameInvalid ? 'invalid' : ''} name="lastName" type="text" />
                    </div>
                    <input className="submit-button" type="submit" onClick={this.submitForm} value="Reserve My Spot" />
                </form>
                <p>{length} {length === 0 || length > 1 ? 'people have' : 'person has'} RSVP'd:</p>
                <hr className="gray-rule" />
                <ul className="rsvp-list">{listItems}</ul>
            </div>
        );
    }
}