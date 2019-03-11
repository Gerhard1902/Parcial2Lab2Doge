import React, { Component } from 'react';
import logo from './logo.svg';
import doge from "./doge.jpg";
import './App.css';

class DogeMeme extends Component {
  constructor(props){
    super(props);
    this.state={
      message1: "",
      message2: "",
    };
     // This binding is necessary to make `this` work in the callback
     //https://reactjs.org/docs/handling-events.html
    this.handleFirst = this.handleFirst.bind(this);
    this.handleSecond = this.handleSecond.bind(this);
  }
  handleFirst(event) {
    this.setState({message1: event.target.value.toUpperCase()});
  }
  handleSecond(event) {
    this.setState({message2: event.target.value.toUpperCase()});
  }
  render() {
    return (
       <div>
        <form>
          <input type="text"  onChange={this.handleFirst} />
          <input type="text"  onChange={this.handleSecond} />
        </form>
        <div className="Doge">
          <p>{this.state.message1}</p>
          <p>{this.state.message2}</p>
        </div>
      </div>
      
    );
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
export default DogeMeme;

 
































