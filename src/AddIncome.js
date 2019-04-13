import React, {Component} from 'react';
import axios from 'axios';

class AddIncome extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameIncome : '',
      typeIncome : '',
      amountIncome : '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChangeName(event){
    this.setState({
      nameIncome : event.target.value,
    });
  };
  handleChangeType(event){
    this.setState({
      typeIncome : event.target.value,
    });
  };
  handleChangeAmount(event){
    this.setState({
      amountIncome : event.target.value,
    });
  };
  handleSubmit(event){
    event.preventDefault();
    axios.post('./add_income',{
      income:
      {  
        title : this.state.nameIncome,
        type : this.state.typeIncome,
        amount : this.state.amountIncome,
      }
    })
    .this(res => {
    this.setState({
      nameIncome : '',
      typeIncome : '',
      amountIncome : '',
    });
    })
    .catch(error => {
      console.error();
    });
  };
  render(){
    return(
      <>
        <span>Добавить доход</span>
        <form method='POST' onSubmit={this.handleSubmit}>
          <p>Название дохода:</p>
          <input onChange={this.handleChangeName}  className="form-control"/>
          <p>Тип дохода</p>
          <select onChange={this.handleChangeType} className="form-control">
            <option value=''>ТИП</option>
            <option value='cash'>НАЛ</option>
            <option value='cashless'>БЕЗНАЛ</option>
          </select>
          <p>Сумма</p>
          <input onChange={this.handleChangeAmount} className="form-control"/>
          <input type='submit' value='добавить' className="btn btn-primary btn-lg"/>
        </form>
      </>
    );
  };
}
export default AddIncome;
