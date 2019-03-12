import React from 'react';
import BookingBox from '../components/bookings/BookingBox';
import BookingTableForm from '../components/forms/BookingTableForm';
import CustomerList from '../components/customers/CustomerList';
import TableBox from '../components/tables/TableBox';
import EditForm from '../components/forms/EditForm';


class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        //State for Initial Database Pulls

        bookings: null,
        tables: null,
        customers: null,

        //State for Date Filtering

        isFiltered: false,
        filterDate: null,
        filteredBookings: null,

        //State for Editing

        editable: false,
        selectedId: null,
        
        //State for posting new booking

        newName: null,
        newPhoneNumber: null,
        newDate: null,
        newTime: null,
        newCovers: null,
    
        // State for table id for new booking

        newTableNumber: null
    };

        //Bindings go here

        this.onEdit = this.onEdit.bind(this);
        this.updateBookingsList = this.updateBookingsList.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
        this.handleDateFilter = this.handleDateFilter.bind(this);
        this.handleEdit = this.handleEdit.bind(this);    
        this.resetFilter = this.resetFilter.bind(this);
        this.handleBookingTableSubmit = this.handleBookingTableSubmit.bind(this);
        this.handleNameDynamic = this.handleNameDynamic.bind(this);
        this.handleDateDynamic = this.handleDateDynamic.bind(this);
        this.handleTimeDynamic = this.handleTimeDynamic.bind(this);
        this.handleCoversDynamic = this.handleCoversDynamic.bind(this);
        this.handlePhoneNumberDynamic = this.handlePhoneNumberDynamic.bind(this);
        this.handleTableDynamic = this.handleTableDynamic.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

  componentDidMount() {

    //Get all bookings from database on load

    const url_bookings = 'http://localhost:8080/bookings';
    fetch(url_bookings)
      .then(res => res.json())
      .then(data => this.setState({ bookings: data._embedded.bookings }))
      .catch(err => console.error(err));

    //Get all tables from database on load

    const url_tables = 'http://localhost:8080/diningTables';
    fetch(url_tables)
      .then(res => res.json())
      .then(data => this.setState({ tables: data._embedded.diningTables }))
      .catch(err => console.error(err));

    //Get all customers from db on load

    const url_customers = 'http://localhost:8080/customers';
    fetch(url_customers)
      .then(res => res.json())
      .then(data => this.setState({ customers: data._embedded.customers }))
      .catch(err => console.error(err));
    }

    // handle all booking edit functionality
    onEdit(id) {
        this.setState({ editable: true, selectedId: id });
    }

    handleEdit(booking){
        this.setState({editable: false, selectedId: null});
        console.log(booking)

    }

    deleteBooking(id) {
        const url = 'http://localhost:8080/bookings/' + id;
        fetch(url, {
        method: 'DELETE'
        })
        .then(this.updateBookingsList(id))
        .then(this.setState({ state: this.state }))
        .catch(err => console.error(err));
    }

    updateBookingsList(id) {
        const bookingList = this.state.bookings;
        //Ensure that bookings are redrawn if modified while filtered.
        if (this.state.isFiltered) {
        this.handleDateFilter(this.state.dateString);
        }
        let index = null;

        for (let i = 0; i < bookingList.length; i++) {
            let booking = bookingList[i];
            if (booking.id === id) {
                index = i;
            }
        }

        bookingList.splice(index, 1);
        this.setState({ bookings: bookingList });
    }

  handleDateFilter(dateString) {
    const url_filtered =
      'http://localhost:8080/bookings/' + dateString + '/date';
    fetch(url_filtered)
      .then(res => res.json())
      .then(data => this.setState({ filteredBookings: data, isFiltered: true }))
      .catch(err => console.error(err));
  }

  resetFilter(){
      this.setState({isFiltered: false})
  }

  handleBookingTableSubmit(submittedBookingTable) {
    submittedBookingTable.id = Date.now()
    const updatedBookingTable = [...this.state.bookings, submittedBookingTable]
    this.setState({ bookings: updatedBookingTable })
  }

  handleNameDynamic(name) {
    console.log(name);
    this.setState({newName: name});
  }

  handleDateDynamic(date){
    this.setState({newDate: date});
  }

  handleTimeDynamic(time){
    this.setState({newTime: time});
  }

  handlePhoneNumberDynamic(number){
    this.setState({newPhoneNumber: number});
  }
  handleCoversDynamic(covers){
    this.setState({newCovers: covers});
  }

  handleTableDynamic(tablenumber){
    this.setState({newTableNumber: tablenumber});
  }
  

  submitForm(){
      const newCustomer = {name:this.state.newName, phoneNumber: this.state.newPhoneNumber}
      const url = "http://localhost:8080/customers/";
  
      fetch(url, {
          method: "post",
          body: JSON.stringify(newCustomer),
          headers: {
            "Content-Type": "application/json"
          }
      })
      .then(res => res.json())
      .then(data => 
        fetch("http://localhost:8080/bookings", {
            method: "post",
            body: JSON.stringify({
                time: this.state.newTime, 
                date:  this.state.newDate, 
                numPeople:  this.state.newCovers, 
                customer: data._links.customer.href, 
                diningTable: "http://localhost:8080/diningTables/" + this.state.newTableNumber}),
            headers: {
                "Content-Type": "application/json"
            }   
        })
        .catch(err => console.error(err))
        )

      .catch(err => console.error(err));








    //   const newBooking = {name: this.state.newName,
    //     date: this.state.newDate,
    //     time: this.state.newTime,
    //     phoneNumber: this.state.newPhoneNumber,
    //     numPeople: this.state.newCovers,
    //     table: "http://localhost:8080/diningTables/" + this.state.newTableNumber}
    //   const url = "http://localhost:8080/bookings"
    //   fetch(url, {
    //       method: 'POST',
    //       body: JSON.stringify(newBooking)
    //   })
    //   .catch(err => console.error(err))
    }
  

  render() {
    return (
      <div className="page-container">
      <div className="columnwrapper">
        <BookingTableForm
            handleBookingTableSubmit={this.handleBookingTableSubmit}
            handleNameDynamic = {this.handleNameDynamic}
            handleDateDynamic = {this.handleDateDynamic}
            handleTimeDynamic = {this.handleTimeDynamic}
            handlePhoneNumberDynamic = {this.handlePhoneNumberDynamic}
            handleCoversDynamic = {this.handleCoversDynamic}
            />
            <button onClick = {this.submitForm}>Submit booking</button>
        <CustomerList customers = {this.state.customers}/>
      </div>
        <TableBox 
        tables={this.state.tables} 
        handleTableDynamic = {this.handleTableDynamic}/>
        <BookingBox
          bookings={this.state.bookings}
          filteredBookings={this.state.filteredBookings}
          isFiltered={this.state.isFiltered}
          edit={this.onEdit}
          delete={this.deleteBooking}
          handleDateFilter={this.handleDateFilter}
          editable = {this.state.editable}
          selectedId = {this.state.selectedId}
          handleEdit = {this.handleEdit}
          resetFilter = {this.resetFilter}
        />
      </div>
    );
  }
}

export default PageContainer;
