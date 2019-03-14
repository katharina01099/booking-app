import React, {useState} from 'react'

const DateFilter = (props) => {

  const [dateValue, setDateValue] = useState()

  function handleChange(event){
    const dateString = event.target.value; 
    
    if (dateString.length !== 10){return null};

    props.handleDateFilter(dateString);
  }

  function inputReset(event){
    const input = document.getElementById("date-input");
    input.valueAsDate = null;
    props.resetFilter()
  }

  return (
    <div>
        <input id = "date-input" onChange={handleChange}type="date" defaultValue = {null}/>
        <button onClick={inputReset}>Show all</button>
    </div>
  )
}

export default DateFilter;

  
