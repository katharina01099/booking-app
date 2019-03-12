import React, {useState} from 'react';

function EditForm() {
    const [date, setDate] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [covers, setCovers] = useState("");

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

            <button type = "submit">Post</button>

        </form>

    )

}

export default EditForm;