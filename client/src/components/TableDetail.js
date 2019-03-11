
import React from "react";

const TableDetail = (props) => {
    return (
        <div className="table-detail">
            <li>Table number : {props.number}</li>
            <li>Capacity : {props.capacity}</li>
        <hr></hr>
        </div>
    )
}

export default TableDetail;
