import React from "react";
import BookingList from "./BookingList";

const BookingBox = (props) => {
        return (
            <div className="booking-box">
                <h3>Layer 3</h3>
                <BookingList/>
            </div>
        )
}

export default BookingBox;