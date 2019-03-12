import React from 'react';

const CustomerDetail = (props) => {
    return(
        <div className = "customer-detail">
            <li>Name: {props.customerInfo.name}</li>
            <li>Tel: {props.customerInfo.phoneNumber}</li>
            <li>Previous visits: {props.customerInfo.numVisit}</li>
            <hr/>
        </div>
    )
}
export default CustomerDetail;