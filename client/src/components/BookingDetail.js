import React from "react";

const BookingDetail = (props) => {
    return (
        <div className="booking-detail" onClick = {props.edit}>
            <li>id: {props.id}</li>
            <li>Date: {props.date}</li>
            <li>Time: {props.time}</li>
            <li>Covers: {props.numPeople}</li>
            <button onClick={props.delete}>Cancel Booking</button>
            <hr></hr>
        </div>
    )
}

export default BookingDetail;