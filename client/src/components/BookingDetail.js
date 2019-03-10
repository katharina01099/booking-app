import React from "react";

const BookingDetail = (props) => {
    return (
        <div className="booking-detail">
            <li>{props.date}</li>
            <li>{props.time}</li>
            <li>{props.numPeople}</li>
            <hr></hr>
        </div>
    )
}

export default BookingDetail;