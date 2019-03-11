import React, {useState} from 'react';

function EditForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [covers, setCovers] = useState("");

    return (
        <form>
            <input value = {date} onChange = {(e) => setDate(e.target.value)} type ="date"/>
           
            <input value = {time} onChange = {(e) => setTime(e.target.value)} type ="time"/>

            <input value = {covers} onChange = {(e) => setCovers(e.target.value)} type = "number" placeholder="covers"/>
            <button>Post</button>

        </form>

    )

}

export default EditForm;