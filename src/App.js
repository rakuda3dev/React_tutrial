import React, { Component} from 'react';
import Rect from './Rect';
import './App.css';
import { identifier } from '@babel/types';

let theme = {
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px",
  },
  dark:{
    backgroundColor:"#006",
    color:"eef",
    padding:"10px",
  }
};

const ThemeContext = React.createContext(theme.light); // light or dark で見た目が変わる

class App extends Component{

  static contextType = ThemeContext;

  render(){
    return (
      <div style={this.context}>
        <Title value="Content Page"/>
        <Message value="This is Content sample"/>
        <Message value="This is Theme sample" />
      </div>
    );
  }
}

class Title extends Component{
  static contextType = ThemeContext;

  render(){
    return (
      <div>
        <h2 style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {

  static contextType = ThemeContext;

  render(){
    return (
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;