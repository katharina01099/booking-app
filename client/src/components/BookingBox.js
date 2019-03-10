import React from "react";
import BookingList from "./BookingList";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <BookingList bookings = {props}/>
            </div>
        )
}

export default BookingBox;