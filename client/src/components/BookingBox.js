import React from "react";
import BookingList from "./BookingList";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <BookingList bookings = {props} edit = {props.edit}/>
            </div>
        )
}

export default BookingBox;