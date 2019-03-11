import React from "react";
import BookingDetail from "./BookingDetail"
import BookingTableForm from "../forms/BookingTableForm";

const BookingList = (props) => {
    if (!props.bookings.bookings) return null;
    let bookings = null; 
    if (props.isFiltered){
    bookings = props.filteredBookings.map(booking => {
        if (props.selectedId === booking.id) {
            return <BookingTableForm/>
        } else {
            return <BookingDetail 
            id = {booking.id}
            key = {booking.id}
            date={booking.date} 
            time={booking.time} 
            numPeople = {booking.numPeople} 
            edit = {props.edit}
            delete = {props.delete}
            editable = {props.editable}/>
        }
    })

    } else {
    bookings = props.bookings.bookings.map(booking => {
        if (props.selectedId === booking.id) {
            return <BookingTableForm/>
        } else {
            return <BookingDetail 
            id = {booking.id}
            key = {booking.id}
            date={booking.date} 
            time={booking.time} 
            numPeople = {booking.numPeople} 
            edit = {props.edit}
            delete = {props.delete}
            editable = {props.editable}/>
        }
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
