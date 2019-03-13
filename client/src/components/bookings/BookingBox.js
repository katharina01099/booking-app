import React from "react";
import BookingList from "./BookingList";
import DateFilter from "./DateFilter";
import "../../index.css";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
            <h2>All Bookings</h2>
                Filter by date: <DateFilter resetFilter={props.resetFilter}handleDateFilter={props.handleDateFilter} />
                <BookingList 
                bookings = {props} 
                edit = {props.edit}
                delete = {props.delete}
                filteredBookings = {props.filteredBookings}
                isFiltered = {props.isFiltered}
                editable = {props.editable}
                selectedId = {props.selectedId}
                handleEdit = {props.handleEdit}
                />
            </div>
        )
}

export default BookingBox;
