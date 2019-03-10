import React from "react";

const BookingDetail = (props) => {
    return (
        <div className="booking-detail" onClick = {props.edit}>
            <li>Date: {props.date}</li>
            <li>Time: {props.time}</li>
            <li>Covers: {props.numPeople}</li>
            <hr></hr>
        </div>
    )
}

export default BookingDetail;