import React, {useState} from 'react';

const EditForm = (props) => {
    const [date, setDate] = useState(props.edit.date);
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [covers, setCovers] = useState(props.edit.numPeople);

    return (
        <form>
            <input 
                value = {date} 
                onChange = {(e) => setDate(e.target.value)} 
                type = "date"/>
           
            <input 
                value = {hours} 
                onChange = {(e) => setHours(e.target.value)} 
                type = "number"
                min = "0"
                max = "23"
                placeholder = "Hr"/>
            <input 
                value = {minutes} 
                onChange = {(e) => setMinutes(e.target.value)} 
                type = "number"
                min = "0"
                max = "45"
                step = "15"
                placeholder = "Min"/>

            <input 
                value = {covers} 
                onChange = {(e) => setCovers(e.target.value)} 
                type = "number" 
                placeholder = "covers"/>

            <button type = "submit">Save Changes</button>
            <hr/>

        </form>

    )

}

export default EditForm;