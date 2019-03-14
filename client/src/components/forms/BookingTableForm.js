import React, { Component } from 'react';
import "../../containers/PageContainer";
import "../../index.css";


class BookingTableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      numPeople: '',
      phoneNumber: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleNumOfPeopleChange = this.handleNumOfPeopleChange.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
    this.props.handleNameDynamic(e.target.value);
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
    this.props.handleDateDynamic(e.target.value);
  }

  handleTimeChange(e) {
    this.setState({ time: e.target.value });
    this.props.handleTimeDynamic(e.target.value);
  }

  handleNumOfPeopleChange(e) {
    let value = null;
    if (e.target.value > 20) {
      value = 20;
    }else {
      value = e.target.value;
    }
    this.setState({numPeople: value})
    this.props.handleCoversDynamic(value);
    }

  handlePhoneNumber(e){
    this.setState({phoneNumber: e.target.value});
    this.props.handlePhoneNumberDynamic(e.target.value);
  }

  render() {
    return (
      <form ref={this.props.ValidateFormRef1} className="booking-table-form">
        <h2>New Booking</h2>
        <table>
          <tbody> 
            <tr>
              <td>
                <label>Customer Name: </label>
              </td>
              <td>
              <input
                type="text"
                id = "name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleNameChange}
                required
              />
              </td>
            </tr>
            <tr>
              <td>
                <label>Date: </label>
              </td>
              <td>
              <input
                type="date"
                id="date"
                placeholder="Date of booking"
                value={this.state.date}
                onChange={this.handleDateChange}
                required
              />
              </td>
            </tr>
            <tr>
              <td>
                <label>Time: </label>
              </td>
              <td>
              <input
                type="time"
                id="time"
                placeholder="Time of booking"
                value={this.state.time}
                step="900"
                onChange={this.handleTimeChange}
                required
              />
              </td>
            </tr>
            <tr>
              <td>
                <label>Covers: </label>
              </td>
              <td>
              <input
                type="number"
                id="covers"
                placeholder="Number of people booking"
                value={this.state.numPeople}
                onChange={this.handleNumOfPeopleChange}
                min = '1'
                max = '20'
                required
              />
              </td>
            </tr>
            <tr>
              <td>
                <label>Tel: </label>
              </td>
              <td>
              <input
              type="text"
              id="tel"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={this.handlePhoneNumber}
              pattern="[0-9]{11}"
              title="Enter a 11 digit phone number"
              required
              />
              </td>
            </tr>
            <tr><button id = "clear-button" onClick = {() => this.setState({name: '',date: '',time: '',numPeople: '',phoneNumber: ''})}>Clear</button></tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default BookingTableForm;
