import React from "react";
import TableList from "./TableList";

const TableBox = (props) => {
        return (
            <div className="table-box">
                <TableList 
                tables = {props.tables}
                handleTableDynamic = {props.handleTableDynamic} />
            </div>
        )
}

export default TableBox;
