import React from "react";
import BookingList from "./BookingList";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <BookingList 
                bookings = {props} 
                edit = {props.edit}
                delete = {props.delete}/>
            </div>
        )
}

export default BookingBox;