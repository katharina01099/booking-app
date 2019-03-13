import React from "react";
import BookingDetail from "./BookingDetail";
import EditForm from "../forms/EditForm";
import "../../index.css";


const BookingList = (props) => {
    if (!props.bookings.bookings) return null;
    let bookings = null;
    let header = <h2> All Bookings </h2>

    if (props.isFiltered){
    header = <h4> Selected Date's Bookings </h4>
    bookings = props.filteredBookings.map(booking => {
        if (props.selectedId === booking.id) {
            return <EditForm edit = {booking} handleEdit = {props.handleEdit}/>
        } else {
            return <BookingDetail
            id = {booking.id}
            key = {booking.id}
            date={booking.date}
            time={booking.time}
            tableNumber={booking.diningTable.tableNum}
            numPeople = {booking.numPeople}
            name={booking.customer.name}
            phoneNumber={booking.customer.phoneNumber}
            edit = {props.edit}
            delete = {props.delete}
            editable = {props.editable}/>
        }
    })

    } else {
    bookings = props.bookings.bookings.map(booking => {
        if (props.selectedId === booking.id) {
            return <EditForm edit = {booking} handleEdit = {props.handleEdit}/>
        } else {
            return <BookingDetail
            id = {booking.id}
            key = {booking.id}
            date={booking.date}
            time={booking.time}
            tableNumber={booking.diningTable.tableNum}
            numPeople = {booking.numPeople}
            name={booking.customer.name}
            phoneNumber={booking.customer.phoneNumber}
            edit = {props.edit}
            delete = {props.delete}
            editable = {props.editable}/>
        }
    })
    }


    return (
        <div className="booking-list">
            {header}
            {bookings}
        </div>
    )
}

export default BookingList;
