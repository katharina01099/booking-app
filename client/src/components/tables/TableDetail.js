
import React from "react";

const TableDetail = (props) => {

    function handleRadioSelect(event){
        props.handleTableDynamic(event.target.value); 
    }

    return (
        <div className="table-detail">
            <li>Table number : {props.number}</li>
            <li>Capacity : {props.capacity}</li>
            <input required type="radio" name="tableSelector" value={props.id} onChange={handleRadioSelect}/>
        <hr></hr>
        </div>
    )
}

export default TableDetail;
