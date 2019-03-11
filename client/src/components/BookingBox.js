import React from "react";
import BookingList from "./BookingList";
import "../App.css";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <input className = "date-filter" type="date"></input>
                <BookingList 
                bookings = {props} 
                // edit = {props.edit}
                delete = {props.delete}/>

            </div>
        )
}

export default BookingBox;