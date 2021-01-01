import React, { Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component{

  data = [
    "This is list sample",
    "これはリストのサンプルです",
    "配列をリストに格納します"
  ];

  data2 = [
    "This is list sample 2",
    "増やしてみたやつ",
    "ABCDEFG"
  ]

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  constructor(props){
    super(props);
    this.state ={
      list:this.data
    };
  }

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list.</h2>
      <List title="サンプルリスト" data={this.data} />
      <List title="サンプル2" data={this.data2} />
    </div>;
  }
}
class List extends Component{
  number = 1;

  title = {
    fontSize:"20pt",
    fontWight:"bold",
    colot:"blue"
  }

  render(){
    let data = this.props.data;
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item)=>
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}

class Item extends Component{
  li = {
    lisrStyleType:"squere",
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding:"0px",
  }

  num = {
    fontWeight:"bold",
    color:"red"
  }

  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
        {this.props.value}
      </li>
    );
  }
}


export default App;