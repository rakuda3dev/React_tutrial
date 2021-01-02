import React, { Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { identifier } from '@babel/types';

// mapping of state
function mappingState(state){
  return state;
}

//App component
class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

// connect of state
App = connect()(App);

// component of message
class Message extends Component {

  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <p style={this.style}>{this.props.counter}</p>
    );
  }
}

// connect of store
Message = connect(mappingState)(Message);

// component of button view
class Button extends Component{
  style = {
    fontSize:"16pt",
    padding:"5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // excute dispatch
  doAction(e){
    if (e.shiftKey){
      this.props.dispatch({type:"DECREMENT"});
    } else{
      this.props.dispatch({type:'INCREMENT'});
    }
  }

  render(){
    return (
      <button style={this.style} onClick ={this.doAction}>
        click
      </button>
    );
  }
}

//connect of state
Button = connect()(Button);

export default App;