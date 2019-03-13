import React, {useState} from 'react';

const EditForm = (props) => {
    const [booking, setBooking] = useState({
        name: props.edit.customer.name,
        date: props.edit.date, 
        time: props.edit.time,
        phoneNumber: props.edit.customer.phoneNumber,
        covers: props.edit.numPeople ,
        table: props.edit.diningTable.id,
        customerId: props.edit.customer.id
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setBooking({...booking, [id]: value})
    }

    return (
        <form className = "edit-form" onSubmit = {(e) => {e.preventDefault(); props.handleEdit(booking)}}>
            <table>
                <tbody>
                    <tr>
                        <td>    
                            <label>Name: </label>
                        </td>
                        <td>
                            <input
                                id = "name"
                                defaultValue = {props.edit.customer.name}
                                onChange  = {handleChange}
                                type = "text"/>
                        </td>
                        <td>
                            <label>Tel :</label>
                        </td>
                        <td>
                            <input
                                id = "phoneNumber"
                                defaultValue = {props.edit.customer.phoneNumber}
                                onChange  = {handleChange}
                                type = "text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Date :</label>
                        </td>
                        <td>
                            <input 
                                id = "date"
                                defaultValue = {props.edit.date} 
                                onChange = {handleChange} 
                                type = "date"/>
                        </td>
                        <td>
                            <label>Time :</label>
                        </td>
                        <td>
                            <input 
                                id = "time"
                                defaultValue = {props.edit.time} 
                                onChange = {handleChange} 
                                type = "time"
                                step = "900"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Covers :</label>
                        </td>
                        <td>
                            <input 
                                id = "covers"
                                defaultValue = {props.edit.numPeople} 
                                onChange = {handleChange} 
                                type = "number" 
                                placeholder = "covers"/>
                        </td>
                        <td>
                            <label>Table :</label>
                        </td>
                        <td>
                            <input
                                id = "table"
                                defaultValue = {props.edit.diningTable.id}
                                onChange  = {handleChange}
                                type = "text"/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type = "submit">Save Changes</button>
            <hr/>

        </form>

    )

}

export default EditForm;