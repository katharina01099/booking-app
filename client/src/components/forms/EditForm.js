import React, {useState} from 'react';

const EditForm = (props) => {
    const [date, setDate] = useState(props.edit.date);
    const [time, setTime] = useState(props.edit.time);
    const [covers, setCovers] = useState(props.edit.numPeople);

    return (
        <form>
            <input 
                value = {date} 
                onChange = {(e) => setDate(e.target.value)} 
                type = "date"/>
           
            <input 
                value = {time} 
                onChange = {(e) => setTime(e.target.value)} 
                type = "time"
                step = "900"/>

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