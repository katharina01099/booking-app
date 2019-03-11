import React from "react";
import BookingList from "./BookingList";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <input className = "date-filter" type="date"></input>
                <BookingList 
                bookings = {props} 
                edit = {props.edit}
                delete = {props.delete}
                filteredBookings = {props.filteredBookings}
                isFiltered = {props.isFiltered}/>

            </div>
        )
}

export default BookingBox;