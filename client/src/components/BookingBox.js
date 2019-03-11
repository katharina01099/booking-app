import React from "react";
import BookingList from "./BookingList";
import DateFilter from "./DateFilter";
import "../index.css";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                Filter by date: <DateFilter handleDateFilter={props.handleDateFilter} />
                <BookingList 
                bookings = {props} 
                edit = {props.edit}
                delete = {props.delete}
                filteredBookings = {props.filteredBookings}
                isFiltered = {props.isFiltered}
                editable = {props.editable}
                selectedId = {props.selectedId}/>
            </div>
        )
}

export default BookingBox;
