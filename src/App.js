import React, { Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { identifier, thisExpression } from '@babel/types';

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
// connect store
App = connect()(App);

// Message component
class Message extends Component{
  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <p style={this.style}>
        {this.props.message} : {this.props.counter}
      </p>
    );
  }
}

// connect store
Message = connect((state)=>state)(Message);

// button component
class Button extends Component{
  style= {
    fontSize:"16pt",
    padding:"5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // dispatch when click dispatch
  doAction(e){
    if(e.shiftKey){
      this.props.dispatch({type:'DECREMENT' });
    } else if (e.ctrlKey){
      this.props.dispatch({type:'RESET'});
    } else {
      this.props.dispatch({type:'INCREMENT'});
    }
  }

  render(){
    return(
      <button style={this.style} onClick={this.doAction}>
        click
      </button>
    );
  }
}

// connect store
Button = connect()(Button);

export default connect()(App);