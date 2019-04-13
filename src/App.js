import React, { Component } from 'react';
import './App.css';
import AddIncome from './AddIncome';
import AddOutcome from './AddOutcome';
import CashBack from './CashBack';
//import ShowIncome from './ShowIncome';
//import ShowOutcome from './ShowOutcome';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view1 : 'none',
      view2 : 'none',
      view3 : 'none',
      view4 : 'none',
    }
    this.onClickIncome = this.onClickIncome.bind(this);
    this.onClickOutcome = this.onClickOutcome.bind(this);
    this.onClickCashBack = this.onClickCashBack.bind(this);
    };
  onClickIncome(event){
    event.preventDefault();
    this.setState({
      view1 : 'block',
      view2 : 'none',
      view3 : 'none',
      view4 : 'none',
    })
  }
  onClickOutcome(event){
    event.preventDefault();
    this.setState({
      view2 : 'block',
      view1 : 'none',
      view3 : 'none',
      view4 : 'none',
    })
  }
  onClickShowIncome(event){
    event.preventDefault();
    this.setState({
      view1 : 'none',
      view2 : 'none',
      view3 : 'none',
      view4 : 'block',
    })
  }
  onClickCashBack(event){
    event.preventDefault();
    this.setState({
      view1 : 'none',
      view2 : 'none',
      view3 : 'block',
      view4 : 'none',
    })
  }
  render() {
    const style1 = {display : this.state.view1};
    const style2 = {display : this.state.view2};
    const style3 = {display : this.state.view3};
    const style4 = {display : this.state.view4};
    return (
      <div className="App">
        <div className='navbar navbar-inverse navbar-fixed-top' role='navigation' id='App-header'>
          <div className='container'>
            <ul className='nav navbar-nav'>
              <li className='navbar-brand'>Сверка Veryfood с Порядочными</li>
              <li onClick={this.onClickIncome} id='nav'> Добавить доход </li>
              <li onClick={this.onClickOutcome} id='nav'> Добавить расход </li>
              <li id='nav' onClick={this.onClickCashBack}> Съем бабла </li>
            </ul>
          </div>
        </div>
      <div style={style1} id='AddIncome'>
        <AddIncome />
      </div>
      <div style={style2} id='AddOutcome'>
        <AddOutcome />
      </div>
      <div style={style3} id='CashBack'>
        <CashBack />
      </div> 
    </div>
    );
  }
}

export default App;
