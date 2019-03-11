import React from 'react'

const DateFilter = (props) => {

  function testFunction(event){
    props.handleDateFilter(event.target.value);
  }

  return (
    <input onChange={testFunction}type="date"/>
  )
}

export default DateFilter;

  
