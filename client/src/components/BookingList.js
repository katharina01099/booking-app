import React from "react";
import BookingDetail from "./BookingDetail"

const BookingList = (props) => {
    if (!props.bookings.bookings) return null;
    const bookings = props.bookings.bookings.map(booking => {
        return <BookingDetail date={booking.date} time={booking.time} numPeople = {booking.numPeople}/>
    })
    return (
        <div className="booking-list">
            <h4>All Bookings</h4>
            {bookings}
        </div>
    )
}

export default BookingList;