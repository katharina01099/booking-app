import React, {Component} from 'react';
import PageContainer from "../containers/PageContainer";
import "../index.css";

class BookingTableForm extends Component {


  constructor(props){
    super(props)
    this.state = {  
      date: '',
      time: '',
      numPeople: ''
    };

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleNumOfPeopleChange = this.handleNumOfPeopleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
    handleDateChange(e){
      this.setState({date: e.target.value})
    }

    handleTimeChange(e){
      this.setState({time: e.target.value})
    }

    handleNumOfPeopleChange(e){
      this.setState({numPeople: e.target.value})
    }

    handleSubmit(e){
    e.preventDefault();
    const newBookingTable = {date: this.state.date, time: this.state.time, numPeople: this.state.numPeople}
    this.props.onBookingTableSubmit(newBookingTable)
    this.setState({date: '', time: '', numPeople: ''})
  }





render(){
  return(

    <form
        className="booking-table-form"
        onSubmit={this.handleSubmit}
      >

    <input
    type="text"
    placeholder="Date"
    value={this.state.date}
    onChange={this.handleDateChange}
    />


    <input
    type="text"
    placeholder="Time"
    value={this.state.time}
    onChange={this.handleTimeChange}
/>

    <input
    type="text"
    placeholder="Number of people"
    value={this.state.numPeople}
    onChange={this.handleNumOfPeopleChange}

    />

    <input id="post-button"
          type="submit"
          value="Post"
        />
        </form>
  )
}
}


export default BookingTableForm;
