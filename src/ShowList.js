import React from 'react';
import './App.css';

var ShowList = (props) =>{
  <table className='table'>
    {props.list.map((lis) => {
      if(props.lis.coveredOrg)
      {
        <tr><td>Дата:{lis.date}</td><td>Название:{lis.name}</td><td>Sum:{lis.sum}</td>
        <td>Type:{lis.type}</td><td>CoveredOrg:{lis.coveredOrg}</td><td>CoverShare:{lis.coverShare}</td>
        <td>Заплатили:{lis.amountIncome}</td><td>Тип оплаты:{lis.typeIncome}</td></tr>
      };
      if(!props.lis.coveredOrg){
        <tr><td>Дата:{lis.date}</td><td>Название:{lis.name}</td><td>Sum:{lis.sum}</td>
        <td>Type:{lis.type}</td></tr>
      };
    });
  }
  </table>
};
export default ShowList;
