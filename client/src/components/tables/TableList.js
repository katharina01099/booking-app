import React from "react";
import TableDetail from "./TableDetail"

const TableList = (props) => {
    if (!props.tables) return null;
    const tables = props.tables.map(table => {
        return <TableDetail 
          key = {table.id}
          number = {table.tableNum}
          capacity = {table.tableCapacity}
          id = {table.id}
          handleTableDynamic = {props.handleTableDynamic}/>
    })
    return (
        <div className="table-list">
        <form>
            <h4>All Tables</h4>
            {tables}
        </form>
        </div>
    )
}

export default TableList;
