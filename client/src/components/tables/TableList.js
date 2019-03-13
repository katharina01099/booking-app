import React from "react";
import TableDetail from "./TableDetail"

const TableList = (props) => {
    if (!props.tables) return null;
    let tableHeader = <h4>All Tables</h4>
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
<<<<<<< HEAD
            <h2>All Tables</h2>
=======
            {tableHeader}
>>>>>>> dev
            {tables}
        </form>
        </div>
    )
}

export default TableList;
