import React from "react";
import BookingBox from "../components/BookingBox";
import BookingTableForm from "../components/BookingTableForm"

import TableBox from "../components/TableBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state={
            bookings: null
        }
        
        this.updateBookingsList = this.updateBookingsList.bind(this);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    componentDidMount() {
        const url_bookings = "http://localhost:8080/bookings";
        fetch(url_bookings)
            .then(res => res.json())
            .then(data => this.setState({bookings: data._embedded.bookings}))
            .catch(err => console.error(err))


        const url_tables = "http://localhost:8080/diningTables";
        fetch(url_tables)
            .then(res => res.json())
            .then(data => this.setState({tables: data._embedded.diningTables}))
            .catch(err => console.error(err))

    }

    // handleEdit(id) {
    //     console.log(id)
    // }

    deleteBooking(id) {
        const url = "http://localhost:8080/bookings/" + id
        fetch(url, {
            method: 'DELETE',
        })
            .then(this.updateBookingsList(id))
            .catch(err => console.error(err))
    }

    updateBookingsList(id) {
        const bookingList = this.state.bookings;
        let index = null;
        console.log(bookingList)
        for (let i=0; i<bookingList.length; i++) {
            let booking = bookingList[i];
            if (booking.id === id){
                index = i;
            }
        }

        bookingList.splice(index, 1);
        this.setState({bookings: bookingList})
    }

    render(){
        return (
            <div className="page-container">
              <BookingTableForm/>
              <TableBox tables = {this.state.tables}/>
                <BookingBox
                bookings = {this.state.bookings}
                // edit = {this.handleEdit}
                delete = {this.deleteBooking}/>
            </div>

        )
    }
}


export default PageContainer;
