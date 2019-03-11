
import React from "react";

const TableDetail = (props) => {

    function handleRadioSelect(event){
        console.log(event.target.value); 
    }

    return (
        <div className="table-detail">
            <li>Table number : {props.number}</li>
            <li>Capacity : {props.capacity}</li>
            <input type="radio" name="tableSelector" value={props.id} onChange={handleRadioSelect}/>
        <hr></hr>
        </div>
    )
}

export default TableDetail;