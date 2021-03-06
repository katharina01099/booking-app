import React from "react";
import "../../index.css";

const BookingDetail = (props) => {
    return (
        <div className="booking-detail">
            <li>Name: {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Time: {props.time}</li>
            <li>Covers: {props.numPeople}</li>
            <li>Table: {props.tableNumber}</li>
            <li>Phone Number: {props.phoneNumber}</li>
            <button onClick={() => {props.delete(props.id)}}>Cancel Booking</button>
            <button onClick={() => {props.edit(props.id)}}>Edit Booking</button>
            <hr></hr>
        </div>
    )
}

export default BookingDetail;
