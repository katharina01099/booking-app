import React from "react";
import BookingDetail from "./BookingDetail"

const BookingList = (props) => {
    if (!props.bookings.bookings) return null;
    let bookings = null; 
    if (props.isFiltered){
    bookings = props.filteredBookings.map(booking => {
        return <BookingDetail 
        id = {booking.id}
        key = {booking.id}
        date={booking.date} 
        time={booking.time} 
        numPeople = {booking.numPeople} 
        // edit = {props.edit}
        delete = {props.delete}/>
    })

    } else {
    bookings = props.bookings.bookings.map(booking => {
        return <BookingDetail 
        id = {booking.id}
        key = {booking.id}
        date={booking.date} 
        time={booking.time} 
        numPeople = {booking.numPeople} 
        // edit = {props.edit}
        delete = {props.delete}/>
    })
    }


    return (
        <div className="booking-list">
            <h4>All Bookings</h4>
            {bookings}
        </div>
    )
}

export default BookingList;
