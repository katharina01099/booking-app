import React, { useState } from 'react';
import CustomerDetail from './CustomerDetail';

function CustomerList(props) {
    if (!props.customers) return null;
    let customers = null;

    customers = props.customers.map(customer => {
        return <CustomerDetail customerInfo = {customer}/>
    })
    
    return (
        <div className = "customer-list">
            <h2>All Customers</h2>
            {customers}
        </div>
    )
}

export default CustomerList;