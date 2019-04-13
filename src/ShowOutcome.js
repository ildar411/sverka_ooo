import React, {Component} from 'react';
import ShowList from './ShowList';
import axios from 'axios';
import ShowList from './ShowList';

class ShowOutcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      dateStart : '',
      dateEnd : '',
      disp : 'none',
      list : [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  };
  handleSubmit(event){
    axios.get('./url_sort_outcome', {
      params : {
        dateStart : this.state.dateStart,
        dateEnd : this.state.dateEnd,
      }
    })
    .then(res => {
      this.setState({
        list : res.data,
      })
      handleDisplay();
    })
    .catch(error => {
      console.error();
    });
  }
  handleDisplay(){
    this.setState({
      disp : 'display',
    });
  }
  handleChangeEnd(event){
    this.serState({
      dateEnd : event.target.value,
    });
  }
  handleChangeStart(event){
    this.setState({
      dateStart : event.target.value,
    });
  }

}
export default ShowOutcome
