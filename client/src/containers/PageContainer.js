import React from 'react';
import BookingBox from '../components/bookings/BookingBox';
import BookingTableForm from '../components/forms/BookingTableForm';
import CustomerList from '../components/customers/CustomerList';
import TableBox from '../components/tables/TableBox';
import EditForm from '../components/forms/EditForm';


class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.formCol1 = React.createRef();
        this.formCol2 = React.createRef();
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
        this.validate = this.validate.bind(this);
        this.getExistingCustomer = this.getExistingCustomer.bind(this);
        this.updateDbToState = this.updateDbToState.bind(this);
    }

    componentDidMount() {
        this.updateDbToState();

        // //Get all bookings from database on load

        // const url_bookings = 'http://localhost:8080/bookings?sort=date,desc';
        // fetch(url_bookings)
        // .then(res => res.json())
        // .then(data => this.setState({ bookings: data._embedded.bookings }))
        // .catch(err => console.error(err));

        // //Get all tables from database on load

        // const url_tables = 'http://localhost:8080/diningTables';
        // fetch(url_tables)
        // .then(res => res.json())
        // .then(data => this.setState({ tables: data._embedded.diningTables }))
        // .catch(err => console.error(err));

        // //Get all customers from db on load

        // const url_customers = 'http://localhost:8080/customers?sort=numVisit,desc';
        // fetch(url_customers)
        // .then(res => res.json())
        // .then(data => this.setState({ customers: data._embedded.customers }))
        // .catch(err => console.error(err));
    }

    updateDbToState() {
        const url_bookings = 'http://localhost:8080/bookings?sort=date,asc';
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

        const url_customers = 'http://localhost:8080/customers?sort=numVisit,desc';
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
        const url = 'http://localhost:8080/bookings/' + this.state.selectedId;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({numPeople: booking.covers, date: booking.date, time: booking.time}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => this.updateDbToState())

        this.setState({editable: false, selectedId: null});
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
        if (!this.validate()) {return}
        let customer = this.getExistingCustomer();
        let setMethod = null;
        let setUrl = null;

        if(customer){
            console.log("This customer already exists! They have visited " + customer.numVisit + " times before")
            //TODO Call an update method here that increments the visit counter and then makes the booking as before
            customer.numVisit += 1;
            console.log(customer.numVisit)
            setMethod = "PUT";
            console.log(setMethod);
            setUrl = "http://localhost:8080/customers/" + customer.id;
        } else {
            setMethod = "POST";
            customer = {name:this.state.newName, phoneNumber: this.state.newPhoneNumber, numVisit: 1};
            setUrl = "http://localhost:8080/customers/";
        }

    
        fetch(setUrl, {
            method: setMethod,
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => 
            fetch("http://localhost:8080/bookings", {
                method: "POST",
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
            .then(res => res.json())
            .then(data => console.log(data))
            .then(() => this.updateDbToState())
            .catch(err => console.error(err))
        ) 
        .catch(err => console.error(err))
    }
    
    //Existing Customer Checking

    getExistingCustomer(){
        if(this.state.customers){
            const filteredCustomers = this.state.customers.filter(customer => {
                return (customer.phoneNumber === this.state.newPhoneNumber)
            }) 
            return filteredCustomers[0]
        }
    }

    //Input Validation Functions
    validate() {
        return (this.formCol1.current.reportValidity() && this.formCol2.current.reportValidity());
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
                ValidateFormRef1 = {this.formCol1}
                />
                <button onClick = {this.submitForm}>Submit booking</button>
            <CustomerList customers = {this.state.customers}/>
        </div>
            <TableBox 
                tables={this.state.tables} 
                handleTableDynamic = {this.handleTableDynamic}
                ValidateFormRef2 = {this.formCol2}
                CurrentCovers = {this.state.newCovers}
            />
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
