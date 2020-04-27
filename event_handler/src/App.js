import React from 'react';

import './App.css';

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment=  this.increment.bind(this)
  }

  increment(){
     this.setState((prevState, props) =>{
       return {count: prevState.count+1}
     })
  }


  render() {
    return <button onClick={this.increment}>{this.state.count}</button>
  }



}


export default Counter