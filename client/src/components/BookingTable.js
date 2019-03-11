import React, { Component } from "react";

class BookingTable extends Component {
    render() {
        return (
            <div className="bookingTable">
                <h4>{this.props.children}</h4>
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default BookingTable;