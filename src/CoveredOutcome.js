import React, { Component } from 'react';
import './App.css';

var CoveredOutcome = (props) => {
  return(
    <>
      <p>Название Организации:</p>
      <input onChange={props.onChange} value={props.value}/>
      <p>Доля покрытия:</p>
      <input onChange={props.onChange} value={props.value} checkNumber={props.checkNumber}/>
    </>
  );
}
export default CoveredOutcome;
