import React from "react";

const BookingDetail = (props) => {
    return (
        <div className="booking-detail">
            <li>id: {props.id}</li>
            <li>Date: {props.date}</li>
            <li>Time: {props.time}</li>
            <li>Covers: {props.numPeople}</li>
            <button onClick={() => {props.delete(props.id)}}>Cancel Booking</button>
            <hr></hr>
        </div>
    )
}

export default BookingDetail;