import React from "react";
import TableDetail from "./TableDetail"
import "./TableList.css"

const TableList = (props) => {
    if (!props.tables) return null;
    let tableHeader = <h2>Available Tables</h2>
    let didFilter = false;
    const tables = props.tables.map(table => {
        if (props.CurrentCovers > table.tableCapacity){ 
            didFilter = true;     
            return null
        } 
        return <TableDetail 
          key = {table.id}
          number = {table.tableNum}
          capacity = {table.tableCapacity}
          id = {table.id}
          handleTableDynamic = {props.handleTableDynamic}/>
    })

    if (didFilter){
        tableHeader = <h4> Tables with a capacity of at least {props.CurrentCovers} </h4>
    }
    return (
        <div className="table-list">
        <form ref={props.ValidateFormRef2}>
            {tableHeader}
            {tables}
            <input required type="radio" name="tableSelector" id="hiddenOption"/>
        </form>
        </div>
    )
}

export default TableList;
