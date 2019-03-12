import React from "react";
import TableList from "./TableList";

const TableBox = (props) => {
        return (
            <div className="table-box">
                <TableList 
                tables = {props.tables}
                ValidateFormRef2 = {props.ValidateFormRef2}
                handleTableDynamic = {props.handleTableDynamic} 
                CurrentCovers = {props.CurrentCovers} />
            </div>
        )
}

export default TableBox;
