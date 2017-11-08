import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const axios = require('axios');
const path = require('./common/path.js')['path']();

// @TODO: APPROPRIATE ERROR HANDLING FOR THE DIALOG

export class Rsvp extends React.Component {
    constructor() {
        super();
        this.state = { attendees: [], dialogOpen: false, firstNameInvalid: false, lastNameInvalid: false };
        this.getAttendees = this.getAttendees.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    getAttendees() {
        return axios.get(`${path}data/rsvp.json`);
    }

    postAttendees(data) {
        return axios.post(`${path}data/post.php`, data);
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false });
    }

    componentWillMount() {
        const handleError = () => {
            this.setState({ dialogOpen: true });
        };
        return this.getAttendees().then(resp => this.setState({ attendees: resp.data })).catch(err => handleError());
    }

    submitForm() {
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
            this.postAttendees(data).then(resp => {
                console.log(resp);
                document.getElementById('firstName').value = '';
                document.getElementById('lastName').value = '';
                this.setState({ attendees: attendees, firstNameInvalid: false, lastNameInvalid: false });
            }).catch(err => {
                console.log(err)
            });
        } else {
            this.setState({
                firstNameInvalid: firstName.length === 0 ? true : false,
                lastNameInvalid: lastName.length === 0 ? true : false
            });
        }
        
    }
    
    render() {
        const { attendees, firstNameInvalid, lastNameInvalid } = this.state;
        const listItems = attendees.map((obj, index) =>
            <li key={`rsvp-${index}`}>{obj.firstName} {obj.lastName}</li>
        );

        const actions = [
            <FlatButton label="Close" onClick={this.handleDialogClose} primary={true} />
        ];

        return (
            <div id="rsvp" className={'content-container rsvp' + (this.props.active ? '' : ' hidden')}>
                <h3>RSVP</h3>
                <hr className="gray-rule" />
                <p>Because you know you want to come to the party, and the courteous thing to do would be to let the organizer know your intentions.</p>       
                <form className="rsvp-form">
                    <div className="form-input-container left">
                        <label for="firstName">First Name:</label>
                        <input id="firstName" className={firstNameInvalid ? 'invalid' : ''} name="firstName" type="text" />
                    </div>
                    <div className="form-input-container right">
                        <label for="lastName">Last Name:</label>
                        <input id="lastName" className={lastNameInvalid ? 'invalid' : ''} name="lastName" type="text" />
                    </div>
                    <input className="submit-button" type="submit" onClick={(e) => { e.preventDefault(); this.submitForm(); }} value="Reserve My Spot" />
                </form>
                <p>{attendees.length} people have RSVP'd:</p>
                <hr className="gray-rule" />
                <ul className="rsvp-list">{listItems}</ul>
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