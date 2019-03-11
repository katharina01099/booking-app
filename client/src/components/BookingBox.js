import React from "react";
import BookingList from "./BookingList";
import DateFilter from "./DateFilter";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                Filter by date: <DateFilter handleDateFilter={props.handleDateFilter} />
                <BookingList 
                bookings = {props} 
                // edit = {props.edit}
                delete = {props.delete}/>

            </div>
        )
}

export default BookingBox;
