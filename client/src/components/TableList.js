import React from "react";
import TableDetail from "./TableDetail"

const TableList = (props) => {
    if (!props.tables) return null;
    const tables = props.tables.map(table => {
        return <TableDetail 
          key = {table.id}
          number = {table.tableNum}
          capacity = {table.tableCapacity}
          id = {table.id}/>
    })
    return (
        <div className="table-list">
            <h4>All Tables</h4>
            {tables}
        </div>
    )
}

export default TableList;
