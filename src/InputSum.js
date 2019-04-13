import React from 'react';
import './App.css';
var InputSum = (props) => {
  return (
    <>
      <input type='number' value={props.value} onChange={props.onChange}/>
      <select onChange={props.onChange} value={props.value}>
        <option value=''>ТИП</option>
        <option value='cash'>НАЛ</option>
        <option value='cashless'>БЕЗНАЛ</option>
      </select>
    </>
  );
}
export default InputSum;
