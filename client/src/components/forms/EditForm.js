import React, {useState} from 'react';

const EditForm = (props) => {
    const [booking, setBooking] = useState({
        date: props.edit.date, 
        time: props.edit.time, 
        covers: props.edit.numPeople });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setBooking({...booking, [id]: value})
    }

    return (
        <form onSubmit = {(e) => {e.preventDefault(); props.handleEdit(booking)}}>
            <input 
                id = "date"
                defaultValue = {props.edit.date} 
                onChange = {handleChange} 
                type = "date"/>
           
            <input 
                id = "time"
                defaultValue = {props.edit.time} 
                onChange = {handleChange} 
                type = "time"
                step = "900"/>

            <input 
                id = "covers"
                defaultValue = {props.edit.numPeople} 
                onChange = {handleChange} 
                type = "number" 
                placeholder = "covers"/>

            <button type = "submit">Save Changes</button>
            <hr/>

        </form>

    )

}

export default EditForm;