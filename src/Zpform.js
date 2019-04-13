import React from 'react';

var Zpform = props => {
    return(
        <form method="POST" onSubmit={props.onSubmit}>
            <span>Кому</span>
            <input value={props.valueTitle} className='form-control' onChange={props.onChangeTitle}/>
            <span>процент банка</span>
            <input type='number' value={props.valueBcMultiplier} className='form-control' onChange={props.onChangeBM}/>
            <span>Кол-во денег налом</span>
            <input type='number' value={props.valueAmountCash} className='form-control' onChange={props.onChangeAC}/>
            <span>Кол-во денег безналом</span>
            <input type='number' value={props.valueAmountCashless} className='form-control' onChange={props.onChangeACless}/>
            <br/>
            <br/>
            <input type='submit' value='ok' className='btn btn-primary btn-lg' onClick={props.onClick}/>
        </form>
    )
}
export default Zpform;