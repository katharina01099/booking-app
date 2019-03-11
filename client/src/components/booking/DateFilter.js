import React from 'react'

const DateFilter = (props) => {

  function handleChange(event){
    const dateString = event.target.value; 
    
    if (dateString.length !== 10){return null};
    console.log(dateString);

    props.handleDateFilter(dateString);
  }

  return (
    <div>
        <input onChange={handleChange}type="date"/>
        <button>Show all</button>
    </div>
  )
}

export default DateFilter;

  
