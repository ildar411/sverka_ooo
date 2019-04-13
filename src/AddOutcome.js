import React, { Component } from 'react';
import CoveredOutcome from './CoveredOutcome';
import InputSum from './InputSum';
import axios from 'axios';

class AddOutcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      titleOutcome : '',
      typeOutcome : '',
      amountOutcome : '',
      coveredCheked : false,
      coveredOrg : '',
      coverShare : '',
      amountIncome : '',
      typeIncome : '',
      disp : 'none',
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleCover = this.handleCover.bind(this);
    this.handleChangeOrg = this.handleChangeOrg.bind(this);
    this.handleChangeShare = this.handleChangeShare.bind(this);
    this.handleChangeAmountIn = this.handleChangeAmountIn.bind(this);
    this.handleChangeTypeIncome = this.handleChangeTypeIncome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChangeTitle(event){
    this.setState({
      titleOutcome : event.target.innerHTML
    });
  };
  handleChangeType(event){
    this.setState({
      typeOutcome : event.target.innerHTML
    });
  };
  handleChangeAmount(event){
    this.setState({
      amountOutcome : event.target.value
    });
  }
  handleCover(event){
    this.setState({
      coveredCheked : event.target.value
    });
     if(!this.state.coveredCheked){
      this.setState({
        disp : 'block'
      });
    }
    else{
      this.setState({
        disp : 'none'
      })
    };
    if(this.state.disp == 'block'){
      this.setState({
        coveredCheked : false,
      });
    }
    else{
      this.setState({
        coveredCheked : true,
      });
    }
  }
  handleChangeOrg(event){
    this.setState({
      coveredOrg : event.target.innerHTML
    });
  }
  handleChangeShare(event){
    this.setState({
      coverShare : event.target.value
    });
  }
  handleChangeAmountIn(event){
    this.setState({
      amountIncome : event.target.value
    });
  }
  handleChangeTypeIncome(event){
    this.setState({
      typeIncome : event.target.value
    });
  }
  handleSubmit(event){
    var recMarkup = this.state.amountOutcome*this.state.coverShare*6/94
    var factMarkup = this.state.amountIncome-this.state.amountOutcome*this.state.coverShare
    if(this.state.coveredCheked){
      axios.post('./add/outcome/covered',
      {
        outcome : { 
          title : this.state.titleOutcome,
          type : this.state.typeOutcome,
          amount : this.state.amountOutcome,
        },
        coveredOutcome : {
          coveredOrg : this.state.coveredOrg,
          coverShare : this.state.coverShare,
          recMarkup : recMarkup,
          factMarkup : factMarkup,
        },
        income :
        {
          amount : this.state.amountIncome,
          type : this.state.typeIncome,
          title : "Покрытие: " + this.state.coveredOrg,
        },
      
      })
    .then(res => {
      this.setState({
        titleOutcome : '',
        typeOutcome : '',
        amountOutcome : '',
        coveredCheked : "",
        coveredOrg : '',
        coverShare : '',
        amountIncome : '',
        typeIncome : '',
      });
    })
    .catch(error => {
      console.error();
    });
    }
    else{
      axios.post('./add/outcome/simple',
      {
        titleOutcome : this.state.titleOutcome,
        typeOutcome : this.state.typeOutcome,
        amountOutcome : this.state.amountOutcome,
      })
      .then(res => {
        this.setState({
          titleOutcome : '',
          typeOutcome : '',
          amountOutcome : '',
        });
      })
    };
  }
  render(){
    var style = {display : this.state.disp};
    return(
      <form method='POST' onSubmit={this.handleSubmit}>
        <p>Название Расхода:</p>
        <input onChange={this.handleChangeTitle} className='form-control'/>
        <p>Тип Расхода:</p>
        <select onChange={this.handleChangeType} className='form-control'>
         <option value="">ТИП</option>
         <option value='cash'>НАЛ</option>
         <option value='cashless'>БЕЗНАЛ</option>
        </select>
        <p>Кол-во денег</p>
        <input value={this.state.amountOutcome} onChange={this.handleChangeAmount} className='form-control'/>
        <p>Покрытие</p>
        <input type='checkbox' value={this.state.coveredCheked} onClick={this.handleCover} className='form-control'/>
        <div style={style}>
          <p>Наименование орги</p>
          <input onChange={this.handleChangeOrg} className='form-control'/>
          <p>доля покрытия</p>
          <input value={this.state.coverShare} onChange={this.handleChangeShare} className='form-control'/>
          <p>Без налога={this.state.amountOutcome*this.state.coverShare}</p>
          <p>Рекоменндуемая наценка{this.state.amountOutcome*this.state.coverShare*6/94}</p>
          <p>Рекомендуемая выплата{this.state.amountOutcome*this.state.coverShare*100/94}</p>
          <p>Сколько выделим средств</p>
          <input type='number' onChange={this.handleChangeAmountIn} className='form-control'/>
          <p>Тип расхода</p>
          <select onChange={this.handleChangeType} className='form-control'>
            <option value="">ТИП</option>
            <option value='cash'>НАЛ</option>
            <option value='cashless'>БЕЗНАЛ</option>
          </select>
        </div>
        <input type="submit" value='Добавить' className='btn btn-primary btn-lg'/>
      </form>
    );
  };
}
export default AddOutcome;
