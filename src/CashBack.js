import React, {Component} from 'react';
import axios from 'axios';
import Zpform from './Zpform';

class CashBack extends Component {
    constructor(props){
        super(props);
        this.state ={
            bcMultiplier : '0.021',
            bcAmount :'',
            amountCash : '',
            amountCashless : '',
            title : '',
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBcMultiplier = this.handleChangeBcMultiplier.bind(this);
        this.handleChangeAmountChash = this.handleChangeAmountChash.bind(this);
        this.handleChangeAmountChashless = this.handleChangeAmountChashless.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChangeTitle(event){
        this.setState({
            title : event.target.value,
        });
    };
    handleChangeBcMultiplier(event){
        event.preventDefault();
        this.setState({
            bcMultiplier : event.target.value,
        });
    };
    handleChangeAmountChash(event){
        var acless = (this.state.amountCash) * ('1' + this.state.bcMultiplier)
        this.setState({
            amountCash : event.target.value,
            amountCashless : acless,
        });
    };
    handleChangeAmountChashless(event){
        var ac = (this.state.amountCashless) / ('1' + this.state.bcMultiplier)
        this.setState({
            amountCashless : event.target.value,
            amountCash : ac,
        });
    };
    handleSubmit(event){
        if (!(this.state.amountCash && this.state.amountCashless)){
            axios.post('/cashBack',{
                withDraw : {
                    bcMultiplier : this.state.bcMultiplier,
                    bcAmount : this.state.amountCash * this.state.bcMultiplier,
                },
                outcome : {
                    type : 'cashless',
                    amount : this.state.amountCashless,
                    title : 'Зарплата: ' + this.state.title,
                },
            })
            .then(res => {
                this.setState({
                    bcMultiplier : 0.021,
                    bcAmount :'',
                    amountCash : '',
                    amountCashless : '',
                    title : '',
                });
            })
            .catch(error => {
                console.error();
            });
        }
        else{
            alert('Заполните поля');
        }
    };
    render(){
        return(
            <Zpform valueTitle={this.state.title} valueBcMultiplier={this.state.bcMultiplier} 
            valueAmountCash={this.state.amountCash} valueAmountCashless={this.state.amountCashless}
            onChangeTitle={this.handleChangeTitle} onChangeBM={this.handleChangeBcMultiplier}
            onChangeAC={this.handleChangeAmountChash} onChangeACless={this.handleChangeAmountChashless}
            onSubmit={this.handleSubmit} />
        )
  }  
}
export default CashBack;